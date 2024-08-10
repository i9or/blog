import mainStyles from "~/styles/main.css";
import { html } from "~/utilities/html";
import { network2Ico } from "~/assets";

import {
  NavigationToggleButton,
  NavigationToggleCheckbox,
} from "./NavigationToggle";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { RssButton } from "./RssButton";
import { SidebarBanners } from "./SidebarBanners";
import { TagsWidget } from "./TagsWidget";
import { RecentPostsWidget } from "./RecentPostsWidget";
import { PostMeta, Tag } from "~/types";
import { DevelopmentScripts } from "~/templates/DevelopmentScripts";
import { BLOG_TITLE, ROUTES } from "~/constants";
import { ThemeButton } from "~/templates/ThemeButton";
import { HitCounter } from "~/templates/HitCounter";

type LayoutProperties = {
  title?: string;
  body: string;
  tags: Tag[];
  recentPosts: PostMeta[];
};

const resolveBlogTitle = (title?: string) =>
  title ? `${BLOG_TITLE} | ${title}` : BLOG_TITLE;

export const Layout = ({ title, body, tags, recentPosts }: LayoutProperties) =>
  html`<!doctype html>
    <html lang="en" data-theme="system">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Yet another technical blog. Whatever..."
        />
        <link rel="shortcut icon" href="${network2Ico}" type="image/x-icon" />
        <link rel="icon" href="${network2Ico}" type="image/x-icon" />
        <link rel="stylesheet" href="${mainStyles}" />
        ${DevelopmentScripts()}
        <title>${resolveBlogTitle(title)}</title>
      </head>
      <body class="body-container">
        ${NavigationToggleCheckbox()}
        <header class="header">
          <div class="header__title">
            <h1><a href="/${ROUTES.home.path}">${BLOG_TITLE}</a></h1>
            <small class="small-screen-hidden">
              Move along, nothing to see here...
            </small>
          </div>
          <div class="header__actions">
            ${RssButton()} ${ThemeButton()} ${NavigationToggleButton()}
          </div>
        </header>
        ${Navigation()}
        <main class="main">${body}</main>
        <aside class="sidebar">
          ${RecentPostsWidget(recentPosts)} ${TagsWidget(tags)}
          ${SidebarBanners()} ${HitCounter()}
        </aside>
        ${Footer()}
      </body>
    </html>`;
