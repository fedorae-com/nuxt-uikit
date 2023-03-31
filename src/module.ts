import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { name, version, dependencies } from '../package.json'

export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'uikit'
  },
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const useNuxtMeta = (fn: Function) => fn(nuxt.options.app.head)

    const uikitVersion = dependencies.uikit

    nuxt.options.css.push('uikit/dist/css/uikit.min.css')

    addPlugin(resolver.resolve('./runtime/plugin'))

    useNuxtMeta((head: any) => {
      head.script = head.script ?? [] 
      
      // TODO: figure out a better way to get the icons to work 
      head.script.push(
        {
          defer: true,
          src: `https://cdn.jsdelivr.net/npm/uikit@${uikitVersion}/dist/js/uikit.min.js`
        },
        {
          defer: true,
          src: `https://cdn.jsdelivr.net/npm/uikit@${uikitVersion}/dist/js/uikit-icons.min.js`
        })
    })
  }
})