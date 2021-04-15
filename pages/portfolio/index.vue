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
            >
              Draichiboard
            </button>
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
          name: 'Sabido',
          description: 'Microlearning social network',
          technologies: [
            'React',
            'GraphQL',
            'Typescript',
            'Jest',
            'Cypress',
            'Storybook',
            'TailwindCSS',
          ],
          cover: 'Sabido/dev.sabido.com_(iPhone 6_7_8 Plus) (1).png',
          liveLink: 'https://sabido.com/',
          screenshots: [
            'Sabido/dev.sabido.com_(iPhone 6_7_8 Plus) (2).png',
            'Sabido/dev.sabido.com_(iPhone 6_7_8 Plus) (3).png',
            'Sabido/dev.sabido.com_(iPhone 6_7_8 Plus) (4).png',
            'Sabido/dev.sabido.com_(iPhone 6_7_8 Plus) (5).png',
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
          name: 'Flux',
          description: 'Recruitment marketing dashboard',
          technologies: [
            'React',
            'Typescript',
            'Jest',
            'Cypress',
            'SCSS',
            'REST',
            'Material UI',
          ],
          cover: 'Flux/beta.talentify.io_client_v2_dashboard(fullhd).png',
          liveLink: 'https://www.talentify.io/',
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
          name: 'Lucrum',
          description:
            'Decentralized exchange integrated with lending protocol',
          technologies: ['Vue.js', 'Web3.js', 'Ethers.js', 'Solidity'],
          cover: 'Lucrum/Screenshot.png',
          liveLink:
            'https://hack.ethglobal.co/showcase/lucrum-rec6770m95rAPGCoC',
          screenshots: ['Lucrum/Screenshot.png'],
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
          name: 'Bud Fox',
          description: 'Cryptocurrency price forecaster',
          technologies: [
            'Vue.js',
            'Machine Learning',
            'Material UI',
            'Heroku',
            'Python',
          ],
          cover: 'BudFox/plot.png',
          liveLink: 'https://bud-fox.github.io/live/',
          screenshots: [
            'BudFox/bud-fox.github.io_live_.png',
            'BudFox/bud-fox.github.io_live_ (1).png',
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
          description:
            'Candidate aquisition platform responsible for an increase of over 30% on convertions',
          technologies: ['Vue.js', 'Quasar.js', 'Cypress', 'Jest', 'Docker'],
          cover: 'Jobquiz/app.talentify.io_companies_(iPhone 6_7_8 Plus).png',
          liveLink: 'https://app.talentify.io/companies/',
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
          technologies: ['Javascript', 'SCSS', 'IBM Bootstrap'],
          cover: 'IBM/ibm20.png',
          screenshots: ['IBM/ibm20.png'],
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
          technologies: ['React', 'REST'],
          cover: 'VoceAzul/voceazul_profile.png',
          screenshots: ['VoceAzul/voceazul_profile.png'],
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
          screenshots: ['Mudamos/mudamos-web1.png'],
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
          name: 'Age of Learning API',
          description: 'Class streaming with exercices for students world-wide',
          liveLink: 'https://www.ageoflearning.com/',
          technologies: ['PHP', 'MySQL'],
          cover: 'AgeOfLearning/cover-example.png',
          screenshots: ['AgeOfLearning/cover-example.png'],
        },
        company: {
          name: '2 Mundos',
          logo:
            'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/izo8611kxbziew6eagef',
          site: 'https://www.ageoflearning.com/',
        },
      },
      {
        entity: {
          name: 'Globo',
          description: 'Brazilian Bank program to easily offer credit',
          technologies: ['React'],
          cover: 'Globo/globo1.png',
          screenshots: ['Globo/globo1.png'],
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
