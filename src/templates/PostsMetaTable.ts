import { PostMeta } from "~/types";
import { html } from "~/utilities/html";
import dayjs from "dayjs";
import { ROUTES } from "~/constants";

export const PostsMetaTable = (
  postsMeta: PostMeta[] | undefined,
  options?: { renderYear: boolean }
) => {
  if (!postsMeta) {
    return "";
  }

  const dateFormat = options?.renderYear ? "YYYY/MM/DD" : "MMMM D";

  const postMetaRows = postsMeta.map((post) => {
    return html` <tr>
      <td class="posts-meta-table__date">
        ${dayjs.unix(post.createdAt).format(dateFormat)}
      </td>
      <td>
        <a href="/${ROUTES.post}/${post.slug}">${post.title}</a>
      </td>
    </tr>`;
  });

  return html`<table class="posts-meta-table">
    ${postMetaRows}
  </table>`;
};

// const years = Array.from(postsByYear.keys()).sort().reverse();
//
// return html` <article class="just-a-page">
//   <h1>Archive</h1>
//   ${years.map(
//     (year) =>
//       html`<h2 class="archive-page__year">${year.toString()}</h2>
//         ${PostsMetaTable(postsByYear.get(year))}`
//   )}
// </article>`;

// const postsByYear = new Map<number, PostMeta[]>();
//
// for (let post of posts) {
//   const year = dayjs.unix(post.createdAt).year();
//   const yearData = postsByYear.get(year);
//
//   // TODO: this needs to be a function
//   const postMeta: PostMeta = {
//     title: post.title,
//     createdAt: post.createdAt,
//     slug: post.slug,
//   };
//
//   const posts = yearData ? [...yearData, postMeta] : [postMeta];
//
//   postsByYear.set(year, posts);
// }
