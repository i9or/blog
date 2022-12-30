import { Request, Response } from "@tinyhttp/app";

import { html } from "~/utilities/html";
import { Layout } from "~/templates/Layout";
import { BaseController } from "~/framework/BaseController";
import { di } from "~/di";
import { samplePost } from "~/sample-post";
import { ROUTES } from "~/constants";
import { calendarPng } from "~/assets";
import dayjs from "dayjs";
import { MONTH_YEAR_DATE_FORMAT } from "~/utilities/dates";

export class PostsController extends BaseController {
  constructor() {
    super();

    this.router.get("/", this.index);
    this.router.get("/post/:slug", this.show);
  }

  index = (_: Request, res: Response) => {
    res.send(
      Layout({
        body: html`<article class="post">
          <section class="post__navigation">
            <a href="#" title="Older post"><small>&larr; There</small></a>
            <a href="#" title="Newer post"><small>Here &rarr;</small></a>
          </section>
          <small class="post__date">
            <img
              src="${calendarPng}"
              width="16"
              height="16"
              alt="Small calendar icon"
            />
            ${dayjs().format("MMMM D, YYYY")}
          </small>
          ${di.md.render(samplePost.content)}
          <p class="post__fin">☙</p>
          <section class="post__tags">
            <span>Tags:</span>
            <a href="#">Sample Post</a>
            ,
            <a href="#">Nobody read the tags</a>
            ,
            <a href="#">Haha, boobs: (.)(.)</a>
          </section>
        </article>`,
        locals: res.locals,
      })
    );
  };

  show = (req: Request, res: Response) => {
    const { slug } = req.params;

    res.send(
      Layout({
        body: html`<p>Single Post ${slug}</p>`,
        locals: res.locals,
      })
    );
  };

  static get path() {
    return ROUTES.home;
  }
}
