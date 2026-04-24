import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bluecapit.com',
  integrations: [sitemap()],
  build: {
    format: 'file',
  },
});
