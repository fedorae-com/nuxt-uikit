import { defineNuxtPlugin } from '#imports'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.$UIkit = UIkit
  // nuxtApp.$UIkit.use(Icons)
  // nuxtApp.provide('UIkit', UIkit)
})
