<template>
  <div class="h-screen w-screen">
    <div class="md:grid grid-cols-5 gap-6 p-6 h-full">
      <Sidebar topTitle="Contributions distribution" bottomTitle="Contributions evolution">
        <template v-slot:top>
          <DoughnutChart :data="contributionsDistribution" id="contributions-distribution"></DoughnutChart>
        </template>
        <template v-slot:bottom>
          <BarChart :data="contributionsEvolution" id="contributions-evolution"></BarChart>
        </template>
      </Sidebar>
      <MainContent>
        <template v-slot:top>
          <Timeserie :data="commitsTimeserie" class="row-span-2 mb-5 md:mb-0"></Timeserie>
        </template>
        <template v-slot:bottom:item-1>
          <BottomAnalysisItemChart title="Total repositories with contributions">
            <DoughnutChart
              :data="totalRepositoriesWithContributions"
              id="all-contributions-distribution"
            ></DoughnutChart>
          </BottomAnalysisItemChart>
        </template>
        <template v-slot:bottom:item-2>
          <BottomAnalysisItemChart title="Created repositories">
            <HorizontalBarChart id="repositories-created" :height="200" :data="repositoriesCreated"></HorizontalBarChart>
          </BottomAnalysisItemChart>
        </template>
        <template v-slot:bottom:item-3>
          <BottomAnalysisItemText :commits="2275">
            <nuxt-link to="/portfolio">
              <button
                class="leading-none border-2 rounded-lg py-2 px-4 mt-10 text-white hover:border-transparent hover:text-blue-900 hover:bg-white"
              >Portfolio</button>
            </nuxt-link>
          </BottomAnalysisItemText>
        </template>
      </MainContent>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

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
    BarChart: () => import('@/components/Charts/Bar.js'),
    HorizontalBarChart: () => import('@/components/Charts/HorizontalBar.js'),
  },
})
export default class IndexPage extends Vue {
  commitsTimeserie = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
      },
    ],
  }
  contributionsEvolution = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        borderColor: '#1d8cf8', // #fd5d93 pink option
        borderWidth: 2,
        label: 'GitHub Commits',
        data: [40, 20, 12, 39],
      },
    ],
  }

  contributionsDistribution = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'GitHub Commits',
        data: [40, 20, 12, 39],
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

  totalRepositoriesWithContributions = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'GitHub Commits',
        data: [40, 20, 12, 39],
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

  repositoriesCreated = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        borderColor: '#fd5d93',
        label: 'GitHub Commits',
        borderWidth: 2,
        data: [40, 20, 12, 39],
        // backgroundColor: ['#e357cd', '#fd5d93', '#cc65fe', '#ffce56'],
      },
    ],
  }
  // async created() {
  //   const res = await this.$axios.$get('https://api.github.com/repos/Draichi/T-1000/issues')
  //   console.info(res)
  // }
}
</script>

<style>
html {
  background: rgb(24, 24, 38);
}

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
