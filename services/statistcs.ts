import { Context } from '@nuxt/types'
import { ContributionsCollection, User } from '@/types/graphql-types'
import ContributionCollection from '@/apollo/queries/contributionsCollection.gql'

interface ContributionsCollectionResponse {
    data?: ContributionsCollection
}

export const asyncData = async ({ app, store }: Context) => {
    try {
        const today = new Date()
        let lastYear = new Date()
        lastYear.setFullYear(today.getFullYear() - 1)

        const thisYearContributions = await app.apolloProvider?.defaultClient
            .query({
                query: ContributionCollection,
                variables: {
                    login: 'Draichi',
                    from: lastYear,
                    to: today,
                },
            })
            .then(
                ({ data }: ContributionsCollectionResponse) => data && data.user && data.user.contributionsCollection
            )

        if (!thisYearContributions) {
            return { thisYearContributions }
        }

        console.log(
            '%c thisYearContributions:',
            'color: snow; background: slategray; font-size: 32px; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; padding: 50px'
        )


        const oneYearContributionCalendar = thisYearContributions.contributionCalendar.weeks.flatMap(contributionCalendarWeek => contributionCalendarWeek.contributionDays.flat())
        console.table(thisYearContributions)

        store.commit('statistics/setCommitsTimeserie', oneYearContributionCalendar)

        store.commit('statistics/setConstributionsCollection', {...thisYearContributions, contributionCalendar: false})


        // commitar ao store
        return { oneYearContributionCalendar }
    } catch (error) {
        return { oneYearContributionCalendar: {} as User }
    }
}
