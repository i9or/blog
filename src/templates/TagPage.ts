import dayjs from "dayjs";

import { html } from "~/utilities/html";
import { PostMeta, Tag } from "~/types";
import { ROUTES } from "~/constants";
import { PostsMetaTable } from "~/templates/PostsMetaTable";

export const TagPage = (tagText: Tag["text"], postsMeta: PostMeta[]) =>
  html`<article class="just-a-page">
    <h1>Posts tagged: ${tagText}</h1>
    ${PostsMetaTable(postsMeta)}
  </article>`;
