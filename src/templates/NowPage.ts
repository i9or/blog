import { html } from "~/utilities/html";
import { OnHold } from "~/templates/OnHold";
import { NowItem, NowList } from "~/templates/NowList";

const NOWS: NowItem[] = [
  {
    date: "2024-05-20",
    events: [
      html`Working on production ready BasicTODO application
        <a href="https://github.com/i9or/basictodo">
          https://github.com/i9or/basictodo
        </a>`,
    ],
  },
  {
    date: "2024-04-01",
    events: [html`Started a new gardening season, yay! 🪴🧑‍🌾`],
  },
  {
    date: "2024-03-01",
    events: [html`Nothing 🥲`],
  },
  {
    date: "2024-02-26",
    events: [
      html`Finished
        <a href="https://github.com/i9or/tictactoe">
          https://github.com/i9or/tictactoe
        </a>`,
      html` Working on
        <a href="https://github.com/i9or/pong">
          https://github.com/i9or/pong
        </a>`,
      html`Working on the second part of the tutorial
        <a href="https://github.com/i9or/tictactoe">Tic Tac Toe</a> game`,
    ],
  },
  {
    date: "2024-01-31",
    events: [html`Was basically <s>dead</s> sick the whole time`],
  },
  {
    date: "2024-12-01",
    events: [html`Was basically <s>dead</s> sick the whole time`],
  },
  {
    date: "2023-11-19",
    events: [
      html`Working on Basic ToDo web application:
        <a href="https://github.com/i9or/basictodo">
          https://github.com/i9or/basictodo
        </a>`,
    ],
  },
  {
    date: "2023-10-01",
    events: [
      html`Tried to start working on the basic todo list web app`,
      html`Started learning AWS... thanks, I hate it!`,
    ],
  },
  {
    date: "2023-09-01",
    events: [html`Have no idea what I did this month at all...`],
  },
  {
    date: "2023-08-14",
    events: [
      html`Restored home server`,
      html`Moved blog from GitHub pages to home server`,
      html`Working on "Tic Tac Toe" tutorial, next part`,
    ],
  },
  {
    date: "2023-07-01",
    events: [html`Everything is <s>still</s> almost not on ${OnHold()}`],
  },
  {
    date: "2023-06-01",
    events: [html`Everything is still on ${OnHold()}`],
  },
  {
    date: "2023-05-01",
    events: [
      html`Everything is still on ${OnHold()}`,
      html`Started another gardening season`,
      html`Thinking to seriously start learning Java™`,
    ],
  },
  {
    date: "2023-04-30",
    events: [html`Oh gosh, I hate moving to another city...`],
  },
  {
    date: "2023-03-01",
    events: [html`Moving to London`, html`Everything else is ${OnHold()}`],
  },
  {
    date: "2023-02-07",
    events: [
      html`Learning Node.js in depth`,
      html`Working on simple 2D games tutorials`,
      html`<s>
          Working on a legacy OpenGL demo with retro graphics and old libraries
        </s>
        ${OnHold()}`,
    ],
  },
  {
    date: "2023-01-25",
    events: [
      html`Still making <s>an almost</s> a static blog <s>engine</s> generator
        using Node.js`,
      html`Working on a legacy OpenGL demo with retro graphics and old libraries`,
      html`<s>
          Studying <a href="https://sarabander.github.io/sicp/">SICP</a>
        </s>
        ${OnHold()}`,
    ],
  },
  {
    date: "2022-12-04",
    events: [
      html`Making an almost static blog engine using Node.js`,
      html`Working on a legacy OpenGL demo with retro graphics and old libraries`,
      html`Studying <a href="https://sarabander.github.io/sicp/">SICP</a>`,
    ],
  },
];

export const NowPage = () => html`<article class="just-a-page">
  <h1>Now! page</h1>
  <p>Here's the list of things I'm up to <strong>now</strong>:</p>
  ${NowList(NOWS)}
  <p>
    Inspired by other
    <a href="https://nownownow.com/about">now pages</a>.
  </p>
</article>`;
