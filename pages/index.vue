<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Work } from '@/types'
import { event } from 'vue-gtag'

ScrollTrigger.defaults({
  immediateRender: false,
  scrub: true,
})
gsap.registerPlugin(ScrollTrigger)

const isCopyToClipboardMessageVisible = ref(false)
const isPopupVisible = ref(false)
const workHighlighted = ref<Work>('ibm')
const workHighlightedBeforeClick = ref<Work>('ibm')
const workClicked = ref<Work>('ibm')

const isIBMPopupVisible = computed(
  () => isPopupVisible.value && workClicked.value === 'ibm'
)
const isSabidoPopupVisible = computed(
  () => isPopupVisible.value && workClicked.value === 'sabido'
)
const isGloboPopupVisible = computed(
  () => isPopupVisible.value && workClicked.value === 'globo'
)
const isTalentifyPopupVisible = computed(
  () => isPopupVisible.value && workClicked.value === 'talentify'
)
const isIphonePopupVisible = computed(
  () => isPopupVisible.value && workClicked.value === 'iphone'
)

function onPopupCloseButtonClick() {
  if (!isPopupVisible.value) {
    return
  }
  isPopupVisible.value = false
  document.body.style.overflow = 'scroll'
  workHighlighted.value = workHighlightedBeforeClick.value
}

function onWorkClick(work: Work) {
  event('work_clicked', { work })
  workClicked.value = work
  isPopupVisible.value = true
  workHighlightedBeforeClick.value = workHighlighted.value
  workHighlighted.value = work
  document.body.style.overflow = 'hidden'
}

function onEmailTileClick() {
  event('email_copied')
  navigator.clipboard.writeText('lucasdraichi@gmail.com')
  isCopyToClipboardMessageVisible.value = true
  setTimeout(() => {
    isCopyToClipboardMessageVisible.value = false
  }, 3000)
}

function addTextDecoration(work: string) {
  const elementId = `#${work}`
  const liElement = document.querySelector(elementId) as HTMLLIElement

  liElement.style.textDecorationLine = 'underline'
}

function onWorkHighlight(work: Work) {
  addTextDecoration(work)
  workHighlighted.value = work
}

function removeTextDecoration(work: Work) {
  const elementId = `#${work}`
  const liElement = document.querySelector(elementId) as HTMLLIElement

  liElement.style.textDecorationLine = 'none'
}

function useWorksMobileScrollAnimation(work: Work) {
  gsap.timeline({
    scrollTrigger: {
      trigger: `#${work}`,
      start: 'top-=29px bottom-=208px',
      end: 'bottom+=29px bottom-=208px',
      onEnter: () => onWorkHighlight(work),
      onEnterBack: () => onWorkHighlight(work),
      onLeave: () => removeTextDecoration(work),
      onLeaveBack: () => removeTextDecoration(work),
    },
  })
}

function useWorksDesktopHoverAnimation(work: Work) {
  document
    .getElementById(work)
    ?.addEventListener('mouseenter', () => onWorkHighlight(work))

  document
    .getElementById(work)
    ?.addEventListener('mouseleave', () => removeTextDecoration(work))
}

onMounted(() => {
  if (window.innerWidth < 600) {
    useAboveTheFoldMobileScrollAnimation()
    useAboveTheFoldMobileIntroAnimation()

    useWorksMobileScrollAnimation('ibm')
    useWorksMobileScrollAnimation('sabido')
    useWorksMobileScrollAnimation('globo')
    useWorksMobileScrollAnimation('talentify')
    useWorksMobileScrollAnimation('iphone')

    useScrollAnimateXAxis('#lucas-draichi', 0)
    useScrollAnimateXAxis('#CTA', -40)
    useScrollAnimateXAxis('#profile-photo', -30)
    useScrollAnimateXAxis('#about', -20)
    useScrollAnimateXAxis('#email-tile', -5)
    useScrollAnimateXAxis('#github-tile', -5)
    useScrollAnimateXAxis('#resume-tile', -5)
    useScrollAnimateXAxis('#dashboard-tile', -5)
    useScrollAnimateXAxis('#blog-tile', -5)

    return
  }

  useAboveTheFoldDesktopIntroAnimation()

  useWorksDesktopHoverAnimation('ibm')
  useWorksDesktopHoverAnimation('sabido')
  useWorksDesktopHoverAnimation('globo')
  useWorksDesktopHoverAnimation('talentify')
  useWorksDesktopHoverAnimation('iphone')
})
</script>

