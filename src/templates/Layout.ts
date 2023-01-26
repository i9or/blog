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
import { ROUTES } from "~/constants";

type LayoutProperties = {
  body: string;
  tags: Tag[];
  recentPosts: PostMeta[];
};

export const Layout = ({ body, tags, recentPosts }: LayoutProperties) =>
  html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="${network2Ico}" type="image/x-icon" />
        <link rel="icon" href="${network2Ico}" type="image/x-icon" />
        <link rel="stylesheet" href="${mainStyles}" />
        ${DevelopmentScripts()}
        <title>Ignore This Page</title>
      </head>
      <body class="body-container">
        ${NavigationToggleCheckbox()}
        <header class="header">
          <div class="header__title">
            <h1><a href="/${ROUTES.home}">Ignore This Page</a></h1>
            <small class="small-screen-hidden">
              Move along, nothing to see here...
            </small>
          </div>
          <div class="header__actions">
            ${RssButton()} ${NavigationToggleButton()}
          </div>
        </header>
        ${Navigation()}
        <main class="main">${body}</main>
        <aside class="sidebar">
          ${RecentPostsWidget(recentPosts)} ${TagsWidget(tags)}
          ${SidebarBanners()}
        </aside>
        ${Footer()}
      </body>
    </html>`;
