import type { Request, Response } from "@tinyhttp/app";

import { Layout } from "~/templates/Layout";
import { BaseController } from "~/framework/BaseController";
import { ROUTES } from "~/constants";
import { ArchivePage } from "~/templates/ArchivePage";

export class ArchiveController extends BaseController {
  constructor() {
    super();

    this.router.get("/", this.index);
  }

  index = (_: Request, res: Response) => {
    res.send(
      Layout({
        body: ArchivePage(),
        locals: res.locals,
      })
    );
  };

  static get path() {
    return ROUTES.archive;
  }
}
