<template>
  <Card class="flex items-center justify-center flex-col mb-5 md:mb-0 py-4 md:py-4">
    <h3 class="text-gray-500 text-center tracking-wide text-lg">
      All time commits:
      <span class="text-white font-bold">{{ commits }}</span>
    </h3>
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
export default class BottomAnalysisItemText extends Vue {
  @Prop({ default: '' })
  commits!: string
}
</script>

<style lang="scss" scoped>
</style>
