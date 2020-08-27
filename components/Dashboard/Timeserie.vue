<template>
  <Card>
    <div style="height: 10%;">
      <h3 class="font-xl text-gray-500 p-4">Commits</h3>
    </div>
    <LineChart :data="data" class="h-auto" style="height: 90%;" />
  </Card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Card: () => import('@/components/UI/Card.vue'),
    LineChart: () => import('@/components/Charts/Line.js'),
  },
})
export default class Timeserie extends Vue {
  @Prop({ default: null })
  data!: object | null;
}
</script>

<style lang="scss" scoped>
</style>
