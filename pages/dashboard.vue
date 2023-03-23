<script setup lang="ts">
import Chart from 'chart.js/auto'

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

onMounted(async () => {
  await useFetch('/api/login')

  const { data: userData } = await useFetch('/api/user')

  followers.value = userData.value?.followers || 0
  following.value = userData.value?.following || 0
  repositoriesCreated.value = userData.value?.repositories || 0
  issuesComments.value = userData.value?.issueComments || 0

  const { data: contributionsData } = await useFetch(
    '/api/contributionsCollection'
  )

  issuesOpened.value = contributionsData.value?.issues || 0
  totalCommits.value = contributionsData.value?.commits || 0
  pullRequestsOpened.value = contributionsData.value?.pullRequests || 0
  reviews.value = contributionsData.value?.reviews || 0
  commitsTimeline.value = contributionsData.value?.commitsTimeline || []
  createTimeSeriesChart()
  createLastMonthCommitsChart()

  isLoading.value = false
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
