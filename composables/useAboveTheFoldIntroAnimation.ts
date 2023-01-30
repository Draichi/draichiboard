import gsap from 'gsap'

/**
 * Animate the elements above the fold on a timeline
 */
export default function () {
  gsap
    .timeline()
    .fromTo(
      '#laptop-3d',
      {
        yPercent: -100,
      },
      {
        yPercent: 0,
      }
    )
    .fromTo(
      '#works-list',
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
      }
    )
    .fromTo(
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
}
