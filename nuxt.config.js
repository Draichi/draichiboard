export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Draichiboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A very simple portfolio',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo'
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/configuration/default.js',
    },
  },
  build: {
    target: 'static',
  },
  env: {
    GH_TOKEN: process.env.GH_TOKEN,
  },
  googleAnalytics: {
    id: process.env.ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.ANALYTICS_ID
    }
  }
}
