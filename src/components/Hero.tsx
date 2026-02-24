import { useState, useEffect } from 'react'

const slides = [
  { img: '/images/cricket0.jpeg', label: 'Training' },
  { img: '/images/cricket1.jpeg', label: 'Tournament' },
  { img: '/images/cricket2.jpeg', label: 'Community' },
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="hero">
      {slides.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
          <img src={slide.img} alt={slide.label} />
          <div className="hero-overlay">
            <h1>RISING STAR CRICKET ACADEMY</h1>
            <h3>{slide.label}</h3>
          </div>
        </div>
      ))}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
