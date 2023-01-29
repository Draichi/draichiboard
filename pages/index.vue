<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isCopyToclipboardMessageVisible = ref(false)

const isPopupVisible = ref(false)

function onCloseButtonClick() {
  isPopupVisible.value = false
}

function onEmailTileClick() {
  navigator.clipboard.writeText('lucasdraichi@gmail.com')
  isCopyToclipboardMessageVisible.value = true
  setTimeout(() => {
    isCopyToclipboardMessageVisible.value = false
  }, 3000)
}

ScrollTrigger.defaults({
  immediateRender: false,
  scrub: true,
})

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const worksListItems = document.querySelectorAll('#works-list > li')

  worksListItems.forEach((item) => {
    item.addEventListener('click', () => {
      isPopupVisible.value = true
    })
  })

  function addTextDecoration(trigger: string) {
    const liElement = document.querySelector(trigger) as HTMLLIElement

    liElement.style.textDecorationLine = 'underline'
  }

  function removeTextDecoration(trigger: string) {
    const liElement = document.querySelector(trigger) as HTMLLIElement

    liElement.style.textDecorationLine = 'none'
  }

  function useScrollTriggerAnimation(trigger: string) {
    gsap.timeline({
      scrollTrigger: {
        trigger,
        start: 'top-=29px bottom-=208px',
        end: 'bottom+=29px bottom-=208px',
        onEnter: () => addTextDecoration(trigger),
        onLeave: () => removeTextDecoration(trigger),
        onLeaveBack: () => removeTextDecoration(trigger),
        onEnterBack: () => addTextDecoration(trigger),
      },
    })
  }

  useScrollTriggerAnimation('#ibm')
  useScrollTriggerAnimation('#sabido')
  useScrollTriggerAnimation('#globo')
  useScrollTriggerAnimation('#talentify')
  useScrollTriggerAnimation('#age-of-learning')

  const introParallax = gsap.timeline()

  introParallax.fromTo(
    '#laptop-3d',
    {
      yPercent: -100,
    },
    {
      yPercent: 0,
    }
  )
  introParallax.fromTo(
    '#works-list',
    {
      xPercent: -100,
    },
    {
      xPercent: 0,
    }
  )
  introParallax.fromTo(
    '#works-title',
    {
      yPercent: 100,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
    }
  )

  const worksAndLaptopInteraction = gsap.timeline({
    scrollTrigger: {
      trigger: '#works-list',
      start: 'bottom center',
      end: '+=230',
      scrub: true,
    },
    defaults: {
      ease: 'Power1.easeIn',
    },
  })

  worksAndLaptopInteraction.fromTo(
    '#laptop-3d',
    {
      y: 0,
    },
    {
      y: '-238',
    }
  )

  worksAndLaptopInteraction.fromTo(
    '#works-list',
    {
      opacity: 1,
    },
    {
      opacity: 0,
    },
    '<'
  )

  useScrollAnimation('#lucas-draichi', 0)
  useScrollAnimation('#CTA', -40)
  useScrollAnimation('#profile-photo', -30)
  useScrollAnimation('#about', -20)
  useScrollAnimation('#email-tile', -5)
  useScrollAnimation('#github-tile', -5)
  useScrollAnimation('#resume-tile', -5)
  useScrollAnimation('#dashboard-tile', -5)
  useScrollAnimation('#blog-tile', -5)
})
</script>

<template>
  <video
    id="ibm-video"
    autoplay
    muted
    playsinline
    src="/screenshots/IBM/preview.mov"
    style="display: none"
  ></video>
  <main :class="$style.index">
    <CardWorkPreview />

    <CardPopup v-if="isPopupVisible" @close-button:click="onCloseButtonClick" />

    <CardWorks />

    <CardHeading />

    <CardCTA />

    <CardPhoto />

    <CardAbout />

    <CardLink
      id="email-tile"
      title="lucasdraichi@gmail.com"
      @click="onEmailTileClick"
    >
      <template #default>Email</template>
      <template #icon>
        <img
          v-if="!isCopyToclipboardMessageVisible"
          alt=""
          src="/icons/copy.svg"
        />
        <p v-else :class="$style['copied-to-clipboard']">
          Copied<br />to clipboard!
        </p>
      </template>
    </CardLink>

    <!-- Use Linkedin later? -->
    <!-- <CardLink background-color="#4FD1C5" color="#122120" title="Social Network">
      <template #default>Linkedin</template>
      <template #icon>
        <svg
          fill="none"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 27L11.0953 24.6375L20.5453 15.1875H0V11.8125H20.5453L11.0953 2.3625L13.5 0L27 13.5L13.5 27Z"
            fill="#122120"
          />
        </svg>
      </template>
    </CardLink> -->

    <a href="https://github.com/Draichi" target="_blank">
      <CardLink
        id="github-tile"
        background-color="#1D1D1D"
        color="#E3D45A"
        title="Social Network"
        title-color="#B9BFC1"
      >
        <template #default>Github</template>
        <template #icon>
          <svg
            fill="none"
            height="27"
            viewBox="0 0 27 27"
            width="27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 27L11.0953 24.6375L20.5453 15.1875H0V11.8125H20.5453L11.0953 2.3625L13.5 0L27 13.5L13.5 27Z"
              fill="#E3D45A"
            />
          </svg>
        </template>
      </CardLink>
    </a>

    <a download href="/misc/LucasDraichiResume.pdf">
      <CardLink
        id="resume-tile"
        background-color="#8F9A9D"
        color="#122120"
        title="125kb"
      >
        <template #default>Resume</template>
        <template #icon>
          <img alt="" src="/icons/cloud-download.svg" />
        </template>
      </CardLink>
    </a>

    <NuxtLink to="/dashboard">
      <CardLink
        id="dashboard-tile"
        background-color="#E3D45A"
        color="#302408"
        title="Draichiboard"
      >
        <template #default>Dashboard</template>
        <template #icon>
          <svg
            fill="none"
            height="27"
            viewBox="0 0 27 27"
            width="27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 27L11.0953 24.6375L20.5453 15.1875H0V11.8125H20.5453L11.0953 2.3625L13.5 0L27 13.5L13.5 27Z"
              fill="#302408"
            />
          </svg>
        </template>
      </CardLink>
    </NuxtLink>

    <NuxtLink to="/blog">
      <CardLink
        id="blog-tile"
        background-color="#CC65FE"
        color="#230830"
        title="Draichiboard"
      >
        <template #default>Blog</template>
        <template #icon>
          <svg
            fill="none"
            height="27"
            viewBox="0 0 27 27"
            width="27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 27L11.0953 24.6375L20.5453 15.1875H0V11.8125H20.5453L11.0953 2.3625L13.5 0L27 13.5L13.5 27Z"
              fill="#230830"
            />
          </svg>
        </template>
      </CardLink>
    </NuxtLink>
  </main>
</template>

<style module>
.index {
  margin: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.copied-to-clipboard {
  font-size: 1rem;
}
</style>
