import { html } from "~/utilities/html";
import { PostMeta } from "~/models/PostMeta";

const RenderNoPosts = () => html` <div
  class="sidebar-widget__content sidebar-widget__content--tags"
>
  No recent posts yet.
</div>`;

const RenderPosts = (recentPosts: PostMeta[]) => html`<ul
  class="sidebar-widget__content sidebar-widget__content--list"
>
  ${recentPosts.map(
    (post) => html`<li class="sidebar-widget__list-item">
      <a href="/post/${post.slug}" tabindex="0" title="${post.title}">
        ${post.title}
      </a>
    </li>`
  )}
</ul>`;

export const RecentPostsWidget = (recentPosts: PostMeta[]) => {
  return html`<section class="sidebar-widget">
    <header class="sidebar-widget__header">Recent Posts</header>
    ${recentPosts.length > 0 ? RenderPosts(recentPosts) : RenderNoPosts()}
  </section>`;
};
