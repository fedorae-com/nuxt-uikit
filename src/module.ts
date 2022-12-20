import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import { name, version } from '../package.json'

export interface ModuleOptions {
  addPlugin: Boolean
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
  setup (options, nuxt) {
    if (options.addPlugin) {
      nuxt.options.css.push('uikit/dist/css/uikit.css')
    }
  }
})
