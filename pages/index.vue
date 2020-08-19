<template>
  <div class="background">
    <div class="grid grid-cols-5 gap-6 p-6 h-full">
      <div class="card">
        <div class="grid grid-rows-2 h-full">
          <div class="px-10 flex flex-col justify-evenly">
            <h3 class="text-white">Contributions distribution</h3>
            <DoughnutChart></DoughnutChart>
          </div>
          <div>2</div>
        </div>
      </div>
      <div class="col-span-4">
        <div class="grid grid-rows-3 grid-flow-col gap-6 h-full">
          <Commits></Commits>
          <div>
            <div class="grid grid-cols-3 gap-6 h-full">
              <div class="card"></div>
              <div class="card"></div>
              <div class="card"></div>
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
.background {
  @apply w-screen h-screen;
  background-image: linear-gradient(rgb(24, 24, 38), rgb(25, 27, 28));
}
.card {
  @apply shadow-md rounded-md;
  background: rgb(31, 33, 49);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
}
#chart-wrapper > div{
  height: 100% !important;
}
/* #bar-chart {
  height: 100% !important;
} */
#doughnut-chart {
  width: 100% !important;
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
