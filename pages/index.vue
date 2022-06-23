<template>
  <div class="h-screen">
    <div class="md:grid grid-cols-5 gap-6 p-6 md:pl-0 h-full" v-if="!isLoading">
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
          <BarChart
            :data="contributionsEvolution"
            id="contributions-evolution"
          ></BarChart>
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
          <BottomAnalysisItemChart
            title="Total repositories with contributions"
          >
            <DoughnutChart
              :data="totalRepositoriesWithContributions"
              :options="{
                responsive: true,
                legend: {
                  position: 'right',
                  labels: {
                    boxWidth: 20,
                    fontSize: 30,
                  },
                },
                tooltips: {
                  bodyFontSize: 24,
                },
              }"
              id="all-contributions-distribution"
            ></DoughnutChart>
          </BottomAnalysisItemChart>
        </template>
        <template v-slot:bottom:item-2>
          <BottomAnalysisItemChart title="Created repositories">
            <HorizontalBarChart
              id="repositories-created"
              :height="200"
              :data="repositoriesCreated"
            ></HorizontalBarChart>
          </BottomAnalysisItemChart>
        </template>
        <template v-slot:bottom:item-3>
          <BottomAnalysisItemText :commits="totalContributions">
          </BottomAnalysisItemText>
        </template>
      </MainContent>
    </div>
    <Spinner v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { asyncData } from '@/services/statistcs'
import { User, ContributionCalendarDay } from '~/types/graphql-types'

@Component({
  components: {
    Spinner: () => import('@/components/UI/Spinner.vue'),
    Timeserie: () => import('@/components/Dashboard/Timeserie.vue'),
    MainContent: () => import('@/components/Dashboard/MainContent.vue'),
    BottomAnalysisItemChart: () =>
      import('@/components/Dashboard/BottomAnalysisItemChart.vue'),
    BottomAnalysisItemText: () =>
      import('@/components/Dashboard/BottomAnalysisItemText.vue'),
    Sidebar: () => import('@/components/Dashboard/Sidebar.vue'),
    DoughnutChart: () => import('@/components/Charts/Doughnut.js'),
    BarChart: () => import('@/components/Charts/Bar.js'),
    HorizontalBarChart: () => import('@/components/Charts/HorizontalBar.js'),
  },
  asyncData,
})
export default class IndexPage extends Vue {
  oneYearContributionCalendar: ContributionCalendarDay[] = [] as ContributionCalendarDay[];
  thisYearContributions: User = {} as User;
  comittsTimeserieData: number[] = []
  comittsTimeserieLabels: string[] = []
  created() {
    this.$store.dispatch('statistics/fetchData')
    this.$store.dispatch('commits/fetchCommits')
  }
  get getCommitsTimeserie() {
    const data = this.$store.getters['statistics/commitsTimeseries']
    return data
  }
  get commitsTimeserieLabels() {
    const data = this.getCommitsTimeserie
    if (data) {
      let labels: string[] = []
      data.forEach((item: any) => {
        labels.unshift(...item.label)
      })
      return labels
    }
    return data
  }
  get commitsTimeserieData() {
    const data = this.getCommitsTimeserie
    if (data) {
      let commitsData: number[] = []
      data.forEach((item: any) => {
        commitsData.unshift(...item.data)
      })
      return commitsData
    }
    return data
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
  get isLoading(): boolean {
    return this.$store.getters['statistics/loading']
  }
  get contributionsDistributionsData() {
    return [
      this.thisYearContributions.contributionsCollection.totalIssueContributions || 0,
      this.thisYearContributions.contributionsCollection.totalPullRequestContributions || 0,
      this.thisYearContributions.contributionsCollection.totalPullRequestReviewContributions || 0,
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

  get totalContributions(): number {
    return this.$store.getters['statistics/totalContributions']
  }

  get totalContributionsByYear(): {
    totalContributions: number
    yearLabel: string
  }[] {
    return this.$store.getters['statistics/totalContributionsByYear']
  }

  get contributionsEvolution() {
    return {
      labels: this.totalContributionsByYear
        .map((item) => `20${item.yearLabel}`)
        .reverse(),
      datasets: [
        {
          label: 'Total Contributions',
          data: this.totalContributionsByYear
            .map((item) => item.totalContributions)
            .reverse(),
          borderColor: ['#fd5d93', '#36a2eb', '#cc65fe', '#ffce56', '#42b883'], // #fd5d93 pink option
          borderWidth: 2,
          backgroundColor: [
            'rgba(253, 93, 147,0.1)',
            'rgba(54, 162, 235, 0.1)',
            'rgba(204, 101, 254, 0.1)',
            'rgba(255, 206, 86, 0.1)',
            'rgba(76, 211, 150, 0.3)',
          ],
        },
      ],
    }
  }

  get totalReposData() {
    return [
      this.thisYearContributions.contributionsCollection.totalRepositoriesWithContributedCommits || 0,
      this.thisYearContributions.contributionsCollection.totalRepositoriesWithContributedIssues || 0,
      this.thisYearContributions.contributionsCollection.totalRepositoriesWithContributedPullRequests || 0,
      this.thisYearContributions.contributionsCollection.totalRepositoriesWithContributedPullRequestReviews || 0,

    ]
  }

  get totalRepositoriesWithContributions() {
    return {
      labels: ['Commits', 'Issues', 'PRs', 'Reviews'],
      datasets: [
        {
          label: 'GitHub Commits',
          data: this.totalReposData,
          borderColor: ['#fd5d93', '#36a2eb', '#cc65fe', '#ffce56'], // #fd5d93 pink option
          borderWidth: 2,
          backgroundColor: [
            'rgba(253, 93, 147,0.1)',
            'rgba(54, 162, 235, 0.1)',
            'rgba(204, 101, 254, 0.1)',
            'rgba(255, 206, 86, 0.1)',
          ],
        },
      ],
    }
  }

  get createdReposByYear(): {
    reposCreated: number
    yearLabel: string
  }[] {
    return this.$store.getters['statistics/createdReposByYear']
  }

  get repositoriesCreated() {
    return {
      labels: this.createdReposByYear
        .map((item) => `20${item.yearLabel}`)
        .reverse(),
      datasets: [
        {
          borderColor: '#fd5d93',
          label: 'Created Repos',
          borderWidth: 2,
          data: this.createdReposByYear
            .map((item) => item.reposCreated)
            .reverse(),
        },
      ],
    }
  }
}
</script>

<style>
#contributions-evolution > #bar-chart {
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
