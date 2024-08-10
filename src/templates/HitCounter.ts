import { html } from "~/utilities/html";

export const HitCounter = () => {
  return html`<section class="hitCounter">
    <img
      src="https://counter.ignorethis.page/count-me-in-scotty"
      alt="I'm a hit counter, kinda"
      height="30"
      width="190"
    />
  </section>`;
};
