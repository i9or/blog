import { App } from "@tinyhttp/app";

import { fourOFourHandler } from "../utilities/fourOFourHandler";
import { fiveHundredHandler } from "../utilities/fiveHundredHandler";

export abstract class BaseController {
  private readonly _router = new App({
    noMatchHandler: fourOFourHandler,
    onError: fiveHundredHandler,
  });

  get router() {
    return this._router;
  }

  static get path(): string {
    throw new Error(`${this.name}#path is not implemented`);
  }
}
