import { html } from "../utilities/html";
import { RssButton } from "./RssButton";
import { ThemeButton } from "./ThemeButton";
import {
  NavigationToggleButton,
  NavigationToggleCheckbox,
} from "./NavigationToggle";
import { Navigation } from "./Navigation";
import { SidebarBanners } from "./SidebarBanners";

type LayoutProps = {
  body: string;
};

const fullDate = Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
});

export const Layout = ({ body }: LayoutProps) => {
  const postDate = fullDate.format(new Date());

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/public/main.css" />
        <title>Ignore This Page</title>
      </head>
      <body class="body-container">
        ${NavigationToggleCheckbox()}
        <header class="header">
          <div class="header__title">
            <h1>Ignore This Page</h1>
            <small class="small-screen-hidden"
              >Move along, nothing to see here...</small
            >
          </div>
          <div class="header__actions">
            ${RssButton("#")} ${ThemeButton()} ${NavigationToggleButton()}
          </div>
        </header>
        ${Navigation()}
        <main class="main">
          <article>
            <small>${postDate}</small>
            ${body}
          </article>
        </main>
        <aside class="sidebar">
          <section class="sidebar-widget">
            <header class="sidebar-widget__header">Recent Posts</header>
            <ul class="sidebar-widget__content sidebar-widget__content--list">
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
                <a href="#" tabindex="0" title="Making Goodreads clone">
                  Making Goodreads clone
                </a>
              </li>
              <li class="sidebar-widget__list-item">
                <a
                  href="#"
                  tabindex="0"
                  title="A few thoughts on software quality"
                >
                  A few thoughts on software quality
                </a>
              </li>
            </ul>
          </section>
          <section class="sidebar-widget">
            <header class="sidebar-widget__header">Tags</header>
            <ul class="sidebar-widget__content sidebar-widget__content--tags">
              <li class="sidebar-widget__tag"><a href="#">Thoughts</a></li>
              <li class="sidebar-widget__tag">
                <a href="/tags/graphics">Graphics</a>
              </li>
              <li class="sidebar-widget__tag">
                <a href="/tags/game-development">Game Development</a>
              </li>
              <li class="sidebar-widget__tag">
                <a href="/tags/backend">Backend</a>
              </li>
              <li class="sidebar-widget__tag">
                <a href="/tags/electronics">Electronics</a>
              </li>
              <li class="sidebar-widget__tag">
                <a href="/tags/drumming">Drumming</a>
              </li>
              <li class="sidebar-widget__tag">
                <a href="/tags/gardening">Gardening</a>
              </li>
              <li class="sidebar-widget__tag">
                <a href="/tags/frontend">Frontend</a>
              </li>
              <li class="sidebar-widget__tag">
                <a href="/tags/other">Other</a>
              </li>
              <li class="sidebar-widget__tag">
                <a href="/tags/memes">Memes</a>
              </li>
              <li class="sidebar-widget__tag">
                <a href="/tags/interesting">Interesting</a>
              </li>
              <li class="sidebar-widget__tag">
                <a href="/tags/diy">DIY</a>
              </li>
            </ul>
          </section>
          ${SidebarBanners()}
        </aside>
        <footer class="footer">
          © Copyleft ${new Date().getFullYear().toString()}
        </footer>
      </body>
    </html>`;
};
