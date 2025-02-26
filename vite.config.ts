import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pagesRouter from "vite-plugin-pages-router/plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pagesRouter({
      pagesDir: "src/pages",
      notFoundPage: "src/pages/NotFound.tsx",
      loadingComponent: "src/components/ui/loading/Pulse.tsx",
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://kdt-pt-1-pj-2-team02.elicecoding.com:8080",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
