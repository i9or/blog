import MarkdownIt from "markdown-it";
import pino from "pino";
import pinoHttp from "pino-http";
import sirv from "sirv";
import { App } from "@tinyhttp/app";
import { getHighlighter } from "shiki";
import implicitFigures from "markdown-it-image-figures";

import { di } from "~/di";
import { isProduction } from "~/utilities/development";
import { buildBlog } from "~/buildBlog";

const BLOG_PORT = 4000;

(async () => {
  di.logger = pino({
    level: !isProduction() ? "debug" : "warn",
  });
  const httpLogger = pinoHttp({ logger: di.logger });

  const highlighter = await getHighlighter({ theme: "material-palenight" });

  di.md = new MarkdownIt({
    html: true,
    highlight: (str, lang, _attrs) => {
      try {
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

  await buildBlog();

  const app = new App();

  try {
    app
      .use(httpLogger)
      .use(
        "/public",
        sirv("build/public", {
          maxAge: 31536000, // 1Y
          immutable: true,
        })
      )
      .use(
        "/images",
        sirv("build/images", {
          maxAge: 31536000, // 1Y
          immutable: true,
        })
      )
      .use("/", sirv("build/", { dev: true }))
      .listen(BLOG_PORT, () => {
        di.logger.info(`🚀 Listening on http://localhost:${BLOG_PORT}`);
      });
  } catch (err: any) {
    di.logger.error(err);
  }
})();
