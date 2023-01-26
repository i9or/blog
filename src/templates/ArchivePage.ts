import { html } from "~/utilities/html";
import { PostMeta } from "~/types";
import { PostsMetaTable } from "~/templates/PostsMetaTable";

export const ArchivePage = (postsMeta: PostMeta[]) =>
  html` <article class="just-a-page">
    <h1>Archive</h1>
    ${PostsMetaTable(postsMeta)}
  </article>`;
