import path from "path";
import esbuild from "esbuild";
import { isProduction } from "./utilities.mjs";

export const cssFilePlugin = {
  name: "css-file",
  setup(build) {
    build.onResolve({ filter: /\.css$/ }, (args) => {
      return {
        path: path.join(args.resolveDir, args.path),
        namespace: "css-file",
      };
    });

    build.onLoad({ filter: /.*/, namespace: "css-file" }, async (args) => {
      const result = await esbuild.build({
        entryPoints: [args.path],
        bundle: true,
        write: false,
        minify: isProduction(),
      });

      return {
        contents: result.outputFiles[0].text,
        loader: "file",
      };
    });
  },
};
