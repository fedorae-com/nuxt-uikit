import { defineNuxtModule } from '@nuxt/kit'
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
    nuxt.options.css.push('uikit/dist/css/uikit.css')
  }
})
