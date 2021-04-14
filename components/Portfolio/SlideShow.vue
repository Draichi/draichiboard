<template>
  <Card
    class="text-white flex-col flex justify-evenly h-screen w-screen relative"
  >
    <button
      @click="closeButtonClick"
      class="absolute right-0 top-0 md:m-20 m-4"
    >
      X
    </button>
    <div class="relative">
      <div
        v-for="(slide, index) in screenshotsFiles"
        :key="`slide-${index}`"
        v-show="slideIndex == index + 1"
        class="fade"
      >
        <img :src="slide" class="m-auto" loading="lazy" />
      </div>
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
    <div class="text-center">
      <span
        v-for="(slide, index) in screenshotsFiles"
        :key="`dot-${index}`"
        :class="['dot', { active: slideIndex == index + 1 }]"
        @click="currentSlide(index + 1)"
      ></span>
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
export default class Project extends Vue {
  @Prop({ default: Object as () => ProjectInterface })
  projectDetails!: ProjectInterface

  slideIndex = 1
  created() {
    this.showSlides(this.slideIndex)
  }
  plusSlides(n: number) {
    this.showSlides((this.slideIndex += n))
  }
  currentSlide(n: number) {
    this.showSlides((this.slideIndex = n))
  }
  showSlides(index: number) {
    if (index > this.projectDetails.entity.screenshots.length) {
      this.slideIndex = 1
    }
    if (index < 1) {
      this.slideIndex = this.projectDetails.entity.screenshots.length
    }
  }
  @Emit('close-button:click')
  closeButtonClick() {}
  get screenshotsFiles(): object {
    return this.projectDetails.entity.screenshots.map((i) =>
      require(`assets/img/screenshots/${i}`)
    )
  }
}
</script>

<style lang="scss" scoped>
button {
  z-index: 299;
}
img {
  height: auto;
  @screen md {
    height: 90vh;
    max-width: 80%;
  }
}
.prev,
.next {
  @apply text-blue-900 bg-white;
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -2em;
  padding: 0.5em;
  font-weight: bold;
  font-size: 1em;
  transition: 0.6s ease;
  border-radius: 0 1em 1em 0;
  user-select: none;
}
.next {
  right: 0;
  border-radius: 1em 0 0 1em;
}

.prev:hover,
.next:hover {
  @apply bg-blue-900 text-white;
}

.dot {
  cursor: pointer;
  height: 0.7em;
  width: 0.7em;
  margin: 0 0.5em;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  @apply bg-blue-900;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
