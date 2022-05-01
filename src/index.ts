import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";
import sirv from "sirv";
import MarkdownIt from "markdown-it";
import { getHighlighter } from "shiki";

import { layout } from "./templates/layout";

import { samplePost } from "./sample-post";

(async () => {
  const highlighter = await getHighlighter({ theme: "material-palenight" });

  const md = new MarkdownIt({
    highlight: (str, lang) => {
      try {
        return highlighter.codeToHtml(str, { lang });
      } catch (_) {
        return "";
      }
    },
  });

  const app = new App();

  app
    .use(logger())
    .use("/public", sirv("dist/public"))
    .get("/", (_, res) => {
      res.format({
        html: () =>
          res.send(
            layout({
              title: samplePost.title,
              body: md.render(samplePost.content),
            })
          ),
        text: () => res.send("hello"),
      });
    })
    .get("/page/:page/", (req, res) => {
      res.status(200).send(`
    <h1>Some cool page</h1>
    <h2>URL</h2>
    ${req.url}
    <h2>Params</h2>
    ${JSON.stringify(req.params, null, 2)}
  `);
    })
    .listen(3000, () => console.log(`🚀 Listening on http://localhost:3000`));
})();
