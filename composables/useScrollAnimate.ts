import gsap from 'gsap'

/**
 * Animate on the X axis when the element is visible on the viewport
 * @param trigger the scrollTrigger trigger element
 * @param xPercent the percentage on the `x` axis to animate
 */
export default function (
  trigger: string,
  xPercent: number = 0,
  yPercent: number = 0,
  delay: number = 0,
  start: string = 'top bottom',
  end: string = 'bottom bottom',
  markers: boolean = false
) {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start,
      end,
      scrub: true,
      markers,
    },
    defaults: {
      ease: 'Power3.easeIn',
    },
  })

  timeline.fromTo(
    trigger,
    {
      opacity: 0,
      xPercent,
      yPercent,
    },
    {
      opacity: 1,
      xPercent: 0,
      yPercent: 0,
      delay,
    }
  )
}
