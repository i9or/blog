import dayjs from "dayjs";

import { html } from "~/utilities/html";
import { MONTH_YEAR_DATE_FORMAT } from "~/utilities/dates";

export const NowPage = () => html`<article class="just-a-page">
  <h1>Now! page</h1>
  <p>Here's the list of things I'm up to <strong>now</strong>:</p>
  <ul>
    <li>
      <p>${dayjs("2023-08-14").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>Restored home server</li>
        <li>Moved blog from GitHub pages to home server</li>
        <li>Working on "Tic Tac Toe" tutorial, next part</li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2023-07-01").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>
          Everything is <s>still</s> almost not on
          <em class="now__on-hold">On hold!</em>
        </li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2023-06-01").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>
          Everything is still on
          <em class="now__on-hold">On hold!</em>
        </li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2023-05-01").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>
          Everything is still on
          <em class="now__on-hold">On hold!</em>
        </li>
        <li>Started another gardening season</li>
        <li>Thinking to seriously start learning Java™</li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2023-04-30").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>Oh gosh, I hate moving to another city...</li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2023-03-01").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>Moving to London</li>
        <li>
          Everything else is
          <em class="now__on-hold">On hold!</em>
        </li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2023-02-07").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>Learning Node.js in depth;</li>
        <li>Working on simple 2D games tutorials;</li>
        <li>
          <s>
            Working on a legacy OpenGL demo with retro graphics and old
            libraries.
          </s>
          <em class="now__on-hold">On hold!</em>
        </li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2023-01-25").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>
          Still making <s>an almost</s> a static blog <s>engine</s> generator
          using Node.js;
        </li>
        <li>
          Working on a legacy OpenGL demo with retro graphics and old libraries;
        </li>
        <li>
          <s>Studying <a href="https://sarabander.github.io/sicp/">SICP</a>.</s>
          <em class="now__on-hold">On hold!</em>
        </li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2022-12-04").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>Making an almost static blog engine using Node.js;</li>
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