<template>
  <main :class="$style.index" itemscope itemtype="https://schema.org/Person">
    <CardWorkPreview
      :is-work-clicked="isPopupVisible"
      :work-highlighted="workHighlighted"
    />

    <CardWorks @work:click="onWorkClick" />

    <CardHeading />

    <CardCTA />

    <CardPhoto />

    <CardAbout />

    <div :class="$style['grid-links']" style="grid-area: email">
      <LazyCardLink id="email-tile" @click="onEmailTileClick">
        <template #title
          ><span itemprop="email">lucasdraichi@gmail.com</span></template
        >
        <template #text>Email</template>
        <template #icon>
          <svg
            v-if="!isCopyToClipboardMessageVisible"
            fill="none"
            height="28"
            viewBox="0 0 23 28"
            width="23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.70588 27.0588C1.96176 27.0588 1.32453 26.7941 0.794176 26.2646C0.264725 25.7343 0 25.0971 0 24.3529V5.41176H2.70588V24.3529H17.5882V27.0588H2.70588ZM8.11765 21.6471C7.37353 21.6471 6.73674 21.3823 6.20729 20.8529C5.67694 20.3225 5.41176 19.6853 5.41176 18.9412V2.70588C5.41176 1.96176 5.67694 1.32453 6.20729 0.794176C6.73674 0.264725 7.37353 0 8.11765 0H20.2941C21.0382 0 21.6755 0.264725 22.2058 0.794176C22.7353 1.32453 23 1.96176 23 2.70588V18.9412C23 19.6853 22.7353 20.3225 22.2058 20.8529C21.6755 21.3823 21.0382 21.6471 20.2941 21.6471H8.11765ZM8.11765 18.9412H20.2941V2.70588H8.11765V18.9412ZM8.11765 18.9412V2.70588V18.9412Z"
              fill="#122117"
            />
          </svg>

          <p v-else :class="$style['copied-to-clipboard']">
            Copied<br />to clipboard!
          </p>
        </template>
      </LazyCardLink>

      <LazyCardLink
        id="github-tile"
        background-color="#1D1D1D"
        color="#E3D45A"
        href="https://github.com/Draichi"
        itemprop="sameAs"
        target="_blank"
      >
        <template #title
          ><span style="color: #b9bfc1">Social Network</span></template
        >
        <template #text>Github</template>
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
      </LazyCardLink>
    </div>

    <div :class="$style['grid-links']" style="grid-area: links">
      <LazyCardLink
        id="resume-tile"
        background-color="#8F9A9D"
        color="#122120"
        download="Lucas Draichi Resume.pdf"
        href="/misc/LucasDraichiResume.pdf"
      >
        <template #title>125kb</template>
        <template #text>Resume</template>
        <template #icon>
          <svg
            fill="none"
            height="27"
            viewBox="0 0 41 27"
            width="41"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.6531 10.1925C32.0863 7.3199 30.5397 4.7332 28.2775 2.87423C26.0154 1.01526 23.178 -0.000661909 20.25 3.23556e-07C15.3731 3.23556e-07 11.1375 2.7675 9.02812 6.8175C6.54789 7.08553 4.2542 8.26066 2.58776 10.1171C0.921326 11.9735 -0.000289747 14.3803 6.83315e-08 16.875C6.83315e-08 22.4606 4.53938 27 10.125 27H32.0625C36.72 27 40.5 23.22 40.5 18.5625C40.5 14.1075 37.0406 10.4963 32.6531 10.1925ZM32.0625 23.625H10.125C6.39563 23.625 3.375 20.6044 3.375 16.875C3.375 13.4156 5.95687 10.53 9.3825 10.1756L11.1881 9.99L12.0319 8.38688C12.8079 6.87619 13.9858 5.60894 15.4358 4.72465C16.8858 3.84037 18.5516 3.37334 20.25 3.375C24.6712 3.375 28.485 6.51375 29.3456 10.8506L29.8519 13.3819L32.4338 13.5675C33.7023 13.6528 34.8915 14.2155 35.7619 15.1423C36.6323 16.069 37.1193 17.2911 37.125 18.5625C37.125 21.3469 34.8469 23.625 32.0625 23.625ZM22.6969 10.125H17.8031V15.1875H13.5L20.25 21.9375L27 15.1875H22.6969V10.125Z"
              fill="#122120"
            />
          </svg>
        </template>
      </LazyCardLink>

      <!-- <LazyCardLink
        id="dashboard-tile"
        background-color="#E3D45A"
        color="#302408"
        href="/dashboard"
      >
        <template #title>Draichiboard</template>
        <template #text>Dashboard</template>
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
      </LazyCardLink> -->

      <!-- <LazyCardLink
        id="blog-tile"
        background-color="#CC65FE"
        color="#230830"
        href="/blog"
      >
        <template #title>Draichiboard</template>
        <template #text>Blog</template>
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
      </LazyCardLink> -->
    </div>

    <LazyCardPopup
      v-show="isIBMPopupVisible"
      itemscope
      itemtype="https://schema.org/WebSite"
      @close-button:click="onPopupCloseButtonClick"
    >
      <template #title><span itemprop="name">IBM</span></template>
      <template #description>
        <p itemprop="abstract">
          At 2015 I worked at IBM Brasil as a Web Builder, working at the
          development team, side by side with the design team to implement the
          new IBM layouts.
          <br />
          <br />
          It was great opportunity to learn how the workflow of a distributed
          team is.
          <br />
          <br />
          Most of the pages I've worked are related to Watson (IBM's AI) and
          internal report pages.
          <br />
          <br />
          Some pages that I help build are online today.
          <br />
          <br />
          I left IBM Brasil at 2016 to work at a startup called Tagview.
          <br />
          <br />
          You can check one of the pages I help build
          <a
            :class="$style['work-link']"
            href="https://www.ibm.com/artificial-intelligence"
            itemprop="url"
            target="_blank"
            >here</a
          >
        </p>
        <link href="https://github.com/Draichi" itemprop="author" />
      </template>
    </LazyCardPopup>

    <LazyCardPopup
      v-show="isSabidoPopupVisible"
      itemscope
      itemtype="https://schema.org/WebSite"
      @close-button:click="onPopupCloseButtonClick"
    >
      <template #title><span itemprop="name">Sabido</span></template>
      <template #description>
        <p itemprop="abstract">
          Sabido is a micro-learning product created in 2020 to help people
          share knowledge and learn while navigating.
          <br />
          <br />
          I am one the founders of Sabido, and I worked as the front-end lead
          developer.
          <br />
          <br />
          The stack chosen is Nuxt + Typescript + Tailwind + Firebase
          <br />
          <br />
          You can check this one online
          <a
            :class="$style['work-link']"
            href="https://sabido.com/discover"
            itemprop="url"
            target="_blank"
            >here</a
          >
        </p>
        <link href="https://github.com/Draichi" itemprop="author" />
      </template>
    </LazyCardPopup>

    <LazyCardPopup
      v-show="isGloboPopupVisible"
      itemscope
      itemtype="https://schema.org/WebSite"
      @close-button:click="onPopupCloseButtonClick"
    >
      <template #title><span itemprop="name">Globo</span></template>
      <template #description>
        <p itemprop="abstract">
          Globo is the biggest brazilian television channel. At 2015 I created
          their news website called Glamour.
          <br />
          <br />
          At the time I was working at TagView, a brazilian startup.
          <br />
          <br />
          The stack is React + SCSS
          <br />
          <br />
          You can check this one online
          <a
            :class="$style['work-link']"
            href="https://glamour.globo.com/"
            itemprop="url"
            target="_blank"
            >here</a
          >
        </p>
        <link href="https://github.com/Draichi" itemprop="author" />
      </template>
    </LazyCardPopup>

    <LazyCardPopup
      v-show="isTalentifyPopupVisible"
      itemscope
      itemtype="https://schema.org/WebSite"
      @close-button:click="onPopupCloseButtonClick"
    >
      <template #title><span itemprop="name">Talentify</span></template>
      <template #description>
        <p itemprop="abstract">
          Since 2019 I work at Talentify. A job advertising startup.
          <br />
          <br />
          I created landing pages, job boards, client dashboards and everything
          related to front-end development.
          <br />
          <br />
          The stack chosen on most of these modules is Nuxt + Typescript +
          GraphQL + TailwindCSS
          <br />
          <br />
          You can check this one online
          <a
            :class="$style['work-link']"
            href="https://www.talentify.io/"
            itemprop="url"
            target="_blank"
            >here</a
          >
        </p>
        <link href="https://github.com/Draichi" itemprop="author" />
      </template>
    </LazyCardPopup>

    <LazyCardPopup
      v-show="isIphonePopupVisible"
      itemscope
      itemtype="https://schema.org/WebSite"
      @close-button:click="onPopupCloseButtonClick"
    >
      <template #title><span itemprop="name">iPhone 13 Pro</span></template>
      <template #description>
        <p itemprop="abstract">
          At 2021 I challenged myself to create a state-of-the-art landing page.
          So I cloned one of the most beautiful web sites: The iPhone landing
          page.
          <br />
          <br />
          Starting from zero I tried to implement the most similar web page from
          the original.
          <br />
          <br />
          The stack used is Vite + Typescript + GSAP
          <br />
          <br />
          The codebase is open-source at my
          <a
            :class="$style['work-link']"
            href="https://github.com/Draichi"
            target="_blank"
            >github</a
          >.
          <br />
          <br />
          You can check this one online
          <a
            :class="$style['work-link']"
            href="https://iphone-13.vercel.app/"
            itemprop="url"
            target="_blank"
            >here</a
          >
        </p>
        <link href="https://github.com/Draichi" itemprop="author" />
      </template>
    </LazyCardPopup>
  </main>
  <video
    id="ibm-video"
    autoplay
    muted
    playsinline
    src="/videos/IBM/preview.mov"
    style="display: none"
  ></video>
  <video
    id="sabido-video"
    autoplay
    muted
    playsinline
    src="/videos/Sabido/preview.mov"
    style="display: none"
  ></video>
  <video
    id="globo-video"
    autoplay
    muted
    playsinline
    src="/videos/Globo/preview.mov"
    style="display: none"
  ></video>
  <video
    id="talentify-video"
    autoplay
    muted
    playsinline
    src="/videos/Talentify/preview.mov"
    style="display: none"
  ></video>
  <video
    id="iphone-video"
    autoplay
    muted
    playsinline
    src="/videos/iPhone/preview.mov"
    style="display: none"
  ></video>
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

.work-link {
  color: #67bffb;
}

.grid-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (min-width: 600px) {
  .index {
    display: grid;
    margin: 0;
    grid-template-areas:
      'heading heading cta cta'
      'works works preview preview'
      'photo email about links';

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 50vh 50vh 1fr;
    grid-gap: 8px;
    width: 100vw;
    height: calc(150vh + 25px);
  }
}
</style>
