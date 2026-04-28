import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bluecapit.com',
  integrations: [sitemap({
    filter: (page) => !page.includes('/cousin-com') && !page.includes('/cousin-net'),
  })],
  build: {
    format: 'file',
  },
});
