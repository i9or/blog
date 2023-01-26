import esbuild from "esbuild";
import { configuration } from "./configuration";

esbuild.build(configuration).catch(() => process.exit(1));
