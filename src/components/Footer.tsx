/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from 'react'

export default function Footer({ footerSocial, footerStack }) {
  return (
    <footer id="collaborate" className="footer">
      <div className="footer__top">
        <h1>
          Vamos a
          <br />
          ¡Colaborar!
          <span>
            <svg
              width="262.14453px"
              height="254.18701px"
              viewBox="0 0 262.14453 254.18701"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M116.635 254.187L124.138 145.282L51.6104 225.767L31.6028 206.214L114.361 133.459L0 140.28L0 112.542L116.18 120.5L30.2386 43.6528L48.2 24.5547L124.138 110.724L116.635 0L145.737 0L138.007 108.45L211.443 27.0557L230.769 47.5178L148.01 120.5L262.144 112.542L262.144 140.28L147.101 132.55L233.27 209.17L215.308 228.041L138.007 143.918L145.737 254.187L116.635 254.187L116.635 254.187Z"
                id="Sendero-5"
                fill="var(--color-secondary)"
                fillRule="evenodd"
                stroke="none"
              ></path>
            </svg>
          </span>
        </h1>
        <h3>
          Hablame sobre un proyecto,
          <br /> colaboración o simplemente para saludar!
        </h3>
      </div>
      <div className="footer__midle">
        <div className="midle__list">
          <span>Social</span>
          {Object.entries(footerSocial).map(([key, value]: any) => (
            <Fragment key={key}>
              <a href={value} target="_blank">
                {key}
              </a>
            </Fragment>
          ))}
        </div>
        <div className="midle__list">
          <span>Front-end Stack</span>
          {Object.entries(footerStack.frontend).map(([key, value]: any) => (
            <Fragment key={key}>
              <a href={value} target="_blank">
                {key}
              </a>
            </Fragment>
          ))}
        </div>
        <div className="midle__list">
          <span>Back-end Stack</span>
          {Object.entries(footerStack.backend).map(([key, value]: any) => (
            <Fragment key={key}>
              <a href={value} target="_blank">
                {key}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="footer__down">
        <hr className="line" />
        <span>
          © 2024 - Hecho por mi con <span>💜 </span>
          gracias por visitar!
        </span>
      </div>
    </footer>
  )
}
