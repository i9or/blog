import { cssFilePlugin } from "./cssFilePlugin.mjs";

export const configuration = {
  logLevel: "info",
  entryPoints: ["./src/server.ts"],
  platform: "node",
  external: ["vscode-oniguruma", "shiki", "chokidar"],
  bundle: true,
  outfile: "tmp/index.js",
  loader: {
    ".gif": "file",
    ".png": "file",
    ".ico": "file",
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
