import { html } from "../utilities/html";

const HIT_COUNTER_LENGTH = 10;

export const HitCounter = (hits: number = 0) => {
  const hitsStr = `${hits}`;

  if (hitsStr.length > 10) {
    throw new Error("Hit counter overflow");
  }

  const paddedHitsStr = hitsStr.padStart(10, "0");

  return html`<div class="hit-counter">
    ${paddedHitsStr
      .split("")
      .map((digit) => html`<span class="hit-counter__digit">${digit}</span>`)}
  </div>`;
};
