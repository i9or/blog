import dayjs from "dayjs";

import { html } from "~/utilities/html";
import { MONTH_YEAR_DATE_FORMAT } from "~/utilities/dates";
import { OnHold } from "~/templates/OnHold";

export const NowPage = () => html`<article class="just-a-page">
  <h1>Now! page</h1>
  <p>Here's the list of things I'm up to <strong>now</strong>:</p>
  <ul>
    <li>
      <p>${dayjs("2023-11-19").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>
          Working on Basic ToDo web application:
          <a href="https://github.com/i9or/basictodo">
            https://github.com/i9or/basictodo
          </a>
        </li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2023-10-01").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>Tried to start working on the basic todo list web app</li>
        <li>Started learning AWS... thanks, I hate cloud now!</li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2023-09-01").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>Have no idea what I did this month at all...</li>
      </ul>
    </li>
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
        <li>Everything is <s>still</s> almost not on ${OnHold()}</li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2023-06-01").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>Everything is still on ${OnHold()}</li>
      </ul>
    </li>
    <li>
      <p>${dayjs("2023-05-01").format(MONTH_YEAR_DATE_FORMAT)}</p>
      <ul>
        <li>Everything is still on ${OnHold()}</li>
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
        <li>Everything else is ${OnHold()}</li>
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
          ${OnHold()}
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
          ${OnHold()}
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
