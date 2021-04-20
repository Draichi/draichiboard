<template>
  <Card class="analysis-chart-item">
    <h3 class="text-gray-500 font-sans text-lg">{{ title }}</h3>
    <slot></slot>
  </Card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Card: () => import('@/components/UI/Card.vue'),
  },
})
export default class BottomAnalysisItemChart extends Vue {
  @Prop({ default: '' })
  title!: string
}
</script>

<style lang="scss" scoped>
.analysis-chart-item {
  @screen md {
    @apply mb-0;
  }
  @apply flex flex-col justify-evenly items-center max-w-full max-h-full mb-5 py-4;
}
</style>
