// @ts-check
import {defineConfig} from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import mdx from "@astrojs/mdx"
import { loadEnv } from 'vite'

const {SITE_DOMAIN, PORT, ALL_HOSTS} = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '')

export default defineConfig({
  site: String(SITE_DOMAIN),
  server: {
    port: Number(PORT),
    host: Boolean(ALL_HOSTS)
  },
  output: "static",
  trailingSlash: "never",
  compressHTML: false,
  integrations: [mdx({})],
  markdown: {
    syntaxHighlight: "prism"
  },
  devToolbar: {
    enabled: true
  },
  security: {
    checkOrigin: false
  },
  build: {
    format: "file"
  },
  vite: {
    plugins: [
      // @ts-ignore
      tailwindcss()
    ]
  }
})
