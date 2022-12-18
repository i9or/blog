import { NextFunction, Request, Response } from "@tinyhttp/app";

import { html } from "~/utilities/html";
import { Layout } from "~/templates/Layout";
import { BaseController } from "~/framework/BaseController";
import { di } from "~/di";
import { samplePost } from "~/sample-post";
import { UnderConstruction } from "~/templates/UnderConstruction";
import { ROUTES } from "~/constants";

const fullDate = Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
});

export class PostsController extends BaseController {
  constructor() {
    super();

    this.router
      .get("/", this.beforeIndex, this.underConstruction, this.index)
      .get("/post/:slug", this.show);
  }

  beforeIndex = (_req: Request, _res: Response, next: NextFunction) => {
    di.logger.debug("PostsController#beforeIndex middleware");
    next();
  };

  index = (_: Request, res: Response) => {
    const postDate = fullDate.format(new Date());
    res.send(
      Layout({
        body: html`<small>${postDate}</small>${di.md.render(
            samplePost.content
          )}`,
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

  underConstruction = (_: Request, res: Response) => {
    res.send(
      Layout({
        body: UnderConstruction(),
        locals: res.locals,
      })
    );
  };

  static get path() {
    return ROUTES.home;
  }
}
