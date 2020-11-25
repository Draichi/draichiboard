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
    prReviewsContributions: 0,
    reposCommited: 0,
    reposIssued: 0,
    reposPR: 0,
    reposPRReviews: 0,
    totalCommitContributions: 0,
    totalPullRequestReviewContributions: 0,
    totalRepositoriesWithContributedCommits: 0,
    totalRepositoriesWithContributedIssues: 0,
    tpr: 0,
    tprr: 0,
    commitsTimeseries: []
});

export type StatisticsState = ReturnType<typeof state>;

export const getters: GetterTree<StatisticsState, StatisticsState> = {
    githubData: state => state.githubData,
    issueContributions: state => state.issueContributions,
    PRContributions: state => state.PRContributions,
    commitContributions: state => state.commitContributions,
    prReviewsContributions: state => state.prReviewsContributions,
    reposCommited: state => state.reposCommited,
    reposIssued: state => state.reposIssued,
    reposPR: state => state.reposPR,
    reposPRReviews: state => state.reposPRReviews,
    totalCommitContributions: state => state.totalCommitContributions,
    totalPullRequestReviewContributions: state => state.totalPullRequestReviewContributions,
    totalRepositoriesWithContributedCommits: state => state.totalRepositoriesWithContributedCommits,
    totalRepositoriesWithContributedIssues: state => state.totalRepositoriesWithContributedIssues,
    tpr: state => state.tpr,
    tprr: state => state.tprr,
    commitsTimeseries: state => state.commitsTimeseries,
};

export const mutations: MutationTree<StatisticsState> = {
    ADD_ISSUE_CONTRIBUTIONS: (state: StatisticsState, batch: number) =>
        state.issueContributions += batch,
    ADD_PR_CONTRIBUTIONS: (state: StatisticsState, batch: number) =>
        state.PRContributions += batch,
    ADD_COMMIT_CONTRIBUTIONS: (state: StatisticsState, batch: number) =>
        state.commitContributions += batch,
    ADD_PR_REVIEWS_CONTRIBUTIONS: (state: StatisticsState, batch: number) =>
        state.prReviewsContributions += batch,
    ADD_REPOS_COMMITED: (state: StatisticsState, batch: number) =>
        state.reposCommited += batch,
    ADD_REPOS_ISSUED: (state: StatisticsState, batch: number) =>
        state.reposIssued += batch,
    ADD_REPOS_PR: (state: StatisticsState, batch: number) =>
        state.reposPR += batch,
    ADD_REPOS_PR_REVIEWS: (state: StatisticsState, batch: number) =>
        state.reposPRReviews += batch,
    ADD_COMMITS_TIMESERIES: (state: StatisticsState, data: []) =>
        state.commitsTimeseries = data,
};

const token = ''
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
    async fetchData({ commit }) {
        console.log('fetching...')
        let data = []
        for (let year of years) {
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
        commit('ADD_COMMITS_TIMESERIES', data)
    },
};