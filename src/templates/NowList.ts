import { html } from "~/utilities/html";
import dayjs from "dayjs";
import { MONTH_YEAR_DATE_FORMAT } from "~/utilities/dates";

export type NowItem = {
  date: string;
  events: string[];
};

export const NowList = (nowItems: NowItem[]) => {
  if (nowItems.length === 0) {
    return html`<p>No events yet!</p>`;
  }

  return html`<ul>
    ${nowItems.map(
      (n) => html`<li>
        <p>${dayjs(n.date).format(MONTH_YEAR_DATE_FORMAT)}</p>
        <ul>
          ${n.events.map((e) => html`<li>${e}</li>`)}
        </ul>
      </li>`
    )}
  </ul>`;
};
