import path from "path";

export const PORT = parseInt(process.env.PORT ?? "4000");
export const DB_FILENAME =
  process.env.DB_FILENAME ?? path.resolve(__dirname, "../db/development.db");
