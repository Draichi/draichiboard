<template>
  <div class="h-screen w-screen">
    <div class="grid grid-cols-5 gap-6 p-6 h-full">
      <div class="card">
        <div class="grid grid-rows-2 h-full">
          <div class="px-10 flex flex-col justify-evenly">
            <h3 class="text-gray-500 text-center">Contributions distribution</h3>
            <DoughnutChart id="contributions-distribution"></DoughnutChart>
          </div>
          <div class="px-10 flex flex-col justify-evenly">
            <h3 class="text-gray-500 text-center">Contributions evolution</h3>
            <BarChart id="contributions-evolution"></BarChart>
          </div>
        </div>
      </div>
      <div class="col-span-4">
        <div class="grid grid-rows-3 grid-flow-col gap-6 h-full max-h-full">
          <Commits></Commits>
          <div>
            <div class="grid grid-cols-3 gap-6 h-full">
              <div class="card flex flex-col justify-evenly items-center max-w-full max-h-full">
                <h3 class="text-gray-500">Contributions evolution</h3>
                  <DoughnutChart id="all-contributions-distribution"></DoughnutChart>
              </div>
              <div class="card flex flex-col justify-evenly items-center max-w-full max-h-full">
                <h3 class="text-gray-500">Contributions evolution</h3>
                <!-- // ! broken when go back -->
                  <HorizontalBarChart id="repositories-created" :height="200"></HorizontalBarChart>
              </div>
              <div class="card flex items-center justify-center flex-col">
                <h3 class="text-gray-500 text-center tracking-wide text-lg">All time commits: <span class="text-white font-bold">2275</span></h3>
                <nuxt-link to="/portfolio">
                  <button class="border-2 rounded-lg py-2 px-4 mt-10 text-gray-500 border-gray-500">Portfolio</button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Commits: () => import('@/components/UI/Commits.vue'),
    DoughnutChart: () => import('@/components/Charts/Doughnut.js'),
    BarChart: () => import('@/components/Charts/Bar.js'),
    HorizontalBarChart: () => import('@/components/Charts/HorizontalBar.js'),
  },
})
export default class IndexPage extends Vue {
  // async created() {
  //   const res = await this.$axios.$get('https://api.github.com/repos/Draichi/T-1000/issues')
  //   console.info(res)
  // }
}
</script>

<style>
html {
  @apply background;
}

.background {
  @apply w-screen h-screen;
  background-image: linear-gradient(rgb(24, 24, 38), rgb(25, 27, 28));
}
.card {
  @apply shadow-md rounded-md;
  background: rgb(31, 33, 49);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
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
  /* max-height: 50%; */
  /* max-height: 50% !important; */
  margin: auto;
  /* width: auto !important;
  max-height: 65% !important;
  height: 65% !important;
  margin: auto; */
}
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
