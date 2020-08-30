<template>
  <SlideShow
    v-if="showSlideShow"
    :projectDetails="slideShowDetails"
    @close-button:click="closeSlideShow"
  ></SlideShow>
  <div v-else>
    <nav class="flex items-center justify-between flex-wrap p-6">
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
      <ProjectListCard
        v-for="(project, index) in projects"
        :key="`project-${index}`"
        :project="project"
        @click="openSlideShow(project)"
      ></ProjectListCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ProjectInterface } from '@/types'

@Component({
  components: {
    ProjectListCard: () => import('@/components/Portfolio/ProjectListCard.vue'),
    SlideShow: () => import('@/components/Portfolio/SlideShow.vue'),
  },
})
export default class PortfolioPage extends Vue {
  showSlideShow = false
  slideShowDetails: ProjectInterface | null = null
  get projects() {
    return [
      {
        entity: {
          name: 'Flux recruitment dashboard web app',
          description: 'Flux its a...',
          technologies: ['Nuxt.js', 'Vue.js'],
          cover: 'beta.talentify.io_client_v2_dashboard(fullhd).png',
          screenshots: [
            'beta.talentify.io_client_v2_dashboard(fullhd).png',
            'beta.talentify.io_client_v2_organic-marketing(fullhd).png',
            'beta.talentify.io_client_v2_mobile_converter(fullhd).png',
            'beta.talentify.io_client_v2_ats_job_feed(fullhd).png',
            'beta.talentify.io_client_v2_ats-connections(fullhd).png',
          ],
        },
        company: {
          name: 'Talentify',
          logo: '/path',
          site: 'https://',
        },
      },
    ]
  }

  openSlideShow(project: ProjectInterface) {
    this.showSlideShow = true
    this.slideShowDetails = project
  }
  closeSlideShow() {
    this.showSlideShow = false
    this.slideShowDetails = null
  }
}
</script>

<style lang="scss" scoped>
nav {
  background: rgb(31, 33, 49);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
}
</style>
