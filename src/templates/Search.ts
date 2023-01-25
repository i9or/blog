import { html } from "~/utilities/html";

export const Search = () => {
  return html`<form
    class="search"
    method="get"
    action="https://duckduckgo.com/"
  >
    <input type="hidden" name="sites" value="https://ignorethis.page" />
    <input
      type="search"
      name="q"
      autocomplete="off"
      aria-label="Search the site"
      placeholder="Search…"
      class="search__input"
    />
  </form>`;
};
