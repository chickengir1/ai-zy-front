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
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
