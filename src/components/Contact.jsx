import { forwardRef } from 'react'
import { useLang } from '../i18n.jsx'

const Contact = forwardRef(function Contact({ visible }, ref) {
  const { t } = useLang()

  return (
    <section id="contact" ref={ref} className={`section ${visible ? 'is-visible' : ''}`}>
      <p className="section-label">{t.contact.label}</p>
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="section-intro">{t.contact.intro}</p>

      <div className="contact-grid">
        <a className="contact-email" href={`mailto:${t.contact.email}`}>
          {t.contact.email}
        </a>

        <ul className="contact-social">
          {t.contact.social.map((s) => (
            <li key={s.label}>
              <a href={s.href}>{s.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-footer">
        <span>{t.contact.location}</span>
        <span>{t.footer}</span>
      </div>
    </section>
  )
})

export default Contact
