import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-site.netlify.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
