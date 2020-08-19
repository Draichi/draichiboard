<template>
  <div class="row-span-2 card">
    <div style="height: 10%;">
      <h2 class="font-xl text-white p-4">Commits</h2>
    </div>
    <LineChart class="h-auto" style="height: 90%;" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    LineChart: () => import('@/components/Charts/Line.js'),
  },
})
export default class CommitsChart extends Vue {}
</script>

<style lang="scss" scoped>
</style>
