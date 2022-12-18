import { Handler } from "@tinyhttp/app";

import { BaseMiddleware } from "~/framework/BaseMiddleware";
import { di } from "~/di";
import { setLocalsValueByKey } from "~/utilities/response";

export class HitsCounterMiddleware extends BaseMiddleware {
  constructor() {
    super();
  }

  get handler(): Handler {
    return async (_, res, next) => {
      const analyticsUpdated = await di.analyticsService.incrementToday();

      if (analyticsUpdated) {
        res.locals = setLocalsValueByKey(
          res.locals,
          "hits",
          analyticsUpdated.hits
        );
      }

      next();
    };
  }

  static get path() {
    return "*";
  }
}
