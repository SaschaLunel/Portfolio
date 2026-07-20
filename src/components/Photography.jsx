import { forwardRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { photographyImages } from '../media.js'
import PhotoLightbox from './PhotoLightbox.jsx'

const Photography = forwardRef(function Photography({ visible }, ref) {
  const { t } = useLang()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="photography" ref={ref} className={`section ${visible ? 'is-visible' : ''}`}>
      <p className="section-label">{t.photography.label}</p>
      <h2 className="section-title">{t.photography.title}</h2>
      <p className="section-intro">{t.photography.intro}</p>

      <div className="grid grid-photo">
        {t.photography.items.map((item, i) => (
          <figure className="photo-card" key={item.name} style={{ transitionDelay: `${i * 60}ms` }}>
            <div
              className="photo-frame is-clickable"
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
              {photographyImages[i] && (
                <img src={photographyImages[i]} alt={item.name} loading="lazy" />
              )}
            </div>
            <figcaption>
              <span className="card-tag">{item.tag}</span>
              <span className="card-title-sm">{item.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {openIndex !== null && (
        <PhotoLightbox
          items={t.photography.items}
          images={photographyImages}
          initialIndex={openIndex}
          closeLabel={t.design.modal.close}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  )
})

export default Photography
