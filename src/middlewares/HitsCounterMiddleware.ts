import { Handler } from "@tinyhttp/app";

import { BaseMiddleware } from "../framework/BaseMiddleware";
import { di } from "../di";

export class HitsCounterMiddleware extends BaseMiddleware {
  constructor() {
    super();
  }

  get handler(): Handler {
    return async (_, res, next) => {
      const analyticsUpdated = await di.analyticsService.incrementToday();

      if (analyticsUpdated) {
        di.logger.debug(
          `Hits for today ${analyticsUpdated.parsedDate}: ${analyticsUpdated.hits}`
        );

        res.locals = {
          ...(res.locals ?? {}),
          hits: analyticsUpdated.hits,
        };
      }

      next();
    };
  }

  static get path() {
    return "*";
  }
}
