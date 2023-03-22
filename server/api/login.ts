import { Query } from 'types/graphql-types'

type Viewer = Partial<Pick<Query, 'viewer'>>

const query = `
  query {
    viewer {
      login
    }
  }
`

/**
 * Used before any other API calls to login the viewer
 */
export default defineEventHandler(async (): Promise<Viewer> => {
  try {
    const request = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NUXT_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query, variables: {} }),
    })

    const response = await request.json()

    return response.data as Viewer
  } catch (error) {
    return {} as Viewer
  }
})
