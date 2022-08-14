import { html } from "../utilities/html";
import {
  agplv3Gif,
  anyDamnGif,
  bestVwGif,
  buttonGif,
  firefoxGetGif,
  hairGif,
  linuxPoweredGif,
  macosMovGif,
  openglPng,
  wibyGif,
  yankowGif,
} from "../assets";
import { HitCounter } from "./HitCounter";

let hits = 0;

export const SidebarBanners = () => {
  hits++;

  return html`<section class="sidebar-banners">
    <img src="${hairGif}" />
    <img src="${macosMovGif}" />
    <img src="${linuxPoweredGif}" />
    <img src="${wibyGif}" />
    <img src="${openglPng}" />
    <img src="${agplv3Gif}" />
    <img src="${bestVwGif}" />
    <img src="${anyDamnGif}" />
    <img class="sidebar-banners--firefox" src="${firefoxGetGif}" />
    <img src="${yankowGif}" />
    <img src="${buttonGif}" />
    ${HitCounter(hits)}
  </section>`;
};
