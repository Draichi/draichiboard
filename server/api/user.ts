import { Query } from 'types/graphql-types'

type User = Pick<Query, 'user'>

const query = `
  query ($login: String!) {
    user(login: $login) {
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories {
        totalCount
      }
      issueComments {
        totalCount
      }
    }
  }
`

/**
 * Fetch the basic information related to the user
 */
export default defineEventHandler(async (): Promise<User> => {
  try {
    const request = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NUXT_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query, variables: { login: 'Draichi' } }),
    })

    const response = await request.json()

    return response.data as User
  } catch (error) {
    console.error(error)

    return {} as User
  }
})
