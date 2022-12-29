import { Handler } from "@tinyhttp/app";

import { BaseMiddleware } from "~/framework/BaseMiddleware";

const robotsTxtContents = ["User-agent: *", "Disallow: /api/", ""].join("\n");

export class RobotsMiddleware extends BaseMiddleware {
  constructor() {
    super();
  }

  get handler(): Handler {
    return async (_req, res, _next) => {
      return res.type("text").send(robotsTxtContents);
    };
  }

  static get path() {
    return "/robots.txt";
  }
}
