import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ProjectModal({ item, galleryImages, videoId, labels, onClose }) {
  const closeBtnRef = useRef(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const gallery = item.gallery || []
  const hasMultiple = gallery.length > 1

  useEffect(() => {
    closeBtnRef.current?.focus({ preventScroll: true })

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setLightboxIndex((current) => {
          if (current !== null) return null
          onClose()
          return current
        })
      } else if (lightboxIndex !== null && hasMultiple) {
        if (e.key === 'ArrowRight') {
          setLightboxIndex((current) => (current + 1) % gallery.length)
        } else if (e.key === 'ArrowLeft') {
          setLightboxIndex((current) => (current - 1 + gallery.length) % gallery.length)
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, lightboxIndex, hasMultiple, gallery.length])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleLightboxBackdropClick = (e) => {
    if (e.target === e.currentTarget) setLightboxIndex(null)
  }

  const showNext = () => setLightboxIndex((current) => (current + 1) % gallery.length)
  const showPrev = () => setLightboxIndex((current) => (current - 1 + gallery.length) % gallery.length)

  const activeEntry = lightboxIndex !== null ? gallery[lightboxIndex] : null
  const activeSrc = lightboxIndex !== null ? galleryImages?.[lightboxIndex] : null

  return createPortal(
    <>
      <div className="modal-backdrop" onMouseDown={handleBackdropClick} role="presentation">
        <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            ref={closeBtnRef}
            aria-label={labels.close}
          >
            ×
          </button>

          <div className="modal-body">
            <div className="modal-meta">
              <span className="card-tag">{item.tag}</span>
              <span className="card-year">{item.year}</span>
            </div>

            <h3 id="modal-title" className="modal-title">
              {item.name}
            </h3>

            {(item.role || item.client) && (
              <dl className="modal-facts">
                {item.role && (
                  <div>
                    <dt>{labels.roleLabel}</dt>
                    <dd>{item.role}</dd>
                  </div>
                )}
                {item.client && (
                  <div>
                    <dt>{labels.clientLabel}</dt>
                    <dd>{item.client}</dd>
                  </div>
                )}
              </dl>
            )}

            <p className="modal-details">{item.details || item.desc}</p>

            {gallery.length > 0 && (
              <div className="modal-gallery">
                {gallery.map((entry, i) => {
                  const src = galleryImages?.[i]
                  return (
                    <figure className="modal-gallery-item" key={i}>
                      <div
                        className={`modal-gallery-media ${src ? 'is-clickable' : ''}`}
                        role={src ? 'button' : undefined}
                        tabIndex={src ? 0 : undefined}
                        onClick={() => src && setLightboxIndex(i)}
                        onKeyDown={(e) => {
                          if (src && (e.key === 'Enter' || e.key === ' ')) {
                            e.preventDefault()
                            setLightboxIndex(i)
                          }
                        }}
                      >
                        {src ? (
                          <img src={src} alt={entry.caption} loading="lazy" />
                        ) : (
                          <span className="modal-gallery-placeholder" aria-hidden="true">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        )}
                      </div>
                      <figcaption>{entry.caption}</figcaption>
                    </figure>
                  )
                })}
              </div>
            )}

            {videoId && (
              <div className="modal-video">
                <p className="modal-video-label">{labels.videoLabel}</p>
                <div className="modal-video-wrap">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                    title={item.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {activeSrc && (
        <div
          className="lightbox-backdrop"
          onMouseDown={handleLightboxBackdropClick}
          role="presentation"
        >
          <div className="lightbox-panel">
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxIndex(null)}
              aria-label={labels.close}
            >
              ×
            </button>

            {hasMultiple && (
              <button
                type="button"
                className="lightbox-nav lightbox-prev"
                onClick={showPrev}
                aria-label="Previous"
              >
                ‹
              </button>
            )}

            <div className="lightbox-image-wrap">
              <img src={activeSrc} alt={activeEntry.caption} />
            </div>

            {hasMultiple && (
              <button
                type="button"
                className="lightbox-nav lightbox-next"
                onClick={showNext}
                aria-label="Next"
              >
                ›
              </button>
            )}

            <p className="lightbox-caption">{activeEntry.caption}</p>
          </div>
        </div>
      )}
    </>,
    document.body,
  )
}
