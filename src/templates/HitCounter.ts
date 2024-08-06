import { html } from "~/utilities/html";

export const HitCounter = () => {
  return html`<section class="hitCounter">
    <img
      src="http://localhost:4005/count-me-in-scotty"
      alt="Hit counter"
      height="30"
      width="190"
    />
  </section>`;
};
