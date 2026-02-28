// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://datosar.com',
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    svgo: true
  }
});
