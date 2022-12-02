import type { Request, Response } from "@tinyhttp/app";

import { Layout } from "../templates/Layout";
import { html } from "../utilities/html";
import { BaseController } from "../framework/BaseController";

export class NowController extends BaseController {
  constructor() {
    super();

    this.router.get("/", this.index);
  }

  index = (_: Request, res: Response) => {
    const hits = res.locals?.hits ?? 0;

    res.send(
      Layout({
        body: html`<h1>Now! page</h1>`,
        hits,
      })
    );
  };

  static get path() {
    return "/now";
  }
}
