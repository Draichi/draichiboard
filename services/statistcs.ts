import { Context } from '@nuxt/types'
import { ContributionCalendarDay, ContributionsCollection, User } from '@/types/graphql-types'
import ContributionCollection from '@/apollo/queries/contributionsCollection.gql'

interface ContributionsCollectionResponse {
    data?: ContributionsCollection
}

export const asyncData = async ({ app, store }: Context) => {
    try {
        const today = new Date()
        let lastMonth = new Date()
        lastMonth.setMonth(today.getMonth() - 1)

        const thisYearContributions = await app.apolloProvider?.defaultClient
            .query({
                query: ContributionCollection,
                variables: {
                    login: 'Draichi',
                    from: lastMonth,
                    to: today,
                },
            })
            .then(
                ({ data }: ContributionsCollectionResponse) => data && data.user
            )

        if (!thisYearContributions) {
            return { thisYearContributions }
        }

        const oneYearContributionCalendar = thisYearContributions.contributionsCollection.contributionCalendar.weeks.flatMap(
            (contributionCalendarWeek) =>
                contributionCalendarWeek.contributionDays.flat()
        )

        const comittsTimeserieData = oneYearContributionCalendar.map(item => item.contributionCount)
        const comittsTimeserieLabels = oneYearContributionCalendar.map(item => item.date as string)

        return { oneYearContributionCalendar, thisYearContributions, comittsTimeserieData, comittsTimeserieLabels }
    } catch (error) {
        return { oneYearContributionCalendar: {} as ContributionCalendarDay[], thisYearContributions: {} as User}
    }
}
