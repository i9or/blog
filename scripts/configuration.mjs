import { cssFilePlugin } from "./cssFilePlugin.mjs";

export const configuration = {
  logLevel: "info",
  entryPoints: ["./src/index.ts"],
  platform: "node",
  external: ["vscode-oniguruma", "shiki"],
  bundle: true,
  outfile: "dist/index.js",
  loader: {
    ".gif": "file",
    ".png": "file",
  },
  assetNames: "public/[name]-[hash]",
  publicPath: "/",
  plugins: [cssFilePlugin],
};
