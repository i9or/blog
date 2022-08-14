import esbuild from "esbuild";
import { configuration } from "./configuration.mjs";

esbuild.build(configuration).catch(() => process.exit(1));
