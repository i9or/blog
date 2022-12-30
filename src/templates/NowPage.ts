import dayjs from "dayjs";

import { html } from "~/utilities/html";
import { MONTH_YEAR_DATE_FORMAT } from "~/utilities/dates";

export const NowPage = () => html`<article>
  <h1>Now! page</h1>
  <p>Here's the list of things I'm up to <strong>now</strong>:</p>
  <ul>
    <li>
      <p>${dayjs("2022-12-04").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>Making an almost static Blog engine using Node.js;</li>
        <li>
          Working on a legacy OpenGL demo with retro graphics and old libraries;
        </li>
        <li>
          Studying
          <a href="https://sarabander.github.io/sicp/">SICP</a>.
        </li>
      </ul>
    </li>
  </ul>
  <p>
    Inspired by other
    <a href="https://nownownow.com/about">now pages</a>.
  </p>
</article>`;
