/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from "vite";
import * as path from "path";

// NOTE: this is used only for vitest, build is done via esbuild
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "node",
  },
});
