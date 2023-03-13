import VueGTag from 'vue-gtag'
import { defineNuxtPlugin, useRouter } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGTag,
    {
      config: {
        id: nuxtApp.$config.public.analyticsId,
        params: {
          send_page_view: true,
        },
      },
      property: {
        id: nuxtApp.$config.public.analyticsId,
      },
    },
    useRouter()
  )
})
