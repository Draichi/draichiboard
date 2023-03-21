<script setup lang="ts">
import Chart from 'chart.js/auto'
import { Query } from 'types/graphql-types'
import contributionsCollectionQuery from '@/services/apollo/queries/contributionsCollection.gql'
import loginQuery from '@/services/apollo/queries/query.gql'

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

interface TimelineCommit {
  contributionCount: number
  date: string
}

const followers = ref(0)

const following = ref(0)

const repositoriesCreated = ref(0)

const issuesOpened = ref(0)

const issuesComments = ref(0)

const pullRequestsOpened = ref(0)

const reviews = ref(0)

const totalCommits = ref(0)

const isLoading = ref(true)

const commitsTimeline = ref<TimelineCommit[]>([] as TimelineCommit[])

async function fetchCommitsTimeSeries(): Promise<{
  commitsTimeline: TimelineCommit[]
  totalCommitContributions: number
  totalIssuesContributions: number
  totalPullRequestContributions: number
  totalPullRequestReviewContributions: number
  followersData: number
  repositoriesCreatedData: number
  followingData: number
  issuesCommentsData: number
}> {
  await useAsyncQuery<Query>(loginQuery)

  const years = [17, 18, 19, 20, 21, 22, 23]

  const from = new Date()

  from.setDate(1)
  from.setMonth(0)

  const commitsTimeline: TimelineCommit[] = []

  let totalCommitContributions = 0
  let totalIssuesContributions = 0
  let totalPullRequestContributions = 0
  let totalPullRequestReviewContributions = 0
  let followersData = 0
  let repositoriesCreatedData = 0
  let followingData = 0
  let issuesCommentsData = 0

  for (const year of years) {
    // create `tempCommits` array
    let tempCommitsTimeline: TimelineCommit[] = []
    const to = new Date()

    if (to.getFullYear() === +`20${year}`) {
      const actualMonth = to.getMonth()
      const monthsList = Object.values(Month).filter((v) => isNaN(Number(v)))

      for (const month in monthsList) {
        if (+month <= actualMonth) {
          tempCommitsTimeline.push({
            date: monthsList[month] as string,
            contributionCount: 0,
          })
        }
      }
    } else {
      tempCommitsTimeline = [
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

    from.setFullYear(+`20${year}`)

    if (to.getFullYear() !== +`20${year}`) {
      to.setDate(31)
      to.setMonth(11)
    }

    to.setFullYear(+`20${year}`)

    const { data, error } = await useAsyncQuery<Query>(
      contributionsCollectionQuery,
      {
        login: 'Draichi',
        from,
        to,
      }
    )

    if (error.value) {
      console.error(error.value)

      return {
        commitsTimeline: [],
        totalCommitContributions: 0,
        totalIssuesContributions: 0,
        totalPullRequestContributions: 0,
        totalPullRequestReviewContributions: 0,
        followersData: 0,
        repositoriesCreatedData: 0,
        followingData: 0,
        issuesCommentsData: 0,
      }
    }

    // save the data in the temporary commits array
    const tempCommits: TimelineCommit[] = []

    // user related data
    followersData = data.value?.user?.followers?.totalCount || 0
    repositoriesCreatedData = data.value?.user?.repositories?.totalCount || 0
    followingData = data.value?.user?.following.totalCount || 0
    issuesCommentsData = data.value?.user?.issueComments.totalCount || 0

    const commitContributions =
      data.value?.user?.contributionsCollection?.totalCommitContributions
    const issuesCotributions =
      data.value?.user?.contributionsCollection?.totalIssueContributions
    const pullRequestsOpened =
      data.value?.user?.contributionsCollection?.totalPullRequestContributions
    const reviews =
      data.value?.user?.contributionsCollection
        ?.totalPullRequestReviewContributions

    if (commitContributions) {
      totalCommitContributions += commitContributions
    }
    if (issuesCotributions) {
      totalIssuesContributions += issuesCotributions
    }
    if (pullRequestsOpened) {
      totalPullRequestContributions += pullRequestsOpened
    }
    if (reviews) {
      totalPullRequestReviewContributions += reviews
    }

    data.value?.user?.contributionsCollection.contributionCalendar.weeks
      .flatMap((week) => {
        return week.contributionDays
      })
      .flatMap((contributionDay) => {
        tempCommits.push(contributionDay)
      })

    // organize the data in months
    tempCommits.forEach(({ date, contributionCount }) => {
      const monthNumber = new Date(date).getMonth()
      const monthName = Month[monthNumber]

      const index = tempCommitsTimeline.findIndex(
        (month) => month.date == monthName
      )

      if (tempCommitsTimeline[index]) {
        tempCommitsTimeline[index].contributionCount += contributionCount
      }
    })

    // save the current year in the `date` key
    tempCommitsTimeline.forEach(
      (month) => (month.date = `${month.date} ${year}`)
    )

    commitsTimeline.push(...tempCommitsTimeline)
  }

  return {
    commitsTimeline,
    totalCommitContributions,
    totalIssuesContributions,
    totalPullRequestContributions,
    totalPullRequestReviewContributions,
    followersData,
    repositoriesCreatedData,
    followingData,
    issuesCommentsData,
  }
}

onMounted(async () => {
  const response = await fetchCommitsTimeSeries()

  commitsTimeline.value = response.commitsTimeline
  totalCommits.value = response.totalCommitContributions
  issuesOpened.value = response.totalIssuesContributions
  pullRequestsOpened.value = response.totalPullRequestContributions
  reviews.value = response.totalPullRequestReviewContributions
  followers.value = response.followersData
  repositoriesCreated.value = response.repositoriesCreatedData
  following.value = response.followingData
  issuesComments.value = response.issuesCommentsData

  createTimeSeriesChart()

  isLoading.value = false
})

function createTimeSeriesChart() {
  const canvas = document.getElementById(
    'commits-time-series'
  ) as HTMLCanvasElement

  const context = canvas.getContext('2d')

  const height = canvas.height

  const gradient = context?.createLinearGradient(0, 0, 0, height)

  gradient?.addColorStop(0, 'rgba(79, 209, 197, 0.24)')
  gradient?.addColorStop(1, 'rgba(79, 209, 197, 0)')

  new Chart(canvas, {
    type: 'line',
    data: {
      labels: commitsTimeline.value.map(
        (row) => `In ${row.date} there was ${row.contributionCount} commits`
      ),
      datasets: [
        {
          data: commitsTimeline.value.map((row) => row.contributionCount),
          backgroundColor: gradient,
          fill: true,
          tension: 0.5,
          borderColor: '#42b883',
          borderWidth: 2.5,
          borderDash: [],
          borderDashOffset: 0,
          pointBackgroundColor: '#42b883',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 2.5 / 2,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          intersect: false,
          titleAlign: 'center',
          titleSpacing: 3,
          callbacks: {
            label: () => '',
          },
        },
      },

      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  })
}

function createLastMonthCommitsChart() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 40 },
    { year: 2015, count: 30 },
    { year: 2015, count: 14 },
    { year: 2015, count: 35 },
    { year: 2015, count: 38 },
    { year: 2015, count: 4 },
    { year: 2016, count: 9 },
    { year: 2017, count: 3 },
    { year: 2018, count: 28 },
  ]

  const canvas = document.getElementById(
    'last-month-commits'
  ) as HTMLCanvasElement

  const context = canvas.getContext('2d')

  const gradient = context?.createLinearGradient(0, 0, 100, 0)

  gradient?.addColorStop(0, 'rgba(253, 93, 147, 1)')
  gradient?.addColorStop(0.5, 'rgba(204, 101, 254, 1)')
  gradient?.addColorStop(1, 'rgba(79, 209, 197, 1)')

  new Chart(canvas, {
    type: 'line',
    data: {
      labels: data.map(
        (row) => `In ${row.year} there was ${row.count} commits`
      ),
      datasets: [
        {
          data: data.map((row) => row.count),
          // backgroundColor: 'transparent',
          fill: false,
          tension: 0.5,
          borderColor: gradient,
          borderWidth: 1.5,
          borderDash: [],
          borderDashOffset: 0,
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 1.5 / 2,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {},
      },

      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  })
}

onMounted(() => {
  // createTimeSeriesChart()
  createLastMonthCommitsChart()
})
</script>

<template>
  <main :class="$style.main">
    <section>
      <div :class="$style.container">
        <canvas id="commits-time-series" :class="$style.canvas"></canvas>
      </div>
      <h1 :class="$style.title">draichiboard</h1>
    </section>
    <section :class="$style['cards-container']">
      <CardStats
        background-color="#242B32"
        text-color="#C7D0D6"
        title="Last month contributions"
        :value="109"
      >
        <template #graph>
          <canvas
            id="last-month-commits"
            :class="$style['last-month-commits']"
          ></canvas>
        </template>
      </CardStats>
      <CardStats
        background-color="#C7D0D6"
        text-color="#242B32"
        title="Issue comments"
        :value="issuesComments"
      />
      <CardStats
        background-color="#CC65FE"
        text-color="#230830"
        title="Repositories created"
        :value="repositoriesCreated"
      />

      <CardStats
        background-color="#36A2EB"
        text-color="#041B2A"
        title="Opened issues"
        :value="issuesOpened"
      />
      <CardStats
        background-color="#5AE389"
        text-color="#243229"
        title="Following"
        :value="following"
      />
      <CardStats
        background-color="#FFCE56"
        text-color="#302408"
        title="Opened pull requests"
        :value="pullRequestsOpened"
      />

      <CardStats
        background-color="#FD5D93"
        text-color="#250912"
        title="Reviews"
        :value="reviews"
      />
      <CardStats
        background-color="#4FD1C5"
        text-color="#243231"
        title="Commits"
        :value="totalCommits"
      />
      <CardStats
        background-color="#242B32"
        text-color="#C7D0D6"
        title="Followers"
        :value="followers"
      />
    </section>
  </main>
  <Navbar />
</template>

<style module>
.main {
  background: #0b0f0f;
  background: radial-gradient(
    88.21% 14.29% at 9.87% 31.58%,
    #172625 0%,
    #0b0f0f 100%
  );
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
}
.container {
  height: 170px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.canvas {
  position: absolute;
  top: 0;
  left: -25px;
  right: -25px;
  width: calc(100% + 50px) !important;
}

.last-month-commits {
  width: calc(100% + 70px) !important;
  left: -35px;
  right: -35px;
  position: absolute;
  height: 130px !important;
  top: -43px;
}

.title {
  text-align: center;
  font-size: 4rem;
  line-height: 4.8rem;
  font-weight: 400;
  font-family: 'Lacquer', fantasy;
  letter-spacing: -0.11em;
  color: #4fd1c5;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
  margin: 46px 4px 4px 4px;
}
</style>
