import { fileURLToPath } from 'url'
import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit'
import { addCustomTab } from '@nuxt/devtools-kit'
import { name, version, dependencies } from '../package.json'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'uikit',
  },
  defaults: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const useNuxtMeta = (fn: Function) => fn(nuxt.options.app.head)

    const uikitVersion = dependencies.uikit

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.options.css = nuxt.options.css ?? []
    nuxt.options.css.push('uikit/dist/css/uikit.min.css')

    addPlugin(resolve(runtimeDir, 'plugin'))

    // Disable import due to return https://github.com/fedorae-com/nuxt-uikit/issues/4
    // addImports({
    //   name: 'useUIkit',
    //   as: 'useUIkit',
    //   from: resolve(runtimeDir, 'composables/useUIkit'),
    // })

    if (nuxt.options.devtools && nuxt.options.dev) {
      addCustomTab({
        name: 'nuxt-uikit',
        title: 'UIkit',
        icon: 'logos:uikit',
        view: {
          type: 'iframe',
          src: 'https://getuikit.com/docs/introduction',
        },
      })
    }

    useNuxtMeta((head: any) => {
      head.script = head.script ?? []

      // TODO: figure out a better way to get the icons to work
      head.script.push(
        {
          defer: true,
          src: `https://cdn.jsdelivr.net/npm/uikit@${uikitVersion}/dist/js/uikit.min.js`,
        },
        {
          defer: true,
          src: `https://cdn.jsdelivr.net/npm/uikit@${uikitVersion}/dist/js/uikit-icons.min.js`,
        }
      )
    })
  },
})