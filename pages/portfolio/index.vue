<template>
  <div class="background">
    <nuxt-link to="/">
      <button class="border-2 rounded-lg py-2 px-4 mt-10 text-gray-500 border-gray-500">Draichiboard</button>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class PortfolioPage extends Vue {}
</script>

<style lang="scss" scoped>
</style>
