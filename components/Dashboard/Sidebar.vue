<template>
  <Card class="mb-5 md:mb-0">
    <div class="grid grid-rows-2 h-full">
      <div class="px-10 flex flex-col justify-evenly">
        <h3 class="text-gray-500 text-center text-lg font-sans">
          {{ topTitle }}
        </h3>
        <slot name="top"></slot>
      </div>
      <div class="px-10 flex flex-col justify-evenly">
        <h3 class="text-gray-500 text-center text-lg font-sans">
          {{ bottomTitle }}
        </h3>
        <slot name="bottom"></slot>
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Card: () => import('@/components/UI/Card.vue'),
  },
})
export default class Sidebar extends Vue {
  @Prop(String)
  topTitle!: string
  @Prop(String)
  bottomTitle!: string
}
</script>

<style lang="scss" scoped>
</style>
