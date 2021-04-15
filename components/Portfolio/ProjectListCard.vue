<template>
  <Card
    class="max-w-sm rounded flex flex-col justify-between overflow-hidden shadow-lg my-4"
  >
    <div>
      <img
        class="w-full object-contain h-78 cursor-pointer"
        loading="lazy"
        :src="coverImg"
        :alt="project.entity.name"
        @click="forwardClick"
      />
      <div class="px-6 py-4">
        <div
          @click="forwardClick"
          class="cursor-pointer font-bold text-xl mb-2 text-white"
        >
          <h2>{{ project.entity.name }}</h2>
        </div>
        <p class="text-gray-600 text-base">{{ project.entity.description }}</p>
        <a
          target="_blanck"
          :href="project.entity.liveLink"
          v-if="project.entity.liveLink"
          >Live project</a
        >
      </div>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-for="technology in technologies"
        :key="technology"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#{{ technology }}</span
      >
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
