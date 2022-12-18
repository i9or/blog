import type { Request, Response } from "@tinyhttp/app";

import { Layout } from "~/templates/Layout";
import { BaseController } from "~/framework/BaseController";
import { AboutPage } from "~/templates/AboutPage";
import { ROUTES } from "~/constants";

export class AboutController extends BaseController {
  constructor() {
    super();

    this.router.get("/", this.index);
  }

  index = (_: Request, res: Response) => {
    res.send(
      Layout({
        body: AboutPage(),
        locals: res.locals,
      })
    );
  };

  static get path() {
    return ROUTES.about;
  }
}
