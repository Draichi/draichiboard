<template>
  <div class="flex flex-col h-full w-full justify-center items-center">
    <div class="animate-bounce ease-in-out transition">
      <div
        class="loader ease-linear rounded-full border-8 border-t-8 h-12 w-12"
      ></div>
    </div>
    <div>
      <h4 class="subtitle font-sans mt-5 text-xl">
        Doing some magic, please wait
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

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

.subtitle {
  color: #35495e;
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