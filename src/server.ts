import "reflect-metadata";

// import { createConnection } from "typeorm";
import Koa, { Context, DefaultState } from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import serve from "koa-static";
import mount from "koa-mount";

import { router as healthCheckRouter } from "./routes/healthcheck";
import { router as templateCheckRouter } from "./routes/template-check";
import { appConfig /*, dbConfig */ } from "./config";
// import { Post } from "./entity/Post";
import { Koabars } from "./koabars";

(async () => {
  // let connection;
  try {
    // connection = await createConnection(dbConfig);
  } catch (error) {
    console.error(`Error while connecting to the database: ${error}`);
    return error;
  }

  // let firstPost = new Post();
  // firstPost.title = "First post!";
  // firstPost.content = "I am so excited! Yay!!!";

  // const savedPost = await connection.manager.save(firstPost);

  // console.log(`New post saved, post id is ${savedPost.id}`, savedPost);

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
