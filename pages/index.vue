<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

ScrollTrigger.defaults({
  immediateRender: false,
  scrub: true,
})

gsap.registerPlugin(ScrollTrigger)

function useScrollAnimation(trigger: string, xPercent: number) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    },
    defaults: {
      ease: 'Power3.easeIn',
    },
  })

  timeline.fromTo(
    trigger,
    {
      opacity: 0,
      xPercent: xPercent,
    },
    {
      opacity: 1,
      xPercent: 0,
    }
  )
}

onMounted(() => {
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
  <main :class="$style.index">
    <Laptop3D />

    <WorksList />

    <HeroCard />

    <CTACard />

    <ProfilePhoto />

    <AboutCard />

    <TileCard id="email-tile" title="lucasdraichi@gmail.com">
      <template #default>Email</template>
      <template #icon>
        <img alt="" src="/icons/copy.svg" />
      </template>
    </TileCard>

    <!-- Use Linkedin later? -->
    <!-- <TileCard background-color="#4FD1C5" color="#122120" title="Social Network">
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
    </TileCard> -->

    <TileCard
      id="github-tile"
      background-color="#1D1D1D"
      color="#E3D45A"
      title="Social Network"
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
    </TileCard>

    <TileCard
      id="resume-tile"
      background-color="#8F9A9D"
      color="#122120"
      title="125kb"
    >
      <template #default>Resume</template>
      <template #icon>
        <img alt="" src="/icons/cloud-download.svg" />
      </template>
    </TileCard>

    <NuxtLink to="/dashboard">
      <TileCard
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
      </TileCard>
    </NuxtLink>

    <NuxtLink to="/blog">
      <TileCard
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
      </TileCard>
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
</style>
