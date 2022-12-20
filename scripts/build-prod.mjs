import esbuild from "esbuild";
import { configuration } from "./configuration.mjs";

esbuild
  .build({
    ...configuration,
    minify: true,
    define: {
      BLOG_APPLICATION_VERSION: process.env.BLOG_APPLICATION_VERSION
        ? `"${process.env.BLOG_APPLICATION_VERSION}"`
        : '"latest"',
    },
  })
  .catch(() => process.exit(1));
