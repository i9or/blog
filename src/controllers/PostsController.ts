import { Request, Response, NextFunction } from "@tinyhttp/app";

import { html } from "../utilities/html";
import { Layout } from "../templates/Layout";
import { BaseController } from "../framework/BaseController";
import { di } from "../di";
import { samplePost } from "../sample-post";
import { getLocalsValueByKey } from "../utilities/response";
import { UnderConstruction } from "../templates/UnderConstruction";

const fullDate = Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
});

export class PostsController extends BaseController {
  constructor() {
    super();

    this.router.get("/", this.beforeIndex, this.underConstruction, this.index);
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

  underConstruction = (_: Request, res: Response) => {
    res.send(
      Layout({
        body: UnderConstruction(),
        locals: res.locals,
      })
    );
  };

  static get path() {
    return "/";
  }
}
