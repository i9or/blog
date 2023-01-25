import MarkdownIt from "markdown-it";
import sirv from "sirv";
import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";
import { getHighlighter } from "shiki";
import implicitFigures from "markdown-it-image-figures";

import { di } from "~/di";
import { buildBlog } from "~/buildBlog";
import { SERVER_PORT, WSS_PORT } from "~/constants";
import { isProduction } from "~/utilities/development";

(async () => {
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
    di.logger.error(err);
  }
})();
