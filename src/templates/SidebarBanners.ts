import { html } from "~/utilities/html";
import {
  agplv3Gif,
  alienNowGif,
  anyDamnGif,
  anythingButChromeGif,
  benisGif,
  bestVwGif,
  cardsPng,
  chromeGif,
  cssPng,
  firefoxGetGif,
  hairGif,
  iMissXpGif,
  javascriptFreeGif,
  largestCollectionPng,
  linuxPoweredGif,
  lolGif,
  macosMovGif,
  minecraftGif,
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
    <img
      src="${hairGif}"
      alt="No bad hair on the internet"
      width="88"
      height="31"
    />
    <img src="${macosMovGif}" alt="Made with MacOS" width="88" height="31" />
    <img src="${linuxPoweredGif}" alt="Linux powered" width="88" height="31" />
    <a href="https://wiby.me/">
      <img
        src="${wibyGif}"
        alt="Wiby search engine micro banner"
        width="88"
        height="31"
      />
    </a>
    <img
      src="${openglPng}"
      alt="OpenGL logo micro banner"
      width="88"
      height="31"
    />
    <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">
      <img
        src="${agplv3Gif}"
        alt="AGPLv3 logo micro banner"
        width="88"
        height="31"
      />
    </a>
    <img
      src="${bestVwGif}"
      alt="Best viewed with computer and monitor"
      width="88"
      height="31"
    />
    <img
      src="${anyDamnGif}"
      alt="Best viewed with any damn browser"
      width="88"
      height="31"
    />
    <a href="https://www.mozilla.org/en-GB/firefox/new/">
      <img
        class="sidebar-banners--rounded"
        src="${firefoxGetGif}"
        alt="Get Firefox animation micro banner"
        width="88"
        height="31"
      />
    </a>
    <a href="https://www.youtube.com/user/alyankovic/videos">
      <img
        src="${yankowGif}"
        alt="Weird Al Yankovic logo micro banner"
        width="88"
        height="31"
      />
    </a>
    <a href="https://www.jetbrains.com/webstorm/">
      <img
        src="${webStormPng}"
        alt="WebStorm IDE logo micro banner"
        width="88"
        height="31"
      />
    </a>
    <img
      src="${alienNowGif}"
      alt="Alien Now micro banner"
      width="88"
      height="31"
    />
    <img
      src="${anythingButChromeGif}"
      alt="Anything but Chrome gif"
      width="88"
      height="31"
    />
    <img src="${benisGif}" alt="Benis Now!" width="88" height="31" />
    <img src="${cardsPng}" alt="Cards micro banner" width="88" height="31" />
    <img src="${chromeGif}" alt="Chrome is evil" width="88" height="31" />
    <img src="${lolGif}" alt="LOL" width="88" height="31" />
    <img src="${cssPng}" alt="CSS is awesome" width="88" height="31" />
    <img
      src="${javascriptFreeGif}"
      alt="JavaScript Free Page"
      width="88"
      height="31"
    />
    <img src="${minecraftGif}" alt="Minecraft" width="88" height="31" />
    <a href="https://capstasher.neocities.org/88x31collection-page1.html">
      <img
        src="${largestCollectionPng}"
        alt="Largest collection of 88x31 buttons"
        width="88"
        height="31"
      />
    </a>
    <a href="https://www.getmonero.org/">
      <img src="${moneroNowGif}" alt="Monero Now" width="88" height="31" />
    </a>
    <img src="${iMissXpGif}" alt="I miss Windows XP" width="88" height="31" />
    <img src="${possumsNowPng}" alt="Possums Now" width="88" height="31" />
    <img src="${slavaGif}" alt="Glory to Ukraine!" width="88" height="31" />
    <img
      src="${twoThousandOneGif}"
      alt="I wish it was 2001"
      width="88"
      height="31"
    />
    ${HitCounter(Math.floor(Math.random() * 100000))}
  </section>`;
};
