import { html } from "../utilities/html";

export const ThemeButton = () => {
  return html`<a
    href="javascript:void(0)"
    class="theme-button small-screen-hidden"
    title="Turn on dark mode"
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 15 60
                             A 20 20 0 0 0 60 15
                             A 36 36 0 1 1 15 60
                             Z"
        fill="white"
      />
    </svg>
  </a>`;
};
