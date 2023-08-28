import { html } from "~/utilities/html";

export const ThemeButton = () => {
  return html`<div
    class="theme-button small-screen-hidden"
    title="Switch theme"
  >
    <svg fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 15 60
                             A 20 20 0 0 0 60 15
                             A 36 36 0 1 1 15 60
                             Z"
        fill="white"
      />
    </svg>
    <ul class="theme-button__dropdown">
      <li><a href="/theme/system">System</a></li>
      <li><a href="/theme/dark">Dark</a></li>
      <li><a href="/theme/light">Light</a></li>
    </ul>
  </div>`;
};

/*
<div
          id="themeButton"
          class="theme-button small-screen-hidden"
          title="Switch dark/light mode"
        >


        </div>
 */
