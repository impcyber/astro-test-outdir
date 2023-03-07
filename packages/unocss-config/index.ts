import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  UserConfig
} from 'unocss'
import type {Theme} from '@unocss/preset-uno'
import presetTheme from 'unocss-preset-theme'
import breakpoints from './breakpoints'
import shortcuts from './shortcuts'
import retailTheme from './themes/retail'

export default defineConfig<Theme>({
  shortcuts,
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetIcons({
      cdn: 'https://esm.sh/',
      extraProperties: {
        display: 'inline-block',
      },
      warn: true,
    }),
    presetTypography({
      cssExtend: {}
    }),
    presetTheme({
      theme: {
        retail: retailTheme
      },
      selectors: {
        'retail': '[theme-retail]'
      }
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  // safelist: 'prose prose-sm m-auto text-left'.split(' '),
  theme:{
    breakpoints,
    container: {
      center: true,
    },
  }
}) as UserConfig<Theme>
