/**
 * Set the authentication token for GraphQL queries
 */
export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  nuxtApp.hook('apollo:auth', ({ token }) => {
    token.value = runtimeConfig.public.githubToken
  })
})
