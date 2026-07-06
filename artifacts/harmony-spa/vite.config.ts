import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const rawPort = process.env.PORT ?? "5173";
const port = Number(rawPort);
const basePath = process.env.BASE_PATH ?? "/";
const isReplit = process.env.REPL_ID !== undefined;
const isProduction = process.env.NODE_ENV === "production";

async function getReplitPlugins() {
  if (isProduction || !isReplit) return [];
  try {
    const [errorModal, cartographer, devBanner] = await Promise.all([
      import("@replit/vite-plugin-runtime-error-modal").catch(() => null),
      import("@replit/vite-plugin-cartographer").catch(() => null),
      import("@replit/vite-plugin-dev-banner").catch(() => null),
    ]);
    return [
      errorModal ? errorModal.default() : null,
      cartographer ? cartographer.cartographer({ root: path.resolve(import.meta.dirname, "..") }) : null,
      devBanner ? devBanner.devBanner() : null,
    ].filter(Boolean);
  } catch {
    return [];
  }
}

export default defineConfig(async () => ({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(await getReplitPlugins()),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
}));
