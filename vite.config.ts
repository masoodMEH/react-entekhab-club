import { defineConfig } from "vite";

import react from '@vitejs/plugin-react';
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src/"),
      "@/public": path.join(__dirname, "./public/"),
      "@/components": path.join(__dirname, "./src/components/"),
      "@/pages": path.join(__dirname, "./src/pages/"),
      "@/styles": path.join(__dirname, "./src/styles/"),
      "@/assets": path.join(__dirname, "./src/assets/"),
      "@/layout": path.join(__dirname, "./src/app/layout/"),
    },
  },
});
