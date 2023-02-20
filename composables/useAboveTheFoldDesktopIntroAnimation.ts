import gsap from 'gsap'
/**
 * Animate above the fold elements on a desktop layout
 */
export default function () {
  gsap
    .timeline({
      defaults: {
        opacity: 0,
      },
    })
    .fromTo(
      '#lucas-draichi',
      {
        xPercent: -50,
      },
      {
        xPercent: 0,
        opacity: 1,
      }
    )
    .fromTo(
      '#CTA',
      {
        yPercent: -50,
      },
      {
        yPercent: 0,
        opacity: 1,
      }
    )
    .fromTo(
      '#works-list',
      {
        xPercent: -50,
      },
      {
        xPercent: 0,
        opacity: 1,
      }
    )
    .fromTo(
      '#works-title',
      {
        yPercent: -50,
      },
      {
        yPercent: 0,
        opacity: 1,
      },
      '<40%'
    )
    .fromTo(
      '#laptop-3d',
      {
        yPercent: 50,
      },
      {
        yPercent: 0,
        opacity: 1,
      }
    )
    .fromTo(
      '#laptop-3d-title',
      {
        yPercent: -50,
      },
      {
        yPercent: 0,
        opacity: 1,
      },
      '<40%'
    )
}
