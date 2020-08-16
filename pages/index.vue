<template>
  <div class="w-screen h-screen bg-blue-600">
    <div class="grid grid-cols-5 gap-4 p-4 h-full">
      <div class="bg-white"></div>
      <div class="col-span-4">
        <div class="grid grid-rows-3 grid-flow-col gap-4 h-full">
          <div class="row-span-2 bg-white">
            <div id="chart-wrapper" class="h-full relative">
              <LineChart/>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-3 gap-4 h-full">
              <div class="bg-white"></div>
              <div class="bg-white"></div>
              <div class="bg-white"></div>
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
    LineChart: () => import('@/components/Charts/Line.js'),
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
#chart-wrapper > div{
  height: 100% !important;
}
#bar-chart {
  height: 100% !important;
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
