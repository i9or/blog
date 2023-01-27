import { PostMeta } from "~/types";
import { html } from "~/utilities/html";
import dayjs from "dayjs";
import { ROUTES } from "~/constants";

export const PostsMetaTable = (postsMeta: PostMeta[] | undefined) => {
  if (!postsMeta) {
    return "";
  }

  const yearSet = new Set<number>();
  const postsByYear = new Map<number, PostMeta[]>();

  for (let post of postsMeta) {
    const year = dayjs.unix(post.createdAt).year();

    yearSet.add(year);

    const postsByCurrentPostYear = postsByYear.get(year);
    const postsMetaToSet = postsByCurrentPostYear
      ? [...postsByCurrentPostYear, post]
      : [post];
    postsByYear.set(year, postsMetaToSet);
  }

  const years = Array.from(yearSet).sort().reverse();

  return html`${years.map((year) => {
    const postsByCurrentYear = postsByYear.get(year);

    if (!postsByCurrentYear) {
      return "";
    }

    const postsMetaRows = postsByCurrentYear.map((post) => {
      return html`<tr>
        <td class="posts-meta-table__date">
          ${dayjs.unix(post.createdAt).format("MMMM D")}
        </td>
        <td>
          <a href="/${ROUTES.post}/${post.slug}">${post.title}</a>
        </td>
      </tr>`;
    });

    return html`<h2 class="posts-meta-table__year">${year.toString()}</h2>
      <table class="posts-meta-table">
        ${postsMetaRows}
      </table>`;
  })}`;
};
