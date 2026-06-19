import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps the build portable (works under any sub-path on static hosts).
export default defineConfig({
  plugins: [react()],
  base: "./",
});
