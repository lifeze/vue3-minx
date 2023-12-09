// uno.config.ts
import { defineConfig } from 'unocss';
import presetWeapp from 'unocss-preset-weapp';
import presetIcons from '@unocss/preset-icons';
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer';
import transformerDirectives from '@unocss/transformer-directives';

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default defineConfig({
  // ...UnoCSS选项
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
    // attributify autocomplete
    presetWeappAttributify(),

    presetIcons({
      collections: {
        gg: () =>
          import('@iconify-json/gg/icons.json').then(i => i.default),
      }
    }),
  ],
  transformers: [
    transformerDirectives(),
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ]
})