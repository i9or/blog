import { Handler } from "@tinyhttp/app";

import { BaseMiddleware } from "~/framework/BaseMiddleware";
import { di } from "~/di";
import { setLocalsValueByKey } from "~/utilities/response";

export class TagsMiddleware extends BaseMiddleware {
  constructor() {
    super();
  }

  get handler(): Handler {
    return async (_, res, next) => {
      try {
        const tags = await di.tagsService.getAll();

        if (tags) {
          res.locals = setLocalsValueByKey(res.locals, "tags", tags);
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
