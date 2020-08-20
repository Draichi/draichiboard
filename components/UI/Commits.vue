<template>
  <div class="row-span-2 card">
    <div style="height: 10%;">
      <h2 class="font-xl text-white p-4">Commits</h2>
    </div>
    <LineChart :data="data" class="h-auto" style="height: 90%;" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    LineChart: () => import('@/components/Charts/Line.js'),
  },
})
export default class CommitsChart extends Vue {
  data = {
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
}
</script>

<style lang="scss" scoped>
</style>
