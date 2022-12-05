import chalk from "chalk";
import path from "path";
import sqlite3 from "sqlite3";
import url from "url";
import { open } from "sqlite";

import { isProduction } from "./utilities.mjs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

sqlite3.verbose();

const dbFilename =
  process.env.DB_FILENAME ?? path.resolve(__dirname, "../db/development.db");

(async () => {
  const db = await open({
    filename: dbFilename,
    driver: sqlite3.Database,
  });

  db.on("trace", (data) => {
    console.log(
      chalk.grey(
        "######################################################################"
      )
    );
    console.log(chalk.green(data));
  });

  await db.migrate({
    force: !isProduction(),
  });
  await db.close();
})();
