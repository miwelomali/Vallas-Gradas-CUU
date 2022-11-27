import { defineConfig } from 'astro/config';

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://miwelomali.github.io',
  base: '/Vallas-Gradas-CUU',
  output: "server",
  adapter: netlify()
});