import { html } from "../utilities/html";
import {
  agplv3Gif,
  anyDamnGif,
  bestVwGif,
  firefoxGetGif,
  hairGif,
  linuxPoweredGif,
  macosMovGif,
  openglPng,
  wibyGif,
  yankowGif,
  webStormPng,
} from "../assets";
import { HitCounter } from "./HitCounter";

export const SidebarBanners = (hits: number) => {
  return html`<section class="sidebar-banners">
    <img src="${hairGif}" alt="No bad hair on the internet" />
    <img src="${macosMovGif}" alt="Made with MacOS" />
    <img src="${linuxPoweredGif}" alt="Linux powered" />
    <a href="https://wiby.me/">
      <img src="${wibyGif}" alt="Wiby search engine micro banner" />
    </a>
    <img src="${openglPng}" alt="OpenGL logo micro banner" />
    <img src="${agplv3Gif}" alt="AGPLv3 logo micro banner" />
    <img src="${bestVwGif}" alt="Best viewed with computer and monitor" />
    <img src="${anyDamnGif}" alt="Best viewed with any damn browser" />
    <a href="https://www.mozilla.org/en-GB/firefox/new/">
      <img
        class="sidebar-banners--rounded"
        src="${firefoxGetGif}"
        alt="Get Firefox animation micro banner"
      />
    </a>
    <a href="https://www.youtube.com/user/alyankovic/videos">
      <img src="${yankowGif}" alt="Weird Al Yankovic logo micro banner" />
    </a>
    <a href="https://www.jetbrains.com/webstorm/">
      <img src="${webStormPng}" alt="WebStorm IDE logo micro banner" />
    </a>
    ${HitCounter(hits)}
  </section>`;
};
