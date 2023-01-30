import gsap from 'gsap'

/**
 * Animate the items above the fold when scrolling
 */
export default function () {
  gsap
    .timeline({
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
    .fromTo(
      '#laptop-3d',
      {
        y: 0,
      },
      {
        y: '-238',
      }
    )
    .fromTo(
      '#works-list',
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
      '<'
    )
}
