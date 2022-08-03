<template>
  <div class="md:col-span-6 md:grid grid-rows-3 grid-flow-col gap-6 h-full max-h-full">
    <slot name="top"></slot>
    <div class="md:grid grid-cols-2 gap-6 h-full">
      <slot name="bottom:item-1"></slot>
      <slot name="bottom:item-2"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class BottomAnalysis extends Vue {}
</script>

<style lang="scss" scoped>
</style>
