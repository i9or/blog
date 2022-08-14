import esbuild from "esbuild";
import { configuration } from "./configuration.mjs";

esbuild
  .build({
    ...configuration,
    watch: true,
  })
  .then((result) => {});
