import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    build: {
      outDir: "dist",
      rollupOptions: {
        input: {
          popup: resolve(__dirname, "index.html"), // popup entry
        },
      },
    },
    server: {
      port: 5173,
    },
  };
});
