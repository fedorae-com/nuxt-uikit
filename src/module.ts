import { fileURLToPath } from 'url'
import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit'
import { addCustomTab } from '@nuxt/devtools-kit'
import { name, version } from '../package.json'

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

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.options.css = nuxt.options.css ?? []
    nuxt.options.css.push('uikit/dist/css/uikit.min.css')

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.publicAssets ||= []
      nitroConfig.publicAssets.push({
        dir: resolve('./runtime/public'),
        maxAge: 60 * 60 * 24 * 365 // 1 year
      })
    })

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
          src: 'https://getuikit.com',
        },
      })
    }

    useNuxtMeta((head: any) => {
      head.script = head.script ?? []
      head.script.push(
        {
          defer: true,
          src: '/uikit.min.mjs'
        },
        {
          defer: true,
          src: '/uikit-icons.min.mjs'
        }
      )
    })
  },
})