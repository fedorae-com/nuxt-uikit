import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'
import { mount } from '@vue/test-utils'

// @ts-ignore
import App from '../test/fixtures/basic/app.vue'

// @vitest-environment happy-dom

describe('main', async () => {
  const baseUrl = import.meta.url
  const filePath = new URL('./fixtures/basic', baseUrl)

  await setup({
      rootDir: fileURLToPath(filePath)
  })

  it('renders the GitHub icon', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')

    const wrapper = mount(App)
    const element = wrapper.find('#iconEl')
    expect(element.exists()).toBeTruthy()

    // element has class
    expect(element.classes()).toEqual(expect.arrayContaining(['uk-icon-button']))

    // Offcanvas is shown
    expect(html).toContain('<h3>Title</h3>')
  })
})
