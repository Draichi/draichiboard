import { ActionTree, MutationTree, GetterTree, Commit } from 'vuex';

const today = new Date().toISOString();

interface Year {
    from: string;
    to: string;
    label: string;
}

interface APIResponse {
    totalIssueContributions: number,
    totalPullRequestContributions: number,
    totalCommitContributions: number,
    totalPullRequestReviewContributions: number,
    totalRepositoriesWithContributedCommits: number,
    totalRepositoriesWithContributedIssues: number,
    totalRepositoriesWithContributedPullRequests: number,
    totalRepositoriesWithContributedPullRequestReviews: number,
    totalRepositoryContributions: number,
    contributionCalendar: {
        totalContributions: number,
        weeks: Array<{
            contributionDays: Array<{
                contributionCount: number,
                date: string
            }>
        }>
    }
}

const years: Year[] = [
    {
        from: '2020-01-01T00:00:00',
        to: today,
        label: '20',
    },
    {
        from: '2019-01-01T00:00:00',
        to: '2019-12-01T00:00:00',
        label: '19',
    },
    {
        from: '2018-01-01T00:00:00',
        to: '2018-12-01T00:00:00',
        label: '18',
    },
    {
        from: '2017-11-01T00:00:00',
        to: '2017-12-01T00:00:00',
        label: '17',
    },
]

