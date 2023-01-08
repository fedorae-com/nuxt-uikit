export default defineAppConfig({
  docus: {
    title: 'Nuxt UIkit',
    url: 'https://nuxt-uikit.fedorae.com',
    description: 'UIkit module for Nuxt.',
    image: '/cover.png',
    socials: {
      twitter: 'fedorae_',
      github: 'fedorae-com/nuxt-uikit/tree/next',
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      title: 'Nuxt UIkit',
      // logo: true,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'IconNuxtLabs'
        },
        {
          href: 'https://fedorae.com',
          icon: ''
        }
      ]
    }
  }
})
