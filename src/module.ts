import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'
import { name, version } from '../package.json'

export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'uikit'
  },
  defaults: { },
  async setup(moduleOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.css.push('uikit/dist/css/uikit.css')
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))
  }
})
