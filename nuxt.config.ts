import viteEslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
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
          content: '#36A2EB',
        },
        {
          property: 'og:title',
          content: 'Draichiboard',
        },
        {
          property: 'og:description',
          content: 'I make people buy your stuff',
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
          content: '/imgs/site-cover.png',
        },
        {
          property: 'og:image:height',
          content: '700',
        },
        {
          property: 'og:image:width',
          content: '1152',
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
    assetsInclude: ['**/*.gltf', '**/*.glb'],
  },
})
