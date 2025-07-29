import { BuildOptions } from "esbuild";

import { cssFilePlugin } from "./cssFilePlugin";

export const configuration: BuildOptions = {
  logLevel: "info",
  entryPoints: ["./src/server.ts"],
  platform: "node",
  format: "cjs",
  external: ["vscode-oniguruma", "chokidar"],
  bundle: true,
  outfile: "tmp/index.js",
  loader: {
    ".gif": "file",
    ".png": "file",
    ".ico": "file",
    ".webp": "file",
  },
  assetNames: "/public/[name]-[hash]",
  publicPath: "/",
  plugins: [cssFilePlugin],
  define: {
    BLOG_APPLICATION_VERSION: process.env.BLOG_APPLICATION_VERSION
      ? `"${process.env.BLOG_APPLICATION_VERSION}"`
      : '"latest"',
  },
};
