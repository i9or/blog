import { cssFilePlugin } from "./cssFilePlugin.mjs";

export const configuration = {
  logLevel: "info",
  entryPoints: ["./src/server.ts"],
  platform: "node",
  external: [
    "vscode-oniguruma",
    "shiki",
    "sqlite3",
    "mock-aws-s3",
    "aws-sdk",
    "nock",
    "bcrypt",
  ],
  bundle: true,
  outfile: "dist/index.js",
  loader: {
    ".gif": "file",
    ".png": "file",
    ".ico": "file",
  },
  assetNames: "public/[name]-[hash]",
  publicPath: "/",
  plugins: [cssFilePlugin],
};
