import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://agencechance.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
});
