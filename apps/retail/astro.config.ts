import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  outDir: '../../build/retail',
  build: {
    assets: '_assets',
    format: 'file',
  },
  integrations: [
    UnoCSS(),
  ],
})
