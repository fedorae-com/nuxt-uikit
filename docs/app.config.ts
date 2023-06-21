export default defineAppConfig({
  docus: {
    title: 'Nuxt UIkit',
    url: 'https://nuxt-uikit.fedorae.com',
    description: 'UIkit module for Nuxt.',
    image: '/cover.png',
    socials: {
      twitter: 'fedorae_',
      github: 'fedorae-com/nuxt-uikit',
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      title: 'Nuxt UIkit',
      showLinkIcon: true,
      exclude: [],
    },
    app: {
      head: {
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
      },
    },
    footer: {
      iconLinks: [
        {
          href: 'https://fedorae.com',
          icon: 'mdi:external-link'
        },
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxtLabs'
        }
      ]
    }
  }
})
