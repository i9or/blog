import { Handler } from "@tinyhttp/app";

import { BaseMiddleware } from "~/framework/BaseMiddleware";

export class FaviconMiddleware extends BaseMiddleware {
  constructor() {
    super();
  }

  get handler(): Handler {
    return async (_req, res, _next) => {
      return res.sendStatus(204);
    };
  }

  static get path() {
    return "/favicon.ico";
  }
}
