import { Request, Response, NextFunction } from "@tinyhttp/app";

import { html } from "../utilities/html";
import { Layout } from "../templates/Layout";
import { BaseController } from "../framework/BaseController";
import { di } from "../di";
import { samplePost } from "../sample-post";

const fullDate = Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
});

export class PostsController extends BaseController {
  constructor() {
    super();

    this.router.get("/", this.beforeIndex, this.index);
  }

  beforeIndex = (_req: Request, _res: Response, next: NextFunction) => {
    di.logger.info("Hi from middleware!");
    next();
  };

  index = (_: Request, res: Response) => {
    const hitsToday = res.locals?.hitsToday ?? 0;
    const postDate = fullDate.format(new Date());
    res.send(
      Layout({
        body: html`<small>${postDate}</small>${di.md.render(
            samplePost.content
          )}`,
        hits: hitsToday,
      })
    );
  };

  static get path() {
    return "/";
  }
}
