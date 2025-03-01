import UnocssIcons from '@unocss/preset-icons'
import { defineConfig, presetAttributify, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    UnocssIcons({
      // options
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    }),
    presetAttributify(),
    presetWind(),
  ],
  rules: [],
})
