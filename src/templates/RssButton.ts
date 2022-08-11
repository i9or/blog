import { html } from "../utilities/html";

export const RssButton = (feedUrl: string) => {
  return html`<a
    href="#"
    class="rss-button small-screen-hidden"
    title="RSS feed"
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="85" r="15" fill="currentColor" />
      <path
        d="M 0 55 A 45 45 0 0 1 45 100 L 65 100 A 65 65 0 0 0 0 35 Z"
        fill="currentColor"
      />
      <path
        d="M 0 20 A 80 80 0 0 1 80 100 L 100 100 A 100 100 0 0 0 0 0 Z"
        fill="currentColor"
      />
    </svg>
  </a>`;
};
