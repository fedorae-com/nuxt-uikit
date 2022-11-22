<template>
  <div>
    <div class="uk-container">
      <div class="uk-margin-top">
        <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
          <h3 class="uk-card-title">UIkit module for Nuxt</h3>
          <p>UIkit is a lightweight and modular front-end framework for developing fast and powerful web interfaces.</p>
          <p>For more information on UIkit, check out the <a href="https://getuikit.com/docs/introduction" target="_blank" rel="noopener noreferrer">documentation</a>.</p>
          <p> Find a bug? Report it on the github <a href="https://github.com/uikit/uikit/issues" target="_blank" rel="noopener noreferrer" title="contribute">issue board</a>.</p>
          <p>Thank you for using this UIkit module.</p>
          <div class="uk-margin-small-bottom">
            <a href="https://github.com/fedorae-com/nuxt-uikit-modules" target="_blank" rel="noopener noreferrer" class="uk-icon-button" uk-icon="github"></a>
          </div>
          <div class="text-xs-right">
            <em><small>&mdash; Yisrae</small></em>
          </div>
          <hr>
          <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt Documentation</a>
          <br>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer">Nuxt GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UIkit from 'uikit'
  onMounted(() => {
    UIkit.notification("Nuxt + UIkit!")
  })
</script>
