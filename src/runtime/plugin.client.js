// @ts-check

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

/**
 * Loads the Icon plugin
 *
 * @param {Icons} Icons
 */
UIkit.use(Icons)

/**
 * Injects global $UIkit.
 *
 * @param ctx {any} - Nuxt context
 * @param inject {any} - VueJS inject
 */
export default function (ctx, inject) {
  ctx.$UIkit = UIkit
  inject('UIkit', UIkit)
}
