import { Fragment, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import lenis from '../utils/lenis-scroll'

export default function Header({ headerNav }) {
  const header = useRef<HTMLHeadElement>(null)
  const tl = useRef<GSAPTimeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ defaults: { duration: 0.5 } })
        .fromTo(
          ['.header .group', '.nav__right span'],
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, stagger: 0.08 }
        )
        .fromTo(
          '.header .line',
          { width: '0%' },
          { width: '100%', duration: 1 },
          '<'
        )
    }, header)

    return () => ctx.revert()
  }, [])

  return (
    <header className="header" ref={header}>
      <nav className="header__nav">
        <div className="nav__left">
          <div className="group">
            {headerNav.map(([text, href]) => (
              <Fragment key={text}>
                <a href={href} onClick={() => lenis.scrollTo(href)}>
                  {text}
                </a>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="nav__right">
          <span>Front-end Developer </span>
          <span>& Amateur Designer</span>
        </div>
      </nav>

      <hr className="line" />
    </header>
  )
}
