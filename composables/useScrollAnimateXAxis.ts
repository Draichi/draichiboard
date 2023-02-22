import gsap from 'gsap'

/**
 * Animate on the X axis when the element is visible on the viewport
 * @param trigger the scrollTrigger trigger element
 * @param xPercent the percentage on the `x` axis to animate
 */
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
