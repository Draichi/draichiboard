import { Query } from '@/types'

type User = Query['user']

/**
 * Fetch Github API and returns the user info
 * @param from from which date to fetch the data
 * @param to to the date to fetch the data
 * @returns the user object
 */
export async function fetchContributionsCollectionAPI(
  from: Date,
  to: Date,
  query: string
): Promise<User> {
  try {
    const request = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NUXT_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          login: 'Draichi',
          from,
          to,
        },
      }),
    })

    const response = await request.json()

    if (response.message) {
      throw Error(response.message)
    }

    return response.data.user as User
  } catch (error) {
    console.error(error)

    return {} as User
  }
}
