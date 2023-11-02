import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-uikit',
    configKey: 'uikit'
  },
  // Default configuration options of the Nuxt module
  defaults: {},

  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.css.push('uikit/dist/css/uikit.css')

    addPlugin(resolver.resolve('./runtime/plugin.client'))
  }
})
