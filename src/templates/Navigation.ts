import { html } from "~/utilities/html";
import { ROUTES } from "~/constants";
import { Search } from "./Search";

const HouseIcon = () => {
  return html`<svg
    class="small-screen-hidden"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="House icon"
  >
    <path
      d="M 20 85 L 40 85 L 40 60 L 60 60 L 60 85 L 80 85 L 80 50 L 90 50 L 50 15 L 10 50 L 20 50 Z"
      fill="currentColor"
    />
    <rect x="65" y="20" width="10" height="20" fill="currentColor" />
  </svg>`;
};

export const Navigation = () => {
  return html`<nav class="navigation">
    <span class="navigation__search"> ${Search()} </span>
    <ul class="navigation__menu">
      <li class="navigation__divider big-screen-hidden" aria-hidden="true"></li>
      <li class="navigation__item">
        <a
          href="${ROUTES.home}"
          class="navigation__button navigation__button--home"
          arial-label="Home"
        >
          ${HouseIcon()}
          <span class="big-screen-hidden">Home</span>
        </a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="${ROUTES.about}" class="navigation__button">About</a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="${ROUTES.now}" class="navigation__button">Now!</a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="${ROUTES.archive}" class="navigation__button">Archive</a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item big-screen-hidden">
        <a class="navigation__button" href="${ROUTES.rss}">RSS Feed</a>
      </li>
      <!--<li class="navigation__divider big-screen-hidden" aria-hidden="true"></li>
            <li class="navigation__item big-screen-hidden">
              <div class="navigation__button">
                <label for="themeSelector"> Theme: </label>
                <select name="themeSelector" id="themeSelector">
                  <option value="os">OS Default</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </li>-->
    </ul>
  </nav>`;
};
