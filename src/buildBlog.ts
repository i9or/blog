import { Layout } from "~/templates/Layout";
import * as fs from "node:fs/promises";
import path from "node:path";
import dayjs from "dayjs";

import { di } from "~/di";
import { Post, PostMeta, Tag } from "~/types";
import { SinglePost } from "~/templates/SinglePost";
import { toSlug } from "~/utilities/toSlug";
import { NowPage } from "~/templates/NowPage";
import { AboutPage } from "~/templates/AboutPage";
import { ArchivePage } from "~/templates/ArchivePage";
import { ROUTES } from "~/constants";

const prepareBlogData = async (postsPath: string) => {
  const posts: Post[] = [];
  const allTags = new Map<string, string>();
  const recentPosts: PostMeta[] = [];

  try {
    const postsDirectory = await fs.opendir(postsPath);

    for await (const entry of postsDirectory) {
      const [year, month, day, ...postSlug] = entry.name.split("-");
      const entryContents = await fs.readFile(
        path.join(postsPath, entry.name),
        {
          encoding: "utf-8",
        }
      );

      const [opening, metaJson, closing, empty, ...content] =
        entryContents.split("\n");

      if (opening !== "---" || closing !== "---" || empty !== "") {
        throw new Error(`Post "${entry.name}" is formatted incorrectly!`);
      }

      const { tags }: { tags: string[] } = JSON.parse(metaJson);

      const slugifiedTags: Tag[] = tags.map((tag: string) => {
        const s = toSlug(tag);
        allTags.set(tag, toSlug(tag));

        return {
          slug: s,
          text: tag,
        };
      });

      posts.push({
        content: content.join("\n"),
        slug: postSlug.join("-").replace(".md", ""),
        tags: slugifiedTags,
        createdAt: dayjs(`${year}-${month}-${day}`).unix(),
        title: content[0].replace("#", "").trim(),
      });
    }

    posts.sort((a, b) => b.createdAt - a.createdAt);

    for (let i = 0; i < 5 && i < posts.length; i++) {
      recentPosts.push({
        slug: posts[i].slug,
        title: posts[i].title,
      });
    }
  } catch (err) {
    di.logger.error(err);
    return;
  }

  const tags: Tag[] = [];
  allTags.forEach((slug, text) => {
    tags.push({
      text,
      slug,
    });
  });

  return {
    posts,
    tags,
    recentPosts,
  };
};

const pageBuilder = (recentPosts: PostMeta[], tags: Tag[]) => {
  return async (body: string, buildPath: string) => {
    const renderedPage = Layout({
      body,
      recentPosts,
      tags,
    });

    await fs.mkdir(buildPath, { recursive: true });
    await fs.writeFile(path.join(buildPath, "index.html"), renderedPage);
  };
};

export const buildBlog = async () => {
  // Prepare phase
  const postsPath = path.resolve(process.cwd(), "content/posts");
  const blogData = await prepareBlogData(postsPath);

  if (!blogData) {
    di.logger.error("Hey chief, something is wrong, no blog data at all!");
    throw new Error("No blog data");
  }

  const { tags, recentPosts, posts } = blogData;

  // Build phase
  const buildPath = path.resolve(process.cwd(), "build");

  if (posts.length === 0) {
    di.logger.error("Hey chief, something is wrong, no posts at all!");
    throw new Error("No posts");
  }

  const createNewPage = pageBuilder(recentPosts, tags);

  await fs.mkdir(buildPath, { recursive: true });

  let mainPreviousPost: Optional<PostMeta> = undefined;

  if (posts.length > 1) {
    mainPreviousPost = {
      title: posts[1].title,
      slug: posts[1].slug,
    };
  }

  await createNewPage(
    SinglePost({
      post: posts[0],
      tags: posts[0].tags,
      previousPost: mainPreviousPost,
    }),
    buildPath
  );

  for (let i = 0; i < posts.length; i++) {
    let previous: Optional<PostMeta> = undefined;
    let next: Optional<PostMeta> = undefined;

    if (i > 0) {
      next = {
        slug: posts[i - 1].slug,
        title: posts[i - 1].title,
      };
    }

    if (i < posts.length - 1) {
      previous = {
        slug: posts[i + 1].slug,
        title: posts[i + 1].title,
      };
    }

    await createNewPage(
      SinglePost({
        post: posts[i],
        tags: posts[i].tags,
        previousPost: previous,
        nextPost: next,
      }),
      path.join(buildPath, ROUTES.post, posts[i].slug)
    );
  }

  await createNewPage(NowPage(), path.join(buildPath, ROUTES.now));
  await createNewPage(AboutPage(), path.join(buildPath, ROUTES.about));
  await createNewPage(ArchivePage(), path.join(buildPath, ROUTES.archive));

  await fs.cp(
    path.resolve(process.cwd(), "content/images"),
    path.join(buildPath, "images"),
    { recursive: true }
  );
  await fs.cp(
    path.resolve(process.cwd(), "dist/public"),
    path.join(buildPath, "public"),
    { recursive: true }
  );
};
