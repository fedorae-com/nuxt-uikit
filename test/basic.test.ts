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
    const wrapper = mount(App)
    const element = wrapper.find('#iconEl')
    const offcanvasTitleElement = wrapper.find('#offcanvas-title')
    expect(element.exists()).toBeTruthy()

    // Offcanvas is shown
    expect(offcanvasTitleElement.exists()).toBeTruthy()

    // element has class
    expect(element.classes()).toEqual(expect.arrayContaining(['uk-icon-button']))
  })
})
