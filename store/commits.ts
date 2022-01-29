import { ActionTree, MutationTree, GetterTree, Commit } from 'vuex'

interface DayContributionData {
    contributionCount: number;
    date: string;
}

interface WeekContributionData {
    contributionDays: DayContributionData[]
}

const body = {
  query: `query {
        user(login: "Draichi") {
            contributionsCollection(from: "2022-01-01T00:00:00", to: "2022-01-07T00:00:00") {
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
    }`,
}

const headers = {
  Authorization: 'bearer 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',
}

export const state = () => ({
  contributions: [] as (number[] | string[])[],
})

export type CommitsState = ReturnType<typeof state>

export const getters: GetterTree<CommitsState, CommitsState> = {
  contributions: (state) => state.contributions,
}

export const mutations: MutationTree<CommitsState> = {
  SET_CONTRIBUTIONS: (state: CommitsState, payload: (number[] | string[])[]) => {
    state.contributions = payload
  },
}

export const actions: ActionTree<CommitsState, CommitsState> = {
  async fetchCommits({ commit }) {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    })

    const jsonResonseData = await response.json()
    const weeks: WeekContributionData[] = jsonResonseData.data.user.contributionsCollection.contributionCalendar.weeks
    const commits: number[] = []
    const dates: string[] = []
    const contributionDaysPerWeek = weeks.map((weekData) => weekData.contributionDays)
    contributionDaysPerWeek.map((week) => {
        week.forEach((day) => {
            commits.push(day.contributionCount)
            dates.push(day.date)
            return
        })
    })
    commit('SET_CONTRIBUTIONS', [
      commits,
      dates,
    ])
  },
}
