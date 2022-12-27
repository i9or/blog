import esbuild from "esbuild";
import { configuration } from "./configuration.mjs";

esbuild
  .build({
    ...configuration,
    minify: true,
  })
  .catch(() => process.exit(1));
