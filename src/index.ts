import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";

import { layout } from "./templates/layout";

const app = new App();

app
  .use(logger())
  .get("/", (_, res) => {
    res.format({
      html: () => res.send(layout({ body: "<h1>Hello!</h1>" })),
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
