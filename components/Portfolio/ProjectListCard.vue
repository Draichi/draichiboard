<template>
  <Card class="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img class="w-full" :src="coverImg" :alt="project.entity.name" @click="forwardClick" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-white">{{ project.entity.name }}</div>
      <p class="text-gray-600 text-base">{{ project.entity.description }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-for="technology in technologies"
        :key="technology"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >#{{ technology }}</span>
    </div>
  </Card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { ProjectInterface } from '@/types'


@Component({
  components: {
    Card: () => import('@/components/UI/Card.vue'),
  },
})
export default class ProjectListCard extends Vue {
  @Prop({ default: Object as () => ProjectInterface })
  project!: ProjectInterface

  get technologies(): string[] {
    return this.project.entity.technologies
  }
  get coverImg() {
    return require(`assets/img/screenshots/${this.project.entity.cover}`)
  }
  get screenshotsString(): string {
    return JSON.stringify(this.project.entity.screenshots)
  }
  get projectDetails(): string {
    return JSON.stringify(this.project)
  }

  @Emit('click')
  forwardClick() {}
}
</script>

<style lang="scss" scoped>
.card-container {
  @apply flex p-10;
  min-width: 100vw;
}
</style>
