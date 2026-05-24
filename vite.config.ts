import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
  ],
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
  vite: {
    server: {
      host: "::",
      port: 8080,
    },
  },
});
