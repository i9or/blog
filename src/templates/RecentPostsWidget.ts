import { html } from "~/utilities/html";

export const RecentPostsWidget = () => {
  return html`<section class="sidebar-widget">
    <header class="sidebar-widget__header">Recent Posts</header>
    <!--<ul class="sidebar-widget__content sidebar-widget__content--list">
              <li class="sidebar-widget__list-item">
                <a
                  href="https://example.com"
                  tabindex="0"
                  title="Implementation of simple software renderer"
                >
                  Implementation of simple software renderer
                </a>
              </li>
              <li class="sidebar-widget__list-item">
                <a
                  href="https://example.com"
                  tabindex="0"
                  title="Making Goodreads clone"
                >
                  Making Goodreads clone
                </a>
              </li>
              <li class="sidebar-widget__list-item">
                <a
                  href="https://example.com"
                  tabindex="0"
                  title="A few thoughts on software quality"
                >
                  A few thoughts on software quality
                </a>
              </li>
            </ul>-->
    <div class="sidebar-widget__content sidebar-widget__content--tags">
      No recent posts yet.
    </div>
  </section>`;
};
