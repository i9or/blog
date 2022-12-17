import bodyParser from "body-parser";
import cors from "cors";

import { BaseController } from "../../../framework/BaseController";
import { PostsApiController } from "./PostsApiController";
import { UsersApiController } from "./UsersApiController";
import { restrict } from "../utilities/restrict";
import { CLIENT_ORIGINS } from "../../../configuration";

export class ApiV1Controller extends BaseController {
  constructor() {
    super();

    this.router
      .use(
        cors({
          credentials: true,
          origin: CLIENT_ORIGINS,
        })
      )
      .use(bodyParser.json())
      .use(UsersApiController.path, new UsersApiController().router)
      .use(restrict) // Everything under this line needs authentication
      .use(PostsApiController.path, new PostsApiController().router);
  }

  static get path() {
    return "/api/v1";
  }
}
