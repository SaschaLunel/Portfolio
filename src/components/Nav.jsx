import { useLang } from '../i18n.jsx'
import RegistrationMark from './RegistrationMark.jsx'

const SECTIONS = ['hero', 'design', 'photography', 'about', 'contact']

export default function Nav({ active, onNavigate }) {
  const { lang, toggle, t } = useLang()

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-top">
        <a
          href="#hero"
          className="nav-mark"
          onClick={(e) => {
            e.preventDefault()
            onNavigate('hero')
          }}
          aria-label="Home"
        >
          <RegistrationMark size={22} />
        </a>
      </div>

      <ul className="nav-list">
        {SECTIONS.map((id, i) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`nav-link ${active === id ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(id)
              }}
            >
              <span className="nav-index">{String(i).padStart(2, '0')}</span>
              <span className="nav-label">{t.nav[id]}</span>
              {active === id && <RegistrationMark className="nav-active-mark" size={14} />}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="lang-toggle"
        onClick={toggle}
        aria-label="Switch language"
      >
        <span className={lang === 'fr' ? 'is-active' : ''}>FR</span>
        <span className="lang-sep">/</span>
        <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
      </button>
    </nav>
  )
}
