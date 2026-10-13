// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages: the workflow passes the site origin and the base path
// (empty for <usuario>.github.io, "/<repo>" for a project site), so the same
// code works as a main site or under a path.
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321",
  base,
  trailingSlash: "always",
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      wrap: false,
    },
  },
});
