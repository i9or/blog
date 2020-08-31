import "reflect-metadata";

import { createConnection } from "typeorm";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

import { router as healthCheckRouter } from "./routes/healthcheck";
import { appConfig, dbConfig } from "./config";
import { Post } from "./entity/Post";

(async () => {
  let connection;
  try {
    connection = await createConnection(dbConfig);
  } catch (error) {
    console.error(`Error while connecting to the database: ${error}`);
    return error;
  }

  let firstPost = new Post();
  firstPost.title = "First post!";
  firstPost.content = "I am so excited! Yay!";

  const savedPost = await connection.manager.save(firstPost);

  console.log(`New post saved, post id is ${savedPost.id}`);

  const app = new Koa();

  app.use(bodyParser());
  app.use(cors(appConfig.cors));
  app.use(logger());

  app.use(healthCheckRouter.routes());

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
