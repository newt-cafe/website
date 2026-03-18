// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://newt.cafe/",
  adapter: vercel(),
  integrations: [mdx(), svelte(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
        "@content": "/content",
      },
    },
    noExternal: ["@lucide/svelte"],
  },

  fonts: [
    {
      name: "Jersey 10",
      cssVariable: "--font-jersey-10",
      provider: fontProviders.google(),
    },
    {
      name: "DM Sans",
      cssVariable: "--font-dm-sans",
      weights: ["300", "400", "900"],
      provider: fontProviders.google(),
    },
  ],

  markdown: {
    shikiConfig: { theme: "ayu-mirage" },
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }],
    ],
  },
});
