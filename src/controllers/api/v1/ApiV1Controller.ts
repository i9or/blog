import bodyParser from "body-parser";

import { BaseController } from "../../../framework/BaseController";
import { PostsApiController } from "./PostsApiController";
import { UsersApiController } from "./UsersApiController";
import { restrict } from "../utilities/restrict";

export class ApiV1Controller extends BaseController {
  constructor() {
    super();

    this.router
      .use(bodyParser.json())
      .use(UsersApiController.path, new UsersApiController().router)
      .use(restrict) // Everything under this line needs authentication
      .use(PostsApiController.path, new PostsApiController().router);
  }

  static get path() {
    return "/api/v1";
  }
}
