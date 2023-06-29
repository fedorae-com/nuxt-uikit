import { fileURLToPath } from 'url'
import {
  defineNuxtModule,
  addPlugin,
  addImports,
  createResolver,
} from '@nuxt/kit'
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

    nuxt.options.css.push('uikit/dist/css/uikit.min.css')

    addPlugin(resolver.resolve('./runtime/plugin'))
    addImports({
      name: 'useUIkit',
      from: resolver.resolve('./runtime/composables'),
    })

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