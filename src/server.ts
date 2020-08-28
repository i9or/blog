import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import { router as healthCheckRouter } from "./routes/healthcheck";
import { config } from "./config";

const app = new Koa();

app.use(bodyParser());
app.use(cors(config.cors));
app.use(logger());

app.use(healthCheckRouter.routes());

export const server = app
  .listen(config.port, async () => {
    console.log(`🚀 Server is running at: http://localhost:${config.port}/`);
  })
  .on("error", (err) => {
    console.error(err);
  });
