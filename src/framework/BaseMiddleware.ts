import { Handler } from "@tinyhttp/app";

export abstract class BaseMiddleware {
  protected constructor() {}
  get handler(): Handler {
    return async (_req, _res, _next) => {
      throw new Error(`${this.constructor.name}#handler is not implemented`);
    };
  }

  static get path(): string {
    throw new Error(`${this.name}#path is not implemented`);
  }
}
