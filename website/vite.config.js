import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "/" — deployed at the domain root on Vercel; required for clean-URL
// client routing (BrowserRouter) so asset paths stay absolute on nested routes.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
