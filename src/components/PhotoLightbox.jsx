import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function PhotoLightbox({ items, images, initialIndex, closeLabel, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const closeBtnRef = useRef(null)
  const hasMultiple = items.length > 1

  useEffect(() => {
    closeBtnRef.current?.focus({ preventScroll: true })

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (hasMultiple && e.key === 'ArrowRight') {
        setIndex((i) => (i + 1) % items.length)
      } else if (hasMultiple && e.key === 'ArrowLeft') {
        setIndex((i) => (i - 1 + items.length) % items.length)
      }
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, hasMultiple, items.length])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const showNext = () => setIndex((i) => (i + 1) % items.length)
  const showPrev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  const item = items[index]
  const src = images?.[index]

  return createPortal(
    <div className="lightbox-backdrop" onMouseDown={handleBackdropClick} role="presentation">
      <div className="lightbox-panel">
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          ref={closeBtnRef}
          aria-label={closeLabel}
        >
          ×
        </button>

        {hasMultiple && (
          <button type="button" className="lightbox-nav lightbox-prev" onClick={showPrev} aria-label="Previous">
            ‹
          </button>
        )}

        <div className="lightbox-image-wrap">
          {src ? (
            <img src={src} alt={item.name} />
          ) : (
            <span className="lightbox-placeholder" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </div>

        {hasMultiple && (
          <button type="button" className="lightbox-nav lightbox-next" onClick={showNext} aria-label="Next">
            ›
          </button>
        )}

        <div className="lightbox-caption-block">
          <span className="lightbox-caption-tag">{item.tag}</span>
          <p className="lightbox-caption-title">{item.name}</p>
        </div>
      </div>
    </div>,
    document.body,
  )
}
