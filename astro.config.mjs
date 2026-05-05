import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://bluecapit.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/cousin-com') && !page.includes('/cousin-net') && !page.includes('/cousin-org'),
    }),
    icon(),
  ],
  build: {
    format: 'file',
  },
});
