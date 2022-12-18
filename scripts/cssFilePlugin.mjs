import path from "path";
import esbuild from "esbuild";
import { isProduction } from "./utilities.mjs";

export const cssFilePlugin = {
  name: "css-file",
  setup(build) {
    build.onResolve({ filter: /\.css$/ }, async (args) => {
      // TODO: somehow replace patterns needs to be used from tsconfig.json
      const importPath = args.path.replace(
        "~",
        path.resolve(process.cwd(), "./src")
      );

      return {
        path: path.resolve(args.resolveDir, importPath),
        namespace: "css-file",
      };
    });

    build.onLoad({ filter: /.*/, namespace: "css-file" }, async (args) => {
      const result = await esbuild.build({
        entryPoints: [args.path],
        bundle: true,
        write: false,
        minify: isProduction(),
        metafile: true,
      });

      return {
        contents: result.outputFiles[0].text,
        loader: "file",
        watchFiles: Object.keys(result.metafile?.inputs ?? {}),
      };
    });
  },
};
