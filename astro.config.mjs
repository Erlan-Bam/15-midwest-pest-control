import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://15-midwest-pest-control.vercel.app',
  integrations: [react()],
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
