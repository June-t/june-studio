import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import lenis from './utils/lenis-scroll'

import Header from './components/Header'
import Footer from './components/Footer'
import LadingPage from './pages/Home'

import data from './data/data'
gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const templateLayout = useRef<HTMLDivElement>(null)
  const tl = useRef<GSAPTimeline>()

  gsap.config({
    nullTargetWarn: false,
  })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let timeline = tl.current
      timeline = gsap.timeline({ defaults: { duration: 0.5 } })

      timeline.to(
        '.main .main__start',
        {
          ease: 'ease-in-out',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 2,
        },
        '>+1'
      )

      gsap.from(
        [
          '.main .main__about h1',
          '.main .main__about p',
          '.main .main__about a',
        ],
        {
          opacity: 0,
          y: 100,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.main .main__about',
            start: 'top center',
            end: 'top 100px',
            id: 'scrub',
          },
        }
      )

      gsap.from(['.main .main__works h1', '.main .main__works p'], {
        opacity: 0,
        y: 100,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.main .main__works',
          start: 'top center',
          end: 'top 100px',
          id: 'scrub',
        },
      })

      gsap.from('.works__list .list__item', {
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.list__item',
          start: 'top center',
          end: 'top 100px',
          id: 'scrub',
        },
      })

      // footer

      gsap.from(['.footer__top h1', '.footer__top h3'], {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.footer__top',
          start: 'top center',
          end: 'top 100px',
          id: 'scrub',
        },
      })

      gsap.from(['.footer__midle span', '.footer__midle a'], {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        scrollTrigger: {
          trigger: '.footer__top',
          start: 'top center',
          end: 'top -100px',
          id: 'scrub',
        },
      })

      gsap.from('.footer__down .line', {
        width: '0%',
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.footer__top',
          start: 'top center',
          end: 'top -100px',
          id: 'scrub',
        },
      })

      gsap.from(['.footer__down span'], {
        y: 20,
        opacity: 0,
        scrollTrigger: {
          trigger: '.footer__top',
          start: 'top center',
          end: 'top -100px',
          id: 'scrub',
        },
      })
    }, templateLayout)

    return () => ctx.revert()
  }, [])

  // scroll-behavior: smooth;
  lenis.start()

  return (
    <div className="template" ref={templateLayout}>
      <Header headerNav={data.header} />
      <LadingPage setAbout={data.about} setWorks={data.works} />
      <Footer
        footerSocial={data.collaborate.socials}
        footerStack={data.collaborate.stack}
      />
    </div>
  )
}
