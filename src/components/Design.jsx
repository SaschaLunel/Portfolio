import { forwardRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { designImages, designGalleries, designVideos } from '../media.js'
import ProjectModal from './ProjectModal.jsx'

const Design = forwardRef(function Design({ visible }, ref) {
  const { t } = useLang()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="design" ref={ref} className={`section ${visible ? 'is-visible' : ''}`}>
      <p className="section-label">{t.design.label}</p>
      <h2 className="section-title">{t.design.title}</h2>
      <p className="section-intro">{t.design.intro}</p>

      <div className="grid grid-design">
        {t.design.items.map((item, i) => (
          <article
            className="card is-clickable"
            key={item.name}
            style={{ transitionDelay: `${i * 60}ms` }}
            role="button"
            tabIndex={0}
            onClick={() => setOpenIndex(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setOpenIndex(i)
              }
            }}
          >
            <div className="card-media">
              {designImages[i] ? (
                <>
                  <img src={designImages[i]} alt={item.name} loading="lazy" />
                  <span className="card-media-badge" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </>
              ) : (
                <span className="card-media-index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              )}
            </div>
            <div className="card-meta">
              <span className="card-tag">{item.tag}</span>
              <span className="card-year">{item.year}</span>
            </div>
            <h3 className="card-title">{item.name}</h3>
            <p className="card-desc">{item.desc}</p>
          </article>
        ))}
      </div>

      {openIndex !== null && (
        <ProjectModal
          item={t.design.items[openIndex]}
          galleryImages={designGalleries[openIndex]}
          videoId={designVideos[openIndex]}
          labels={t.design.modal}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  )
})

export default Design
