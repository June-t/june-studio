import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  smoothTouch: false,
  touchMultiplier: 2,
})

lenis.stop()

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

export default lenis
