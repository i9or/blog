import { Layout } from "~/templates/Layout";
import { cp, mkdir, opendir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import dayjs from "dayjs";

import { Post, PostMeta, Tag } from "~/types";
import { SinglePost } from "~/templates/SinglePost";
import { toSlug } from "~/utilities/toSlug";
import { NowPage } from "~/templates/NowPage";
import { AboutPage } from "~/templates/AboutPage";
import { ArchivePage } from "~/templates/ArchivePage";
import { ROUTES } from "~/constants";
import { isProduction } from "~/utilities/development";
import { PrivacyPolicyPage } from "~/templates/PrivacyPolicyPage";
import { ErrorPage } from "~/templates/ErrorPage";
import { TagPage } from "~/templates/TagPage";

const prepareBlogData = async (postsPath: string) => {
  const posts: Post[] = [];
  const postsByTag = new Map<
    Tag["text"],
    {
      slug: Tag["slug"];
      posts: PostMeta[];
    }
  >();
  const recentPosts: PostMeta[] = [];

  try {
    const postsDirectory = await opendir(postsPath);

    for await (const entry of postsDirectory) {
      const entryContents = await readFile(join(postsPath, entry.name), {
        encoding: "utf-8",
      });
      const isDraft = entry.name.at(0) === "_";
      const entryName = isDraft ? entry.name.slice(1) : entry.name;
      const [year, month, day, ...postSlug] = entryName.split("-");
      const [empty, metaJson, content] = entryContents.split("=====");

      if (empty !== "") {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error(`Post "${entry.name}" is formatted incorrectly!`);
      }

      const { tags }: { tags: string[] } = JSON.parse(metaJson);

      const title = content.match(/#(.+)/g);

      if (!title || !title[0]) {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error(`Post ${entry.name} does not have a title`);
      }

      const postMeta: PostMeta = {
        title: title[0]
          .replace("#", "")
          .replace("\n", "")
          .replace("\r", "")
          .trim(),
        slug: postSlug.join("-").replace(".md", ""),
        createdAt: dayjs(`${year}-${month}-${day}`).unix(),
      };

      const slugifiedTags: Tag[] = tags.map((tagText: string) => {
        const tagSlug = toSlug(tagText);
        const tag = postsByTag.get(tagText);

        let tagPosts: PostMeta[] = !tag ? [postMeta] : [...tag.posts, postMeta];

        postsByTag.set(tagText, {
          slug: tagSlug,
          posts: tagPosts,
        });

        return {
          slug: tagSlug,
          text: tagText,
        };
      });

      if (isProduction() && isDraft) {
        continue;
      }

      posts.push({
        content,
        createdAt: postMeta.createdAt,
        slug: postMeta.slug,
        tags: slugifiedTags,
        title: isDraft ? `Draft: ${postMeta.title}` : postMeta.title,
        isDraft,
      });
    }

    posts.sort((a, b) => b.createdAt - a.createdAt);

    for (let i = 0; i < 5 && i < posts.length; i++) {
      recentPosts.push({
        slug: posts[i].slug,
        title: posts[i].title,
        createdAt: posts[i].createdAt,
      });
    }
  } catch (err) {
    console.error(err);
    return;
  }

  const tags: Tag[] = [];
  postsByTag.forEach((tagMeta, tagText) => {
    tags.push({
      text: tagText,
      slug: tagMeta.slug,
    });
  });

  const postsMeta: PostMeta[] = posts.map((post) => ({
    title: post.title,
    createdAt: post.createdAt,
    slug: post.slug,
  }));

  return {
    posts,
    tags,
    recentPosts,
    postsByTag,
    postsMeta,
  };
};

const pageBuilder = (recentPosts: PostMeta[], tags: Tag[]) => {
  return async (body: string, buildPath: string, title?: string) => {
    const renderedPage = Layout({
      body,
      recentPosts,
      tags,
      title,
    });

    await mkdir(buildPath, { recursive: true });
    await writeFile(join(buildPath, "index.html"), renderedPage);
  };
};

const createNotFoundPage = async (buildPath: string) => {
  await writeFile(join(buildPath, "404.html"), ErrorPage("404"));
};

const createRobotsTxt = async (buildPath: string) => {
  await writeFile(
    join(buildPath, "robots.txt"),
    ["User-agent: *", "Disallow: /theme", ""].join("\n")
  );
};

export const buildBlog = async () => {
  process.stdout.write("Building the blog...");
  const start = process.hrtime();

  // Prepare phase
  const postsPath = resolve(process.cwd(), "content/posts");
  const blogData = await prepareBlogData(postsPath);

  if (!blogData) {
    throw new Error("Hey chief, something is wrong, no blog data at all!");
  }

  const { tags, recentPosts, posts, postsByTag, postsMeta } = blogData;

  // Build phase
  const buildPath = resolve(process.cwd(), "build");

  if (posts.length === 0) {
    throw new Error("Hey chief, something is wrong, no posts at all!");
  }

  const createNewPage = pageBuilder(recentPosts, tags);

  await mkdir(buildPath, { recursive: true });

  let mainPreviousPost: Optional<PostMeta> = undefined;

  if (posts.length > 1) {
    mainPreviousPost = {
      title: posts[1].title,
      slug: posts[1].slug,
      createdAt: posts[1].createdAt,
    };
  }

  // Building the main page
  await createNewPage(
    SinglePost({
      post: posts[0],
      tags: posts[0].tags,
      previousPost: mainPreviousPost,
    }),
    buildPath
  );

  // Building posts
  for (let i = 0; i < posts.length; i++) {
    let previous: Optional<PostMeta> = undefined;
    let next: Optional<PostMeta> = undefined;

    if (i > 0) {
      next = {
        slug: posts[i - 1].slug,
        title: posts[i - 1].title,
        createdAt: posts[i - 1].createdAt,
      };
    }

    if (i < posts.length - 1) {
      previous = {
        slug: posts[i + 1].slug,
        title: posts[i + 1].title,
        createdAt: posts[i + 1].createdAt,
      };
    }

    await createNewPage(
      SinglePost({
        post: posts[i],
        tags: posts[i].tags,
        previousPost: previous,
        nextPost: next,
      }),
      join(buildPath, ROUTES.post.path, posts[i].slug),
      posts[i].title
    );
  }

  for (let [tagText, tagMeta] of postsByTag.entries()) {
    await createNewPage(
      TagPage(
        tagText,
        tagMeta.posts.sort((a, b) => b.createdAt - a.createdAt)
      ),
      join(buildPath, ROUTES.tag.path, tagMeta.slug),
      `Posts tagged with ${tagText}`
    );
  }

  await createNewPage(
    NowPage(),
    join(buildPath, ROUTES.now.path),
    ROUTES.now.title
  );
  await createNewPage(
    AboutPage(),
    join(buildPath, ROUTES.about.path),
    ROUTES.about.title
  );
  await createNewPage(
    ArchivePage(postsMeta),
    join(buildPath, ROUTES.archive.path),
    ROUTES.archive.title
  );
  await createNewPage(
    PrivacyPolicyPage(),
    join(buildPath, ROUTES.privacyPolicy.path),
    ROUTES.privacyPolicy.title
  );

  await createRobotsTxt(buildPath);
  await createNotFoundPage(buildPath);

  if (isProduction()) {
    await cp(
      resolve(process.cwd(), "content/images"),
      join(buildPath, "images"),
      { recursive: true }
    );

    await cp(resolve(process.cwd(), "tmp/public"), join(buildPath, "public"), {
      recursive: true,
    });
  }

  const elapsed = Math.round(process.hrtime(start)[1] / 1000000);
  process.stdout.write(` done in ${elapsed}ms\n`);
};