const getContributions = async (commit: Commit, token: string, username: string, year: Year): Promise<APIResponse> => {
    const headers = {
        Authorization: `bearer ${token}`,
    };
    const body = {
        // https://developer.github.com/v4/object/contributionscollection/
        query: `query {
            user(login: "${username}") {
              contributionsCollection(from: "${year.from}", to: "${year.to}") {
                totalCommitContributions
                totalIssueContributions
                totalPullRequestContributions
                totalPullRequestReviewContributions
                totalRepositoriesWithContributedCommits
                totalRepositoriesWithContributedIssues
                totalRepositoriesWithContributedPullRequests
                totalRepositoriesWithContributedPullRequestReviews
                totalRepositoryContributions
                contributionCalendar {
                  totalContributions
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
    };
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify(body),
        headers,
    });

    const jsonResonseData = await response.json();

    const {
        totalIssueContributions,
        totalPullRequestContributions,
        totalCommitContributions,
        totalPullRequestReviewContributions,
        totalRepositoriesWithContributedCommits,
        totalRepositoriesWithContributedIssues,
        totalRepositoriesWithContributedPullRequests,
        totalRepositoriesWithContributedPullRequestReviews,
        totalRepositoryContributions,
        contributionCalendar,
    } = jsonResonseData.data.user.contributionsCollection;

    return {
        totalIssueContributions,
        totalPullRequestContributions,
        totalCommitContributions,
        totalPullRequestReviewContributions,
        totalRepositoriesWithContributedCommits,
        totalRepositoriesWithContributedIssues,
        totalRepositoriesWithContributedPullRequests,
        totalRepositoriesWithContributedPullRequestReviews,
        totalRepositoryContributions,
        contributionCalendar,
    }
}

export const state = () => ({
    githubData: {},
    issueContributions: 0,
    PRContributions: 0,
    commitContributions: 0,
    totalCommitContributions: 0,
    totalPullRequestReviewContributions: 0,
    totalRepositoriesWithContributedCommits: 0,
    totalRepositoriesWithContributedIssues: 0,
    tpr: 0,
    tprr: 0,
});

export type StatisticsState = ReturnType<typeof state>;

export const getters: GetterTree<StatisticsState, StatisticsState> = {
    githubData: state => state.githubData,
};

export const mutations: MutationTree<StatisticsState> = {
    ADD_ISSUE_CONTRIBUTIONS: (state: StatisticsState, batch: number) =>
        state.issueContributions += batch,
    ADD_PR_CONTRIBUTIONS: (state: StatisticsState, batch: number) =>
        state.PRContributions += batch,
    ADD_COMMIT_CONTRIBUTIONS: (state: StatisticsState, batch: number) =>
        state.commitContributions += batch,
};

const token = 'ac8e71289e4db8e494521eda7bc5f91e6455dfac'
const githubProfileName = 'Draichi'

const getWeeklyContributions = (week: any) => {
    const weekContributionsArray = week.contributionDays.reduce(
      (acc: any, val: any) => acc.concat(val.contributionCount),
      [],
    );
    const weekContributions = weekContributionsArray.reduce((a: any, b: any) => a + b, 0);
    return weekContributions;
  };
  const monthNames = [
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
  ];
  const getContributionsByMonth: any = (array: any, size: any) =>{
    if (array.length <= size) {
      return [array];
    }
    return [
      array.slice(0, size),
      ...getContributionsByMonth(array.slice(size), size),
    ];
  };

const sanitazeData = (contributionCalendarWeeks: any) => {
    const weeklyContributions = contributionCalendarWeeks
      .map(getWeeklyContributions)
      .flat();
    const montlyContributionsArray = getContributionsByMonth(
      weeklyContributions,
      4,
    );
    const montlyContributions = montlyContributionsArray.map((item: any) => item.reduce((a: any, b: any) => a + b));
    return montlyContributions;
  };
  const sanitazeLabels = (contributionCalendarWeeks: any, yearLabel: any) => {
    const weeklyContributions = contributionCalendarWeeks
      .map((item: any) => {
        const { length } = item.contributionDays;
        const { date } = item.contributionDays[length - 1];
        const monthNumber = new Date(date).getMonth();
        const formatedDate = `${monthNames[monthNumber]} ${yearLabel}`;
        return formatedDate;
      })
      .flat();
    const montlyContributionsArray = getContributionsByMonth(
      weeklyContributions,
      4,
    );
    const montlyContributions = montlyContributionsArray.map(
      (item: any) => item[item.length - 1],
    );
    return montlyContributions;
  };

export const actions: ActionTree<StatisticsState, StatisticsState> = {
    // & fetch data for years 2017-2020
    // sanitize data in each fetch and save it on variable
    // return data ready for display on chart
    async fetchData({ commit }) {
        console.log('fetching...')
        let data = []
        for (let year of years) {
            // let sanitazedData = await getContributions(commit, token, githubProfileName, year)
            const {
                totalIssueContributions,
                totalPullRequestContributions,
                totalCommitContributions,
                totalPullRequestReviewContributions,
                totalRepositoriesWithContributedCommits,
                totalRepositoriesWithContributedIssues,
                totalRepositoriesWithContributedPullRequests,
                totalRepositoriesWithContributedPullRequestReviews,
                totalRepositoryContributions,
                contributionCalendar,
            } = await getContributions(commit, token, githubProfileName, year);
            const contributionCalendarWeeks = contributionCalendar.weeks;
            commit('ADD_ISSUE_CONTRIBUTIONS', totalIssueContributions)
            commit('ADD_PR_CONTRIBUTIONS', totalPullRequestContributions)
            // 
            commit('ADD_COMMIT_CONTRIBUTIONS', totalCommitContributions)
            commit('ADD_PR_REVIEWS_CONTRIBUTIONS', totalPullRequestReviewContributions)
            commit('ADD_REPOS_COMMITED', totalRepositoriesWithContributedCommits)
            commit('ADD_REPOS_ISSUED', totalRepositoriesWithContributedIssues)
            commit('ADD_REPOS_PR', totalRepositoriesWithContributedPullRequests)
            commit('ADD_REPOS_PR_REVIEWS', totalRepositoriesWithContributedPullRequestReviews)
            const sanitazedData = {
                data: await sanitazeData(contributionCalendarWeeks),
                label: await sanitazeLabels(contributionCalendarWeeks, year.label),
                totalIssueContributions,
                totalCommitContributions,
                totalPullRequestContributions,
                totalPullRequestReviewContributions,
                totalRepositoriesWithContributedCommits,
                totalRepositoriesWithContributedIssues,
                totalRepositoryContributions,
            }
            data.push(sanitazedData)
        }
        console.log(data)
        // console.log({
        //     totalIssueContributions,
        //     totalPullRequestContributions,
        //     totalCommitContributions,
        //     totalPullRequestReviewContributions,
        //     totalRepositoriesWithContributedCommits,
        //     totalRepositoriesWithContributedIssues,
        //     totalRepositoriesWithContributedPullRequests,
        //     totalRepositoriesWithContributedPullRequestReviews,
        //     totalRepositoryContributions,
        //     contributionCalendar
        // })

        // this.totalIssueContributions += totalIssueContributions;
        // this.totalPullRequestContributions += totalPullRequestContributions;
        // this.totalCommitContributions += totalCommitContributions;
        // this.totalPullRequestReviewContributions += totalPullRequestReviewContributions;
        // this.totalRepositoriesWithContributedCommits += totalRepositoriesWithContributedCommits;
        // this.totalRepositoriesWithContributedIssues += totalRepositoriesWithContributedIssues;
        // this.tpr += totalRepositoriesWithContributedPullRequests;
        // this.tprr += totalRepositoriesWithContributedPullRequestReviews;


        

    },
};