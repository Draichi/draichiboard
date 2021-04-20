<template>
  <SlideShow
    v-if="showSlideShow"
    :projectDetails="slideShowDetails"
    @close-button:click="closeSlideShow"
  ></SlideShow>
  <div v-else>
    <!-- <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <h3 class="font-semibold text-xl tracking-wide font-sans">
          Top projects
        </h3>
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
    </nav> -->
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
            'Next',
            'Vercel',
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
          description: 'Recruitment marketing platform and analytics dashboard',
          technologies: [
            'React',
            'Next',
            'Vercel',
            'Typescript',
            'Jest',
            'Cypress',
            'SCSS',
            'REST',
            'Material UI',
          ],
          cover: 'Flux/talentify.io_(iPhone 6_7_8 Plus).png',
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
            'Decentralized exchange integrated with lending protocol. Created at 2020 HackMoney hackathon',
          technologies: [
            'Vue.js',
            'Web3.js',
            'Ethers.js',
            'Solidity',
            'Chainlink',
            'Aave',
            'KyberSwap',
          ],
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
            'Mathplotlib',
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
          description:
            'Digital platform for sales, blogs and institutional pages',
          technologies: ['HTML', 'Javascript', 'SCSS'],
          cover: 'IBM/ibm20.png',
          screenshots: [
            'IBM/ibm5.png',
            'IBM/ibm9.png',
            'IBM/ibm10.png',
            'IBM/ibm12.png',
            'IBM/ibm14.png',
            'IBM/ibm15.png',
            'IBM/ibm16.png',
            'IBM/ibm18.png',
            'IBM/ibm19.png',
            'IBM/ibm20.png',
            'IBM/ibm21.png',
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
          description: 'Personal dashboard for spending and credit analytics',
          technologies: ['React', 'REST', 'Bootstrap', 'SCSS'],
          cover: 'VoceAzul/voceazul_profile.png',
          screenshots: [
            'VoceAzul/voceazul_profile.png',
            'VoceAzul/voceazul_dash.png',
          ],
        },
        company: {
          name: 'Banco do Brasil',
          logo:
            'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/izo8611kxbziew6eagef',
          site: 'https://app.talentify.io/jobs',
        },
      },
      {
        entity: {
          name: 'Mudamos Web',
          description: 'Platform to easily make a petition of a new law',
          technologies: ['React', 'Ruby on Rails', 'SCSS', 'BEM'],
          cover: 'Mudamos/www.mudamos.org_.png',
          liveLink: 'https://www.mudamos.org/',
          screenshots: [
            'Mudamos/www.mudamos.org_.png',
            'Mudamos/mudamos-web1.png',
          ],
        },
        company: {
          name: 'Tagview',
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
          description:
            'Web app produced to internally help biggest brazilian media to navigate over the produced shows',
          technologies: ['React', 'SCSS'],
          liveLink: 'https://www.globopalm.com.br/',
          cover: 'Globo/globo1.png',
          screenshots: ['Globo/globo1.png'],
        },
        company: {
          name: 'Tagview',
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
