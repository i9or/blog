import path from "path";

export const PORT = parseInt(process.env.PORT ?? "4000");
export const DB_FILENAME =
  process.env.DB_FILENAME ?? path.resolve(__dirname, "../db/development.db");

export const SALT_ROUNDS = 10;

export const SECRET = process.env.SECRET ?? "wow_so_secret";

export const CLIENT_ORIGINS = process.env.CLIENT_ORIGIN
  ? [process.env.CLIENT_ORIGIN]
  : ["http://localhost:3000", "http://localhost:4000"];
