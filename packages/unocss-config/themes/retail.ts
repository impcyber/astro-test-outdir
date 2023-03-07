import { presetUno, Theme } from '@unocss/preset-uno'

const theme = presetUno().theme!

export default <Theme> {
  colors: {
    primary: {
      DEFAULT: '#f4b619',
    },
    secondary: {
      DEFAULT: '#3f3f3f',
    }
  },
  fontFamily: {
    montserrat: `Montserrat, ${theme!.fontFamily!.sans}`,
    'road-radio': `RoadRadio, ${theme!.fontFamily!.mono}`,
  },
}