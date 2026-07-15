// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import { loadEnv } from 'vite';

const {PORT} = loadEnv('', process.cwd(), '')

export default defineConfig({
  site: import.meta.env.PROD ? 'https://ttnrtsite.me' : `http://localhost:${Number(PORT) || 8000}`,
  server: {
    port: Number(PORT) || 8000,
    host: true
  },
  output: 'static',
  trailingSlash: 'never',
  compressHTML: false,
  integrations: [
    mdx({}),
  ],
  markdown: {
    syntaxHighlight: 'prism'
  },
  devToolbar: {
    enabled: true
  },
  security: {
    checkOrigin: false
  },
  build: {
    format: 'file'
  },
  vite: {
    plugins: [
      // @ts-ignore
      tailwindcss()
    ]
  }
});