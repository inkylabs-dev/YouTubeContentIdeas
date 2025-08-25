import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://youtubecontentideas.com',
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      include: ['**/react/*', '**/components/**/*'],
    }),
    sitemap(),
  ],
  vite: {
    esbuild: {
      jsx: 'automatic',
    },
  },
});