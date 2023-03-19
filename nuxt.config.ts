import viteEslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      analyticsId: process.env.NUXT_ANALYTICS_ID,
      githubToken: process.env.NUXT_GITHUB_TOKEN,
    },
  },
  modules: ['@nuxtjs/apollo'],
  apollo: {
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql',
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Draichiboard',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lacquer&family=Poppins:wght@400;500&display=swap',
          media: 'print',
          onload: "this.media='all'",
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon/favicon.ico',
        },
      ],
      meta: [
        {
          name: 'theme-color',
          content: '#0B0F0F',
        },
        {
          property: 'og:title',
          content: 'Draichiboard',
        },
        {
          property: 'og:description',
          content:
            "I'm a software engineer since 2015, front-end developer and web designer. Focused in performance, user experience and SEO.",
        },
        {
          name: 'description',
          content:
            "I'm a software engineer since 2015, front-end developer and web designer. Focused in performance, user experience and SEO.",
        },
        {
          property: 'og:type',
          content: 'profile',
        },
        {
          property: 'og:profile:first_name',
          content: 'Lucas',
        },
        {
          property: 'og:profile:last_name',
          content: 'Draichi',
        },
        {
          property: 'og:profile:username',
          content: '@Draichi',
        },
        {
          property: 'og:image',
          content: '/imgs/profile-photo.png',
        },
        {
          property: 'og:image:height',
          content: '290',
        },
        {
          property: 'og:image:width',
          content: '374',
        },
      ],
    },
  },
  vite: {
    plugins: [
      {
        ...viteEslintPlugin({
          cache: true,
          failOnWarning: false,
          failOnError: false,
        }),
        apply: 'serve',
      },
    ],
    assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.mov'],
  },
})
