<template>
  <div>
    <div class="uk-container">
      <div class="uk-margin-top">
        <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
          <h3 class="uk-card-title">
            UIkit module for Nuxt
          </h3>
          <p>
            UIkit is a lightweight and modular front-end framework for
            developing fast and powerful web interfaces.
          </p>
          <p>
            For more information on UIkit, check out the
            <a
              href="https://getuikit.com/docs/introduction"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation </a>.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/uikit/uikit/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board </a>.
          </p>
          <p>Thank you for using this UIkit module.</p>
          <div class="uk-margin-small-bottom">
            <a
              id="iconEl"
              href="https://github.com/fedorae-com/nuxt-uikit-modules"
              target="_blank"
              rel="noopener noreferrer"
              class="uk-icon-button"
              uk-icon="github"
            />
          </div>
          <div class="text-xs-right">
            <em><small>&mdash; Yisrae</small></em>
          </div>
          <hr>
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >Nuxt GitHub</a>
          <br>
          <br>
        </div>
      </div>
    </div>

    <!-- Offcanvas -->
    <div id="offcanvas-overlay">
      <div class="uk-offcanvas-bar">
        <button
          class="uk-offcanvas-close"
          type="button"
          uk-close
        />

        <h3>Title</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import UIkit from 'uikit'
// const { UIkit, notification, sticky, icon, drop, offcanvas } = useUIkit()
onMounted(() => {
  UIkit.notification({ message: 'Nuxt + UIkit', status: 'success' })
  const iconEl = UIkit.icon('#iconEl').icon
  UIkit.notification({ message: `Icon: ${iconEl}`, status: 'primary' })
  UIkit.offcanvas('#offcanvas-overlay', { overlay: true }).toggle()
})
</script>
