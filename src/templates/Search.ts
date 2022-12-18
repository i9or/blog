import { html } from "~/utilities/html";

export const Search = () => {
  return html`<form action="/search" method="GET" class="search">
    <input
      type="text"
      placeholder="Search"
      class="search__input"
      name="query"
      disabled
    />
  </form>`;
};
