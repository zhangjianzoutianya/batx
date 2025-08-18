import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        solution: resolve(__dirname, "solution.html"),
        solutionDetails: resolve(__dirname, "solutionDetails.html"),
        productService: resolve(__dirname, "productService.html"),
        about: resolve(__dirname, "about.html"),
        team: resolve(__dirname, "team.html"),
        news: resolve(__dirname, "news.html"),
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        javascriptEnabled: true,
        globalVars: {},
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 配置 @ 别名指向 src 目录
    },
  },
  server: {
    open: true, // 是否自动在浏览器打开
    port: 1188, //端口号
    host: "localhost",
    proxy: {
      "/api": {
        target: "", //dev环境
        changeOrigin: true, //是否跨域
        rewrite: (path) => path.replace(/^\/api/, "/api/index"),
      },
    },
  },
});
