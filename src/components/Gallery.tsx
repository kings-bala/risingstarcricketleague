import { useState } from 'react'

const photos = Array.from({ length: 12 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0')
  return `/images/gallery/07092023_${num}.jpg`
})

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section className="section" id="gallery">
      <h2>GALLERY</h2>
      <h3 className="gallery-subtitle">7/9/2023 Training Session</h3>
      <div className="gallery-grid">
        {photos.map((src) => (
          <img key={src} src={src} alt="Training session" onClick={() => setLightbox(src)} />
        ))}
      </div>
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Enlarged view" />
        </div>
      )}
    </section>
  )
}

export default Gallery
