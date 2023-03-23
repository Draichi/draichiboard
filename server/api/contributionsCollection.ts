import { Query } from 'types/graphql-types'

type User = Query['user']

interface TimelineCommit {
  contributionCount: number
  date: string
}

interface ContributionsCollection {
  commits: number
  issues: number
  pullRequests: number
  reviews: number
  commitsTimeline: TimelineCommit[]
}

enum Month {
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
}

const monthsList = Object.values(Month).filter((v) => isNaN(Number(v)))

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

async function fetchContributionsCollectionAPI(
  from: Date,
  to: Date
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

    console.log(from, to)

    const response = await request.json()

    return response.data.user as User
  } catch (error) {
    console.error(error)

    return {} as User
  }
}

function createCommitsTimelineOfTheYear(
  isTheYearThisYear: boolean,
  actualMonthNumber: number
) {
  if (!isTheYearThisYear) {
    return [
      { date: 'Jan', contributionCount: 0 },
      { date: 'Feb', contributionCount: 0 },
      { date: 'Mar', contributionCount: 0 },
      { date: 'Apr', contributionCount: 0 },
      { date: 'May', contributionCount: 0 },
      { date: 'Jun', contributionCount: 0 },
      { date: 'Jul', contributionCount: 0 },
      { date: 'Aug', contributionCount: 0 },
      { date: 'Sep', contributionCount: 0 },
      { date: 'Oct', contributionCount: 0 },
      { date: 'Nov', contributionCount: 0 },
      { date: 'Dec', contributionCount: 0 },
    ]
  }

  const commitsTimelineOfTheYear: TimelineCommit[] = []

  for (let month = 0; month <= actualMonthNumber; month++) {
    commitsTimelineOfTheYear.push({
      date: monthsList[month] as string,
      contributionCount: 0,
    })
  }

  return commitsTimelineOfTheYear
}

/**
 * Fetch all the contributions from a user given `from` and `to` dates
 */
export default defineEventHandler(
  async (): Promise<ContributionsCollection> => {
    const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023]
    const from = new Date()
    const commitsTimeline: TimelineCommit[] = []
    let commits = 0
    let issues = 0
    let pullRequests = 0
    let reviews = 0

    from.setDate(1)
    from.setMonth(0)

    try {
      for (const year of years) {
        const to = new Date()
        const isTheYearThisYear = to.getFullYear() === year
        const actualMonthNumber = to.getMonth()

        const commitsTimelineOfTheYear = createCommitsTimelineOfTheYear(
          isTheYearThisYear,
          actualMonthNumber
        )

        from.setFullYear(year)

        if (!isTheYearThisYear) {
          to.setDate(31)
          to.setMonth(11)
        }

        to.setFullYear(year)

        const user = await fetchContributionsCollectionAPI(from, to)

        if (!user) {
          return {} as ContributionsCollection
        }

        const {
          totalCommitContributions,
          totalIssueContributions,
          totalPullRequestContributions,
          totalPullRequestReviewContributions,
          contributionCalendar,
        } = user.contributionsCollection

        commits += totalCommitContributions
        issues += totalIssueContributions
        pullRequests += totalPullRequestContributions
        reviews += totalPullRequestReviewContributions

        const tempCommits = contributionCalendar.weeks
          .flatMap((week) => week.contributionDays)
          .flatMap((contributionDay) => contributionDay)

        tempCommits.forEach(({ date, contributionCount }) => {
          const monthNumber = new Date(date).getMonth()
          const monthName = Month[monthNumber]

          const index = commitsTimelineOfTheYear.findIndex(
            (month) => month.date == monthName
          )

          if (commitsTimelineOfTheYear[index]) {
            commitsTimelineOfTheYear[index].contributionCount +=
              contributionCount
          }
        })

        commitsTimelineOfTheYear.forEach(
          (month) => (month.date = `${month.date} ${year}`)
        )

        commitsTimeline.push(...commitsTimelineOfTheYear)
      }

      return {
        commits,
        issues,
        pullRequests,
        reviews,
        commitsTimeline,
      }
    } catch (error) {
      console.error(error)

      return {} as ContributionsCollection
    }
  }
)
