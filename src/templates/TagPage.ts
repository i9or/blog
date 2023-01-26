import dayjs from "dayjs";

import { html } from "~/utilities/html";
import { PostMeta, Tag } from "~/types";
import { ROUTES } from "~/constants";

export const TagPage = (tagText: Tag["text"], postsMeta: PostMeta[]) =>
  html`<article class="just-a-page">
    <h1>Posts tagged: ${tagText}</h1>
    <table>
      ${postsMeta.map((post) => {
        return html`<tr>
          <td>
            <a href="/${ROUTES.post}/${post.slug}">${post.title}</a>
          </td>
          <td class="tag-page__post-date">
            ${dayjs.unix(post.createdAt).format("MMMM D, YYYY")}
          </td>
        </tr>`;
      })}
    </table>
  </article>`;
