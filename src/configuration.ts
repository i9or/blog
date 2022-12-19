import path from "path";

type MayBeUndefinedConfigurationMap<T extends string> = {
  readonly [key in T]: Readonly<Optional<string>>;
};

type ConfigurationMap<T extends string> = {
  readonly [key in T]: Readonly<string>;
};

const defineConfiguration = <T extends string>(
  configuration: MayBeUndefinedConfigurationMap<T>
) => {
  Object.entries(configuration).map(([key, value]) => {
    if (!value) {
      throw new Error(`Property ${key} is not defined`);
    }
  });

  return configuration as ConfigurationMap<keyof typeof configuration>;
};

const ENV = defineConfiguration({
  BLOG_DOMAIN: process.env.BLOG_DOMAIN,
  BLOG_PORT: process.env.BLOG_PORT,
  DB_FILENAME: process.env.DB_FILENAME,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
  BLOG_SECRET: process.env.BLOG_SECRET,
  CLIENT_ORIGINS: process.env.CLIENT_ORIGINS,
  MORE_SECURE: process.env.MORE_SECURE,
});

export const BLOG_DOMAIN = ENV.BLOG_DOMAIN;
export const BLOG_PORT = parseInt(ENV.BLOG_PORT);
export const DB_FILENAME = path.resolve(__dirname, ENV.DB_FILENAME);
export const SALT_ROUNDS = parseInt(ENV.SALT_ROUNDS);
export const BLOG_SECRET = ENV.BLOG_SECRET;
export const CLIENT_ORIGINS = JSON.parse(ENV.CLIENT_ORIGINS);
export const MORE_SECURE = ENV.MORE_SECURE === "true";
