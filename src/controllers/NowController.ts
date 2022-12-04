import type { Request, Response } from "@tinyhttp/app";

import { Layout } from "../templates/Layout";
import { BaseController } from "../framework/BaseController";
import { NowPage } from "../templates/NowPage";

export class NowController extends BaseController {
  constructor() {
    super();

    this.router.get("/", this.index);
  }

  index = (_: Request, res: Response) => {
    res.send(
      Layout({
        body: NowPage(),
        locals: res.locals,
      })
    );
  };

  static get path() {
    return "/now";
  }
}
