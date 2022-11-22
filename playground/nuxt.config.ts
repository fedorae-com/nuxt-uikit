import { defineNuxtConfig } from 'nuxt/config'
import uikitModule from '../src/module'

export default defineNuxtConfig({
  modules: [
    // @ts-ignore
    uikitModule
  ],
  uikit: {
    addPlugin: true
  }
})