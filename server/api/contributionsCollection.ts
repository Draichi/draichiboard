import { Query } from 'types/graphql-types'

type User = Pick<Query, 'user'>

const query = `
  query ($login: String!, $from: DateTime, $to: DateTime) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        contributionCalendar {
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`

/**
 * Fetch all the contributions from a user given `from` and `to` dates
 */
export default defineEventHandler(async (event): Promise<User> => {
  const { from, to } = getQuery(event)

  try {
    const request = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NUXT_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: { login: 'Draichi', from, to },
      }),
    })

    const response = await request.json()

    return response.data as User
  } catch (error) {
    console.error(error)

    return {} as User
  }
})
