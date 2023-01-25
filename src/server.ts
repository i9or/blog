import sirv from "sirv";
import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";
import { WebSocketServer } from "ws";
import { resolve } from "node:path";
import { watch } from "chokidar";

import { di, initMd } from "~/di";
import { buildBlog } from "~/buildBlog";
import { SERVER_PORT, WSS_PORT } from "~/constants";
import { isProduction } from "~/utilities/development";

(async () => {
  di.md = await initMd();

  await buildBlog();

  if (isProduction()) {
    return;
  }

  const wss = new WebSocketServer({ port: WSS_PORT });

  watch(resolve(process.cwd(), "content/posts")).on("change", async () => {
    await buildBlog();

    console.info("Reloading...");
    wss.clients.forEach((client) => client.send("reload"));
  });

  const app = new App();

  try {
    app
      .use(logger())
      .use(
        "/public",
        sirv("tmp/public", {
          maxAge: 31536000, // 1Y
          immutable: true,
        })
      )
      .use(
        "/images",
        sirv("content/images", {
          maxAge: 31536000, // 1Y
          immutable: true,
        })
      )
      .use("/", sirv("build/", { dev: true }))
      .listen(SERVER_PORT, () => {
        console.info(`🚀 Listening on http://localhost:${SERVER_PORT}`);
      });
  } catch (err: any) {
    console.error(err);
  }
})();
