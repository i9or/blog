import esbuild from "esbuild";
import { configuration } from "./configuration";

esbuild
  .build({
    ...configuration,
    minify: true,
  })
  .catch(() => process.exit(1));
