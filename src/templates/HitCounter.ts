import { html } from "~/utilities/html";

const HIT_COUNTER_LENGTH = 10;

export const HitCounter = (hits: number = 0) => {
  const hitsStr = `${hits}`;

  if (hitsStr.length > HIT_COUNTER_LENGTH) {
    throw new Error("Hit counter overflow");
  }

  const paddedHitsStr = hitsStr.padStart(HIT_COUNTER_LENGTH, "0");

  return html`<div class="hit-counter">
    ${paddedHitsStr
      .split("")
      .map((digit) => html`<span class="hit-counter__digit">${digit}</span>`)}
  </div>`;
};
