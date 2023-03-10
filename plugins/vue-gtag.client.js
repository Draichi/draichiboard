import VueGTag, { trackRouter } from 'vue-gtag'
import { defineNuxtPlugin, useRouter } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGTag, {
    config: {
      id: 'G-PFFDM9Q014',
      params: {
        send_page_view: true,
      },
    },
  })
  trackRouter(useRouter())
})
