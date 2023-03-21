import { Query } from 'types/graphql-types'

const query = `
  query {
    viewer {
      login
    }
  }
`

type Viewer = Partial<Pick<Query, 'viewer'>>

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
