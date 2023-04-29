import { fetchContributionsCollectionAPI } from '@/server/utils'
import { TimelineCommit } from '@/types'

const query = `
  query ($login: String!, $from: DateTime, $to: DateTime) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
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

const now = new Date()
const to = new Date()
const from = new Date(now.setDate(now.getDate() - 30))

export default defineEventHandler(async () => {
  try {
    const res = await fetchContributionsCollectionAPI(from, to, query)

    const foo = res?.contributionsCollection.contributionCalendar.weeks
      .flatMap((week) => week.contributionDays)
      .flatMap((contributionDay) => contributionDay)

    return foo as TimelineCommit[]
  } catch (error) {
    console.error('Unable to fetch last month contributions')

    return [] as TimelineCommit[]
  }
})
