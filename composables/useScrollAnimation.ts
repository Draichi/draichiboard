import gsap from 'gsap'

export default function (trigger: string, xPercent: number) {
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
