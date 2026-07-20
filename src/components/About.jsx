import { forwardRef } from 'react'
import { useLang } from '../i18n.jsx'

const About = forwardRef(function About({ visible }, ref) {
  const { t } = useLang()

  return (
    <section id="about" ref={ref} className={`section ${visible ? 'is-visible' : ''}`}>
      <p className="section-label">{t.about.label}</p>
      <h2 className="section-title">{t.about.title}</h2>

      <div className="about-grid">
        <div className="about-main">
          <p className="about-bio">{t.about.bio}</p>
          <a
            className="cta cta-secondary"
            href="/cv-sascha-lunel.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.about.cvCta} <span className="cta-arrow">↗</span>
          </a>
        </div>
        <div className="about-skills">
          <p className="skills-label">{t.about.skillsLabel}</p>
          <ul className="skills-list">
            {t.about.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
})

export default About
