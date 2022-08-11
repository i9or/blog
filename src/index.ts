import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";
import sirv from "sirv";
import MarkdownIt from "markdown-it";
import { getHighlighter } from "shiki";

import { Layout } from "./templates/Layout";

import { samplePost } from "./sample-post";
import { html } from "./utilities/html";

const PORT = 4000;

(async () => {
  const highlighter = await getHighlighter({ theme: "material-palenight" });

  const md = new MarkdownIt({
    highlight: (str, lang, attrs) => {
      if (attrs?.length > 0) {
        const attributes = JSON.parse(attrs);
        for (const [key, value] of Object.entries(attributes)) {
          console.log(`Key: ${key}\nValue: ${value}`);
        }
      }
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
            Layout({
              body: md.render(samplePost.content),
            })
          ),
        text: () => res.send("hello"),
      });
    })
    .get("/page/:page/", (req, res) => {
      res.status(200).send(html`
        <h1>Some cool page</h1>
        <h2>URL</h2>
        ${req.url}
        <h2>Params</h2>
        ${JSON.stringify(req.params, null, 2)}
      `);
    })
    .get("/now", (req, res) => {
      res
        .status(200)
        .send(Layout({ body: html`<h1>This is a <i>Now!</i> page</h1>` }));
    })
    .listen(PORT, () =>
      console.log(`🚀 Listening on http://localhost:${PORT}`)
    );
})();
