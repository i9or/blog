import { html } from "~/utilities/html";
import {
  agplv3Gif,
  alienNowGif,
  anyDamnGif,
  anythingButChromeGif,
  benisGif,
  bestEnjoyedGif,
  bestVwGif,
  cardsPng,
  chromeGif,
  cokePng,
  cssPng,
  firefoxGetGif,
  hairGif,
  javascriptFreeGif,
  largestCollectionPng,
  linuxPoweredGif,
  macosMovGif,
  mastodonGif,
  moneroNowGif,
  openglPng,
  possumsNowPng,
  slavaGif,
  twoThousandOneGif,
  webStormPng,
  wibyGif,
  yankowGif,
} from "~/assets";
import { HitCounter } from "./HitCounter";

export const SidebarBanners = () => {
  return html`<section class="sidebar-banners">
    <img src="${hairGif}" alt="No bad hair on the internet" />
    <img src="${macosMovGif}" alt="Made with MacOS" />
    <img src="${linuxPoweredGif}" alt="Linux powered" />
    <a href="https://wiby.me/">
      <img src="${wibyGif}" alt="Wiby search engine micro banner" />
    </a>
    <img src="${openglPng}" alt="OpenGL logo micro banner" />
    <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">
      <img src="${agplv3Gif}" alt="AGPLv3 logo micro banner" />
    </a>
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
    <img src="${alienNowGif}" alt="Alien Now micro banner" />
    <img src="${anythingButChromeGif}" alt="Anything but Chrome gif" />
    <img src="${benisGif}" alt="Benis Now!" />
    <img src="${bestEnjoyedGif}" alt="Best enjoyed with Coca-Cola" />
    <img src="${cardsPng}" alt="Cards micro banner" />
    <img src="${chromeGif}" alt="Chrome is evil" />
    <img src="${cokePng}" alt="Powered by Coca-Cola" />
    <img src="${cssPng}" alt="CSS is awesome" />
    <img src="${javascriptFreeGif}" alt="JavaScript Free Page" />
    <a href="https://capstasher.neocities.org/88x31collection-page1.html">
      <img
        src="${largestCollectionPng}"
        alt="Largest collection of 88x31 buttons"
      />
    </a>
    <a rel="me" href="https://mastodon.gamedev.place/@igor">
      <img src="${mastodonGif}" alt="Join Mastodon, leave Twitter"
    /></a>
    <a href="https://www.getmonero.org/">
      <img src="${moneroNowGif}" alt="Monero Now" />
    </a>
    <img src="${possumsNowPng}" alt="Possums Now" />
    <img src="${slavaGif}" alt="Glory to Ukraine!" />
    <img src="${twoThousandOneGif}" alt="I wish it was 2001" />
    ${HitCounter(Math.floor(Math.random() * 100000))}
  </section>`;
};
