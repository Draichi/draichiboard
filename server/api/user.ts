interface UserData {
  followers: number
  following: number
  repositories: number
  issueComments: number
}

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
export default defineEventHandler(async (event): Promise<UserData> => {
  console.info({ event })
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

    return {
      followers: response.data?.user?.followers?.totalCount,
      following: response.data?.user?.following?.totalCount,
      repositories: response.data?.user?.repositories?.totalCount,
      issueComments: response.data?.user?.issueComments?.totalCount,
    }
  } catch (error) {
    console.error(error)

    return {} as UserData
  }
})
