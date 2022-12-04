import { html } from "../utilities/html";

export const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  const copyrightYear =
    currentYear === "2022" ? "2022" : `2022 - ${currentYear}`;

  return html`<footer class="footer">
    <span>
      Copyright © ${copyrightYear} Ignore This Page. All rights reserved.
    </span>
  </footer>`;
};
