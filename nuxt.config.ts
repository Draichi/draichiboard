import viteEslintPlugin from 'vite-plugin-eslint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
