import gsap from 'gsap'

export default function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#github-tile',
        markers: true,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      },
    })
    .fromTo(
      '#github-tile',
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
      }
    )
}
