import Koa, { Context, DefaultState } from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import serve from "koa-static";
import mount from "koa-mount";

import { router as healthCheckRouter } from "./routes/healthcheck";
import { router as templateCheckRouter } from "./routes/template-check";
import { appConfig } from "./config";
import { Koabars } from "./koabars";

(async () => {
  const app = new Koa<DefaultState, Context>();

  Koabars(app, { viewsRoot: "views" });

  app.use(bodyParser());
  app.use(cors(appConfig.cors));
  app.use(logger());

  app.use(mount("/public", serve("dist/public")));

  app.use(healthCheckRouter.routes());
  app.use(templateCheckRouter.routes());

  app
    .listen(appConfig.port, async () => {
      console.log(
        `🚀 Server is running at: http://localhost:${appConfig.port}/`
      );
    })
    .on("error", (err) => {
      console.error(err);
    });
})();
