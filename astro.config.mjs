// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URL canonique du site — sert au sitemap, aux balises canonical et Open Graph.
export default defineConfig({
  site: 'https://stephaniegarcia.fr',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
