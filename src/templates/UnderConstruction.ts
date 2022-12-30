import { html } from "~/utilities/html";
import underConstruction from "~/assets/under-construction.gif";

export const UnderConstruction = () => {
  return html` <article class="under-construction">
    <h1 class="under-construction__title">This page is under construction!</h1>
    <img
      class="under-construction__image"
      src="${underConstruction}"
      alt="Under construction gif"
    />
    <h2>Come back later...</h2>
  </article>`;
};
