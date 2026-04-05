// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import { SITE } from "./src/consts/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Playfair Display",
      cssVariable: "--font-playfair",
      provider: fontProviders.fontsource(),
      weights: [800],
      styles: ["normal"],
      fallbacks: ["serif"],
    },
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600, 700, 800],
      styles: ["normal"],
    },
  ],
  site: SITE.url,
  integrations: [sitemap()],
});
