<template>
  <Card
    class="flex items-center justify-center flex-col mb-5 md:mb-0 py-4 md:py-4"
  >
    <h3 class="text-gray-500 text-center tracking-wide text-lg">
      Total contributions:
      <span class="text-white font-bold font-sans text-lg">{{ commits }}</span>
    </h3>
    <div class="w-full px-5">
      <nuxt-link to="/portfolio">
        <button class="border-transparent text-blue-900 antialiased">
          See top projects
        </button>
      </nuxt-link>
    </div>
  </Card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Card: () => import('@/components/UI/Card.vue'),
  },
})
export default class BottomAnalysisItemText extends Vue {
  @Prop({ default: '' })
  commits!: string
}
</script>

<style lang="scss" scoped>
button {
  @apply w-full block font-sans leading-none rounded-lg py-10 px-4 mt-10 tracking-wider;
  background: rgb(24, 24, 38);
  &:hover {
    @apply text-white;
  }
}
</style>
