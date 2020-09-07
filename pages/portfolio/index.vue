<template>
  <SlideShow
    v-if="showSlideShow"
    :projectDetails="slideShowDetails"
    @close-button:click="closeSlideShow"
  ></SlideShow>
  <div v-else>
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <h3 class="font-semibold text-xl tracking-tight">Top projects</h3>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div>
          <nuxt-link to="/">
            <button
              class="leading-none border-2 rounded-lg py-2 px-4 text-white hover:border-transparent hover:text-blue-900 hover:bg-white mt-4 lg:mt-0"
            >Draichiboard</button>
          </nuxt-link>
        </div>
      </div>
    </nav>
    <div class="flex flex-wrap justify-evenly">
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
          description:
            'Flux its a.. lorem ipsum dolor flest menn dorime aque  lorem ipsum dolor flest menn dorime aque  lorem.',
          technologies: ['Vue.js'],
          cover: 'Flux/beta.talentify.io_client_v2_dashboard(fullhd).png',
          screenshots: [
            'Flux/beta.talentify.io_client_v2_dashboard(fullhd).png',
            'Flux/beta.talentify.io_client_v2_organic-marketing(fullhd).png',
            'Flux/beta.talentify.io_client_v2_mobile_converter(fullhd).png',
            'Flux/beta.talentify.io_client_v2_ats_job_feed(fullhd).png',
            'Flux/beta.talentify.io_client_v2_ats-connections(fullhd).png',
          ],
        },
        company: {
          name: 'Talentify',
          logo:
            'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/izo8611kxbziew6eagef',
          site: 'https://app.talentify.io/client',
        },
      },
      {
        entity: {
          name: 'Jobquiz',
          description: 'Candidate aquisition',
          technologies: ['Vue.js', 'Quasar'],
          cover: 'Jobquiz/jobquiz-1(Pixel 2).png',
          screenshots: [
            'Jobquiz/jobquiz-1(Pixel 2).png',
            'Jobquiz/jobquiz-2(Pixel 2).png',
            'Jobquiz/jobquiz-3(Pixel 2).png',
            'Jobquiz/jobquiz-4(Pixel 2).png',
            'Jobquiz/jobquiz-5(Pixel 2).png',
            'Jobquiz/jobquiz-6(Pixel 2).png',
          ],
        },
        company: {
          name: 'Talentify',
          logo:
            'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/izo8611kxbziew6eagef',
          site: 'https://app.talentify.io/jobs',
        },
      },
      {
        entity: {
          name: 'IBM',
          description: 'DSG pages',
          technologies: ['HTML', 'IBM Bootstrap'],
          cover: 'IBM/ibm20.png',
          screenshots: [
            'IBM/ibm20.png',
          ],
        },
        company: {
          name: 'Talentify',
          logo:
            'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/izo8611kxbziew6eagef',
          site: 'https://app.talentify.io/jobs',
        },
      },
      {
        entity: {
          name: 'Você Azul',
          description: 'Brazilian Bank program to easily offer credit',
          technologies: ['Vue'],
          cover: 'VoceAzul/voceazul_profile.png',
          screenshots: [
            'VoceAzul/voceazul_profile.png',
          ],
        },
        company: {
          name: 'Talentify',
          logo:
            'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/izo8611kxbziew6eagef',
          site: 'https://app.talentify.io/jobs',
        },
      },
      {
        entity: {
          name: 'Mudamos Web',
          description: 'Brazilian Bank program to easily offer credit',
          technologies: ['React'],
          cover: 'Mudamos/mudamos-web1.png',
          screenshots: [
            'Mudamos/mudamos-web1.png',
          ],
        },
        company: {
          name: 'Talentify',
          logo:
            'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/izo8611kxbziew6eagef',
          site: 'https://app.talentify.io/jobs',
        },
      },
      {
        entity: {
          name: 'Globo',
          description: 'Brazilian Bank program to easily offer credit',
          technologies: ['React'],
          cover: 'Globo/globo1.png',
          screenshots: [
            'Globo/globo1.png',
          ],
        },
        company: {
          name: 'Talentify',
          logo:
            'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/izo8611kxbziew6eagef',
          site: 'https://app.talentify.io/jobs',
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
