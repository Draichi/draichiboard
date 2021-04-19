<template>
  <div
    class="loader ease-linear rounded-full border-8 border-t-8 h-12 w-12"
  ></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Spinner extends Vue {}
</script>

<style lang="scss" scoped>
.loader {
  border-color: #35495e;
  border-top-color: rgb(31, 33, 49);
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>