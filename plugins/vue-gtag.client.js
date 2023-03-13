import VueGTag from 'vue-gtag'
import { defineNuxtPlugin, useRouter } from '#imports'

require('dotenv').config()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGTag,
    {
      config: {
        id: process.env.ANALYTICS_ID,
        params: {
          send_page_view: true,
        },
      },
      property: {
        id: process.env.ANALYTICS_ID,
      },
    },
    useRouter()
  )
})
