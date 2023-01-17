import { Handler } from "@tinyhttp/app";

import { BaseMiddleware } from "~/framework/BaseMiddleware";
import { di } from "~/di";
import { setLocalsValueByKey } from "~/utilities/response";

export class RecentPostsMiddleware extends BaseMiddleware {
  constructor() {
    super();
  }

  get handler(): Handler {
    return async (_, res, next) => {
      try {
        const recentPosts = await di.postsService.getFiveRecent();

        if (recentPosts) {
          res.locals = setLocalsValueByKey(
            res.locals,
            "recentPosts",
            recentPosts
          );
        }

        next();
      } catch (error) {
        next(error);
      }
    };
  }

  static get path() {
    return "*";
  }
}
