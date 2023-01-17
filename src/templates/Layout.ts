import mainStyles from "~/styles/main.css";
import { getLocalsValueByKey, Locals } from "~/utilities/response";
import { html } from "~/utilities/html";
import { logPng, network2Ico } from "~/assets";

import {
  NavigationToggleButton,
  NavigationToggleCheckbox,
} from "./NavigationToggle";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { RssButton } from "./RssButton";
import { SidebarBanners } from "./SidebarBanners";
import { ThemeButton } from "./ThemeButton";
import { TagsWidget } from "./TagsWidget";
import { RecentPostsWidget } from "./RecentPostsWidget";

type LayoutProperties = {
  body: string;
  locals?: Locals;
};

export const Layout = ({ body, locals }: LayoutProperties) => {
  const hits = getLocalsValueByKey(locals, "hits") ?? 0;
  const tags = getLocalsValueByKey(locals, "tags") ?? [];
  const recentPosts = getLocalsValueByKey(locals, "recentPosts") ?? [];

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="${network2Ico}" type="image/x-icon" />
        <link rel="icon" href="${network2Ico}" type="image/x-icon" />
        <link rel="stylesheet" href="${mainStyles}" />
        <title>Ignore This Page</title>
      </head>
      <body class="body-container">
        ${NavigationToggleCheckbox()}
        <header class="header">
          <div class="header__title-wrapper">
            <img
              class="header__logo small-screen-hidden"
              src="${logPng}"
              alt="Notepad logo"
              width="32"
              height="32"
            />
            <h1 class="header__title">Ignore This Page</h1>
          </div>
          <div class="header__actions">
            ${RssButton()} ${ThemeButton()} ${NavigationToggleButton()}
          </div>
        </header>
        ${Navigation()}
        <main class="main">${body}</main>
        <aside class="sidebar">
          ${RecentPostsWidget(recentPosts)} ${TagsWidget(tags)}
          ${SidebarBanners(hits)}
        </aside>
        ${Footer()}
      </body>
    </html>`;
};
