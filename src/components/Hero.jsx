import { forwardRef } from 'react'
import { useLang } from '../i18n.jsx'
import RegistrationMark from './RegistrationMark.jsx'

const Hero = forwardRef(function Hero({ visible, onNavigate }, ref) {
  const { t } = useLang()

  return (
    <section id="hero" ref={ref} className={`section hero ${visible ? 'is-visible' : ''}`}>
      <RegistrationMark className="corner corner-tl" />
      <RegistrationMark className="corner corner-br" />
      <p className="eyebrow">{t.hero.eyebrow}</p>
      <h1 className="hero-title">
        {t.hero.title.split('\n').map((line, i) => (
          <span key={i} className="hero-line">
            {line}
          </span>
        ))}
      </h1>
      <p className="hero-sub">{t.hero.sub}</p>
      <button
        type="button"
        className="cta"
        onClick={() => onNavigate('design')}
      >
        {t.hero.cta} <span className="cta-arrow">→</span>
      </button>
    </section>
  )
})

export default Hero
