import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { name, version } from '../package.json'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'uikit'
  },
  defaults: {
    addPlugin: true
  },
  async setup (options, nuxt) {
    if (options.addPlugin) {
      const { resolve } = createResolver(import.meta.url)
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.css.push('uikit/dist/css/uikit.css')
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  }
})
