import { NextFunction, Request, Response } from "@tinyhttp/app";
import xss from "xss";

import { html } from "~/utilities/html";
import { Layout } from "~/templates/Layout";
import { BaseController } from "~/framework/BaseController";
import { di } from "~/di";
import { ROUTES } from "~/constants";
import { SinglePost } from "~/templates/SinglePost";
import { UnderConstruction } from "~/templates/UnderConstruction";

export class PostsController extends BaseController {
  constructor() {
    super();

    this.router.get("/", this.index);
    this.router.get("/post/:slug", this.show);
  }

  index = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const latestPost = await di.postsService.getTheLastOne();

      if (!latestPost) {
        return res.send(
          Layout({
            body: UnderConstruction(),
            locals: res.locals,
          })
        );
      }

      const tags = await di.tagsService.getByPostId(latestPost.id);
      const previousPost = await di.postsService.getPreviousByCreatedAt(
        latestPost.createdAt
      );

      res.send(
        Layout({
          body: SinglePost({
            post: latestPost,
            tags,
            previousPost,
          }),
          locals: res.locals,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  show = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { slug } = req.params;

      if (slug) {
        const sanitizedSlug = xss(slug);
        const post = await di.postsService.getBySlug(sanitizedSlug);

        if (!post) {
          return next();
        }

        const [tags, previousPost, nextPost] = await Promise.all([
          await di.tagsService.getByPostId(post.id),
          di.postsService.getPreviousByCreatedAt(post.createdAt),
          di.postsService.getNextByCreatedAt(post.createdAt),
        ]);

        return res.send(
          Layout({
            body: SinglePost({
              post,
              tags,
              previousPost,
              nextPost,
            }),
            locals: res.locals,
          })
        );
      }
    } catch (error) {
      next(error);
    }
  };

  static get path() {
    return ROUTES.home;
  }
}
