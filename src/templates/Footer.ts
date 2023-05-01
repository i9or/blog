import { html } from "~/utilities/html";
import { ROUTES } from "~/constants";

// The value below will be substituted during the production build
const deployedVersion = BLOG_APPLICATION_VERSION;

export const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  const copyrightYear =
    currentYear === "2022" ? "2022" : `2022 - ${currentYear}`;

  return html`<footer class="footer">
    <span>
      Copyright © ${copyrightYear} Ignore This Page. All rights reserved.
      <a href="/${ROUTES.privacyPolicy.path}">${ROUTES.privacyPolicy.title}</a>.
      Certified 100% AI-Free Organic™ content.
    </span>
    <span class="small-screen-hidden">${deployedVersion}</span>
  </footer>`;
};
