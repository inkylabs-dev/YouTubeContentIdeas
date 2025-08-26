import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://youtubecontentideas.com/',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      include: ['**/react/*', '**/components/**/*'],
    }),
    sitemap({
      filter: (page) => !page.startsWith('https://youtubecontentideas.com/ideas/'),
    }),
  ],
  vite: {
    esbuild: {
      jsx: 'automatic',
    },
  },
});