import esbuild from "esbuild";
import { configuration } from "./configuration";

esbuild
  .build({
    ...configuration,
    watch: true,
  })
  .then((_result) => {});
