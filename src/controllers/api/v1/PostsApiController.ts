import { NextFunction, Request, Response } from "@tinyhttp/app";

import { BaseController } from "../../../framework/BaseController";

export class PostsApiController extends BaseController {
  constructor() {
    super();

    this.router.get("/", this.index);
    this.router.get("/:id", this.show);
    this.router.post("/", this.create);
    this.router.put("/:id", this.update);
  }

  index = (_: Request, res: Response) => {
    res.json({
      message: "PostsApiController#index",
    });
  };

  show = (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    res.json({
      message: `PostsApiController#show:${id}`,
    });
  };

  create = (req: Request, res: Response) => {
    // TODO: add validation
    const data = req.body;

    res.json({
      message: `PostsApiController#create:${JSON.stringify(data)}`,
    });
  };

  update = (req: Request, res: Response) => {
    const data = req.body;
    const id = parseInt(req.params.id);

    res.json({
      message: `PostsApiController#update:${id}@${JSON.stringify(data)}`,
    });
  };

  static get path() {
    return "/posts";
  }
}
