<template>
  <Card class="text-white p-10">
    <img v-for="(img, index) in screenshotsFiles" :key="`carrousel-${index}`" :src="img" class="m-4" />
  </Card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Card: () => import('@/components/UI/Card.vue'),
  }
})
export default class Project extends Vue {
  get id() {
    return this.$route.params.id
  }
  get screenshotsString(): string[] {
    return JSON.parse(this.$route.params.screenshotsString)
  }

  get screenshotsFiles() {
    return this.screenshotsString.map((i) => require(`assets/img/screenshots/${i}`))
  }
}
</script>

<style lang="scss" scoped>
</style>
