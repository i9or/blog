import { BaseController } from "../../../framework/BaseController";
import { PostsApiController } from "./PostsApiController";

export class ApiV1Controller extends BaseController {
  constructor() {
    super();

    // TODO: add catch all middleware to filter only application/json accept header requests
    this.router.use(PostsApiController.path, new PostsApiController().router);
  }

  static get path() {
    return "/api/v1";
  }
}
