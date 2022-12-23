<template>
  <div class="h-screen">
    <Spinner v-if="isLoading" />
    <div v-else class="md:grid grid-cols-8 gap-6 p-6 md:pl-0 h-full">
      <Sidebar
        topTitle="Contributions distribution"
        bottomTitle="Contributions evolution"
      >
        <template v-slot:top>
          <DoughnutChart
            :data="contributionsDistribution"
            :options="{
              responsive: true,
              legend: {
                position: 'right',
                labels: {
                  boxWidth: 15,
                },
              },
            }"
            id="contributions-distribution"
          ></DoughnutChart>
        </template>
        <template v-slot:bottom>
          <RadarChart
            :data="totalRepositoriesWithContributions"
            id="contributions-evolution"
          ></RadarChart>
        </template>
      </Sidebar>
      <MainContent>
        <template v-slot:top>
          <Timeserie
            :data="commitsTimeserie"
            class="row-span-2 mb-5 md:mb-0"
          ></Timeserie>
        </template>
        <template v-slot:bottom:item-1>
          <BottomAnalysisItemChart title="Followers">
            <p class="text-xl text-white">
              {{ thisYearContributions.followers.totalCount }}
            </p>
          </BottomAnalysisItemChart>
        </template>
        <template v-slot:bottom:item-2>
          <BottomAnalysisItemChart title="Repos created">
            <p class="text-xl text-white">
              {{
                thisYearContributions.contributionsCollection
                  .totalRepositoryContributions
              }}
            </p>
          </BottomAnalysisItemChart>
        </template>
        <template v-slot:bottom:item-3>
          <BottomAnalysisItemText :commits="13"> </BottomAnalysisItemText>
        </template>
      </MainContent>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import {
  ContributionCalendarDay,
  ContributionsCollection,
  User,
} from '@/types/graphql-types'
import ContributionCollection from '@/apollo/queries/contributionsCollection.gql'
import Spinner from '@/components/UI/Spinner.vue'

interface ContributionsCollectionResponse {
  data?: ContributionsCollection
}

@Component({
  components: {
    Timeserie: () => import('@/components/Dashboard/Timeserie.vue'),
    MainContent: () => import('@/components/Dashboard/MainContent.vue'),
    BottomAnalysisItemChart: () =>
      import('@/components/Dashboard/BottomAnalysisItemChart.vue'),
    BottomAnalysisItemText: () =>
      import('@/components/Dashboard/BottomAnalysisItemText.vue'),
    Sidebar: () => import('@/components/Dashboard/Sidebar.vue'),
    DoughnutChart: () => import('@/components/Charts/Doughnut.js'),
    RadarChart: () => import('@/components/Charts/Radar'),
    BarChart: () => import('@/components/Charts/Bar.js'),
    HorizontalBarChart: () => import('@/components/Charts/HorizontalBar.js'),
    Spinner,
  },
})
export default class IndexPage extends Vue {
  oneYearContributionCalendar: ContributionCalendarDay[] = [] as ContributionCalendarDay[]
  thisYearContributions: User = {} as User
  comittsTimeserieData: number[] = []
  comittsTimeserieLabels: string[] = []
  isLoading: boolean = true

  async created() {
    try {
      const today = new Date()
      let lastWeek = new Date()
      lastWeek.setDate(today.getDate() - 7)

      const thisYearContributions = await this.$apolloProvider?.defaultClient
        .query({
          query: ContributionCollection,
          variables: {
            login: 'Draichi',
            from: lastWeek,
            to: today,
          },
        })
        .then(({ data }: ContributionsCollectionResponse) => data && data.user)

      if (!thisYearContributions) {
        return { thisYearContributions }
      }

      const oneYearContributionCalendar = thisYearContributions.contributionsCollection.contributionCalendar.weeks.flatMap(
        (contributionCalendarWeek) =>
          contributionCalendarWeek.contributionDays.flat()
      )

      const comittsTimeserieData = oneYearContributionCalendar.map(
        (item) => item.contributionCount
      )
      const comittsTimeserieLabels = oneYearContributionCalendar.map(
        (item) => item.date as string
      )

      this.oneYearContributionCalendar = oneYearContributionCalendar
      this.thisYearContributions = thisYearContributions
      this.comittsTimeserieData = comittsTimeserieData
      this.comittsTimeserieLabels = comittsTimeserieLabels
      this.isLoading = false
    } catch (error) {
      this.oneYearContributionCalendar = {} as ContributionCalendarDay[]
      this.thisYearContributions = {} as User
      this.isLoading = false
    }
  }
  get commitsTimeserie() {
    return {
      labels: this.comittsTimeserieLabels,
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: this.comittsTimeserieData,
        },
      ],
    }
  }
  get contributionsDistributionsData() {
    return [
      this.thisYearContributions.contributionsCollection
        .totalIssueContributions || 0,
      this.thisYearContributions.contributionsCollection
        .totalPullRequestContributions || 0,
      this.thisYearContributions.contributionsCollection
        .totalPullRequestReviewContributions || 0,
    ]
  }
  get contributionsDistribution() {
    return {
      labels: ['Issues', 'PRs', 'Reviews'],
      datasets: [
        {
          borderColor: ['#fd5d93', '#36a2eb', '#cc65fe', '#ffce56'], // #fd5d93 pink option
          backgroundColor: [
            'rgba(253, 93, 147,0.1)',
            'rgba(54, 162, 235, 0.1)',
            'rgba(204, 101, 254, 0.1)',
            'rgba(255, 206, 86, 0.1)',
          ],
          borderWidth: 2,
          label: 'GitHub Commits',
          data: this.contributionsDistributionsData,
        },
      ],
    }
  }

  get totalReposData() {
    return [
      this.thisYearContributions.contributionsCollection
        .totalRepositoriesWithContributedCommits || 0,
      this.thisYearContributions.contributionsCollection
        .totalRepositoriesWithContributedPullRequests || 0,
      this.thisYearContributions.contributionsCollection
        .totalRepositoriesWithContributedIssues || 0,
      this.thisYearContributions.contributionsCollection
        .totalRepositoriesWithContributedPullRequestReviews || 0,
    ]
  }

  get totalRepositoriesWithContributions() {
    return {
      labels: ['Commits', 'PRs', 'Issues', 'Reviews'],
      datasets: [
        {
          label: 'Repositories with contributions',
          data: this.totalReposData,
          borderColor: '#fd5d93',
          borderWidth: 2,
          backgroundColor: 'rgba(253, 93, 147,0.1)',
        },
      ],
    }
  }
}
</script>

<style>
#contributions-evolution > #radar-chart {
  width: 100% !important;
}
#contributions-distribution > #doughnut-chart {
  width: 100% !important;
}
#all-contributions-distribution > #doughnut-chart {
  width: 50% !important;
  height: auto !important;
  margin: auto;
}
#repositories-created > #horizontalbar-chart {
  max-width: 100% !important;
  max-height: 100% !important;
  margin: auto;
}
</style>
