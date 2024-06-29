import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import unpluginAutoImport from "unplugin-auto-import/vite";
import unpluginVueComponents from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    unpluginAutoImport({
      imports: [
        "vue",
        "vue-router"
      ],
      dts: true
    }),
    unpluginVueComponents({
      resolvers: [
        PrimeVueResolver({
          prefix: "P",
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "~app": resolve("./src/app"),
      "~pages": resolve("./src/pages"),
      "~widgets": resolve("./src/widgets"),
      "~features": resolve("./src/features"),
      "~entities": resolve("./src/entities"),
      "~shared": resolve("./src/shared"),
    },
  },
  envDir: "./src/shared/config",
  publicDir: "./src/shared/public",
});
