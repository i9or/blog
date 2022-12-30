import "./setup";

import MarkdownIt from "markdown-it";
import pino from "pino";
import pinoHttp from "pino-http";
import sirv from "sirv";
import sqlite3 from "sqlite3";
import { App } from "@tinyhttp/app";
import { Database, open } from "sqlite";
import { getHighlighter } from "shiki";
import { cookieParser } from "@tinyhttp/cookie-parser";
import implicitFigures from "markdown-it-image-figures";

import { AboutController } from "./controllers/AboutController";
import { AnalyticsService } from "./services/AnalyticsService";
import { ApiV1Controller } from "./controllers/api/v1/ApiV1Controller";
import { BLOG_PORT, DB_FILENAME, BLOG_SECRET } from "./configuration";
import { FaviconMiddleware } from "./middlewares/FaviconMiddleware";
import { HitsCounterMiddleware } from "./middlewares/HitsCounterMiddleware";
import { NowController } from "./controllers/NowController";
import { PostsController } from "./controllers/PostsController";
import { PostsService } from "./services/PostsService";
import { RobotsMiddleware } from "./middlewares/RobotsMiddleware";
import { SessionsService } from "./services/SessionsService";
import { UsersService } from "./services/UsersService";
import { di } from "./di";
import { fiveHundredHandler } from "./utilities/fiveHundredHandler";
import { fourOFourHandler } from "./utilities/fourOFourHandler";
import { isProduction } from "./utilities/development";
import { ArchiveController } from "~/controllers/ArchiveController";

if (!isProduction()) {
  sqlite3.verbose();
}

(async () => {
  di.logger = pino({
    level: !isProduction() ? "debug" : "warn",
  });
  const httpLogger = pinoHttp({ logger: di.logger });

  di.logger.debug(`DB File Name: ${DB_FILENAME}`);
  let db: Database;
  try {
    db = await open({
      filename: DB_FILENAME,
      driver: sqlite3.Database,
    });
    await db.run("PRAGMA foreign_keys = ON");
  } catch (err: any) {
    di.logger.error(err);
    throw new Error(err);
  }

  if (!isProduction()) {
    db.on("profile", (sql: string, time: number) => {
      di.logger.debug(`${sql}, took ${time}ms`);
    });
  }

  di.analyticsService = new AnalyticsService(db);
  di.postsService = new PostsService(db);
  di.usersService = new UsersService(db);
  di.sessionsService = new SessionsService(db);

  const highlighter = await getHighlighter({ theme: "material-palenight" });

  di.md = new MarkdownIt({
    html: true,
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
  }).use(implicitFigures, {
    dataType: true,
    figcaption: true,
    lazy: true,
    async: true,
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
      .use(FaviconMiddleware.path, new FaviconMiddleware().handler)
      .use(RobotsMiddleware.path, new RobotsMiddleware().handler)
      .use(cookieParser(BLOG_SECRET))
      .use(ApiV1Controller.path, new ApiV1Controller().router)
      .all(HitsCounterMiddleware.path, new HitsCounterMiddleware().handler)
      .use(AboutController.path, new AboutController().router)
      .use(NowController.path, new NowController().router)
      .use(ArchiveController.path, new ArchiveController().router)
      // NOTE: should be the last as it mounts on '/'
      .use(PostsController.path, new PostsController().router)
      .listen(BLOG_PORT, () =>
        di.logger.info(`🚀 Listening on http://localhost:${BLOG_PORT}`)
      );
  } catch (err: any) {
    di.logger.error(err);
  }
})();
