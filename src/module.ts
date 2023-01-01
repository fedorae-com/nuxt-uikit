import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver, isNuxt2 } from '@nuxt/kit'
import { name, version } from '../package.json'

export interface ModuleOptions {
  addPlugin: Boolean,
  ssr: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'uikit'
  },
  defaults: {
    addPlugin: true,
    ssr: false
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
      const runtimeDir = fileURLToPath(new URL('.', import.meta.url))
    if (options.addPlugin) {
      
      nuxt.options.css.push('uikit/dist/css/uikit.css')
      nuxt.options.build.transpile.push(runtimeDir)
    }

    if (isNuxt2()) {
      console.log('Nuxt 2');
      addPlugin({
        src: resolve(__dirname, 'plugin.js'),
        ssr: options.ssr
      })
    }
  }
})
