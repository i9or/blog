import dayjs from "dayjs";

import { calendarPng } from "~/assets";
import { di } from "~/di";
import { html } from "~/utilities/html";
import { Post, PostMeta, Tag } from "~/types";
import { ROUTES } from "~/constants";

type SinglePostProps = {
  post: Post;
  tags?: Tag[];
  nextPost?: PostMeta;
  previousPost?: PostMeta;
};

const RenderTags = (tags: Tag[]) => {
  if (tags.length > 0) {
    return html` <section class="post__tags">
      <span>Tags:</span>
      ${tags
        .map(({ slug, text }) => html`<a href="/tag/${slug}">${text}</a>`)
        .join(", ")}
    </section>`;
  } else {
    return "";
  }
};

export const SinglePost = ({
  post,
  tags = [],
  previousPost,
  nextPost,
}: SinglePostProps) => html`<article class="post">
  <div class="post__details">
    <small class="post__date">
      <img
        src="${calendarPng}"
        width="16"
        height="16"
        alt="Small calendar icon"
      />
      ${dayjs.unix(post.createdAt).format("MMMM D, YYYY")}
    </small>
    ${post.isDraft ? html`<small class="post__draft">Draft</small>` : ""}
  </div>
  ${di.md.render(post.content)}
  <p class="post__fin">☙</p>
  ${RenderTags(tags)}
  <section class="post__navigation">
    ${previousPost
      ? html`<a
          href="/${ROUTES.post.path}/${previousPost.slug}"
          title="${previousPost.title}"
        >
          <small>&larr; There</small>
        </a>`
      : "&nbsp;"}
    ${nextPost
      ? html`<a
          href="/${ROUTES.post.path}/${nextPost.slug}"
          title="${nextPost.title}"
        >
          <small>Here &rarr;</small>
        </a>`
      : "&nbsp;"}
  </section>
</article>`;
