import { html } from "~/utilities/html";
import { Tag } from "~/types";
import { ROUTES } from "~/constants";

const RenderNoTags = () => html`<div
  class="sidebar-widget__content sidebar-widget__content--tags"
>
  No tags yet.
</div>`;

const RenderTags = (tags: Tag[]) => html`<ul
  class="sidebar-widget__content sidebar-widget__content--tags"
>
  ${tags.map(
    (tag) => html`<li class="sidebar-widget__tag">
      <a href="/${ROUTES.tag.path}/${tag.slug}">${tag.text}</a>
    </li>`
  )}
</ul>`;

export const TagsWidget = (tags: Tag[]) =>
  html` <section class="sidebar-widget">
    <header class="sidebar-widget__header">Tags</header>
    ${tags.length > 0 ? RenderTags(tags) : RenderNoTags()}
  </section>`;
