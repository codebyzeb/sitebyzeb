import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical URL — used for sitemap, canonical tags, og:image URLs
  site: 'https://sitebyzeb.com',
  integrations: [sitemap()],
  // 'directory' build format gives /work/ URLs (matches the ReadyMag URLs)
  build: {
    format: 'directory',
  },
});
