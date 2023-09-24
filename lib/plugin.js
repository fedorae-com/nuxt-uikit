import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

/**
 * Loads the Icon plugin
 *
 * @param {} Icons
 */
UIkit.use(Icons)

/**
 * Nuxt Plugin to create/inject global $UIkit.
 *
 * @param {} ctx - Nuxt context
 * @param {} inject - VueJS inject function
 */
export default async function (ctx, inject) {
  ctx.$UIkit = UIkit
  await inject('UIkit', UIkit)
}
