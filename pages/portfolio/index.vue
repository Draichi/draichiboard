<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Portfolio</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div>
          <nuxt-link to="/">
            <button
              class="leading-none border-2 rounded-lg py-2 px-4 text-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >Draichiboard</button>
          </nuxt-link>
        </div>
      </div>
    </nav>
    <div class="flex flex-wrap">
      <ProjectListCard></ProjectListCard>
      <ProjectListCard></ProjectListCard>
      <ProjectListCard></ProjectListCard>
      <ProjectListCard></ProjectListCard>
      <ProjectListCard></ProjectListCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    ProjectListCard: () => import('@/components/Portfolio/ProjectListCard.vue'),
  },
})
export default class PortfolioPage extends Vue {}
</script>

<style lang="scss" scoped>
</style>
