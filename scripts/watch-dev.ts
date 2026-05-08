import esbuild from "esbuild";
import { configuration } from "./configuration";

const ctx = await esbuild.context({
  ...configuration,
});

await ctx.watch();
