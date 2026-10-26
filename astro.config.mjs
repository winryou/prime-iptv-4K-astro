// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://primeiptv4k.ca',
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()]
  },
});
