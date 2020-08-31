import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const appConfig = {
  port: process.env.PORT || 4000,
  cors: { origin: "*" },
};

// TODO: settings should be extracted as environment variables
export const dbConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "5up3r53cr37!",
  database: "blog_dev",
  synchronize: true,
  logging: true,
  entities: [__dirname + "/../src/**/*.{ts,js}"],
};
