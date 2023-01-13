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
    assetsInclude: ['**/*.gltf'],
  },
})
