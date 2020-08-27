<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
.card {
  @apply shadow-md rounded-md;
  background: rgb(31, 33, 49);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
}
</style>
