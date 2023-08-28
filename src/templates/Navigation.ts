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
          href="/${ROUTES.home.path}"
          class="navigation__button navigation__button--home"
          title="${ROUTES.home.title}"
        >
          ${HouseIcon()}
          <span class="big-screen-hidden">${ROUTES.home.title}</span>
        </a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="/${ROUTES.about.path}" class="navigation__button">
          ${ROUTES.about.title}
        </a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="/${ROUTES.now.path}" class="navigation__button">
          ${ROUTES.now.title}
        </a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item">
        <a href="/${ROUTES.archive.path}" class="navigation__button">
          ${ROUTES.archive.title}
        </a>
      </li>
      <li class="navigation__divider" aria-hidden="true"></li>
      <li class="navigation__item big-screen-hidden">
        <a class="navigation__button" href="/${ROUTES.rss.path}">
          ${ROUTES.rss.title}
        </a>
      </li>
      <li class="navigation__item big-screen-hidden">
        <div class="navigation__button">
          <ul class="mobile-theme-selector">
            <li><a href="/theme/system">System</a></li>
            <li><a href="/theme/dark">Dark</a></li>
            <li><a href="/theme/light">Light</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>`;
};
