import MarkdownIt from "markdown-it";
import pino from "pino";
import pinoHttp from "pino-http";
import sirv from "sirv";
import sqlite3 from "sqlite3";
import { App } from "@tinyhttp/app";
import { Database, open } from "sqlite";
import { getHighlighter } from "shiki";

import { PORT, DB_FILENAME } from "./configuration";
import { AnalyticsService } from "./services/AnalyticsService";
import { HitsCounterMiddleware } from "./middlewares/HitsCounterMiddleware";
import { NowController } from "./controllers/NowController";
import { PostsController } from "./controllers/PostsController";
import { PostsService } from "./services/PostsService";
import { di } from "./di";
import { fiveHundredHandler } from "./utilities/fiveHundredHandler";
import { fourOFourHandler } from "./utilities/fourOFourHandler";
import { isProduction } from "./utilities/development";
import { AboutController } from "./controllers/AboutController";

if (!isProduction()) {
  sqlite3.verbose();
}

(async () => {
  di.logger = pino({
    level: !isProduction() ? "debug" : "warn",
  });
  const httpLogger = pinoHttp({ logger: di.logger });

  di.logger.info(`DB File Name: ${DB_FILENAME}`);
  let db: Database;
  try {
    db = await open({
      filename: DB_FILENAME,
      driver: sqlite3.Database,
    });
  } catch (err: any) {
    di.logger.error(err);
    throw new Error(err);
  }

  di.analyticsService = new AnalyticsService(db);
  di.postsService = new PostsService(db);

  const highlighter = await getHighlighter({ theme: "material-palenight" });

  di.md = new MarkdownIt({
    highlight: (str, lang, attrs) => {
      if (attrs?.length > 0) {
        const attributes = JSON.parse(attrs);
        for (const [key, value] of Object.entries(attributes)) {
          di.logger.debug(`Key: "${key}" Value: "${value}"`);
        }
      }
      try {
        // const tokens = highlighter.codeToThemedTokens(str, lang);
        // return JSON.stringify(tokens);

        return highlighter.codeToHtml(str, { lang });
      } catch (err) {
        di.logger.error(err);
        return "";
      }
    },
  });

  const app = new App({
    noMatchHandler: fourOFourHandler,
    onError: fiveHundredHandler,
  });

  try {
    app
      .use(httpLogger)
      .use(
        "/public",
        // TODO: add env variable to control static assets cache settings
        sirv("dist/public", {
          maxAge: 31536000, // 1Y
          immutable: true,
        })
      )
      .all(HitsCounterMiddleware.path, new HitsCounterMiddleware().handler)
      .use(AboutController.path, new AboutController().router)
      .use(NowController.path, new NowController().router)
      .use(PostsController.path, new PostsController().router)
      .listen(PORT, () =>
        di.logger.info(`🚀 Listening on http://localhost:${PORT}`)
      );
  } catch (err: any) {
    di.logger.error(err);
  }
})();
