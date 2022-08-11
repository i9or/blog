import { html } from "../utilities/html";

const TOGGLE_ID = "navigation-toggle";

export const NavigationToggleCheckbox = () => {
  return html`<input
    type="checkbox"
    id="${TOGGLE_ID}"
    class="visually-hidden"
  />`;
};

export const NavigationToggleButton = () => {
  return html`<label
    for="${TOGGLE_ID}"
    class="hamburger-button big-screen-hidden"
    title="Toggle navigation menu"
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="10" width="100" height="10" fill="currentColor" />
      <rect y="45" width="100" height="10" fill="currentColor" />
      <rect y="80" width="100" height="10" fill="currentColor" />
    </svg>
  </label>`;
};
