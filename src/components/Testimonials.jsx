import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    text: "Bansi's technical depth is exceptional. She built our ERP from scratch — delivering 15 modules on time with clean architecture and an intuitive UI. Truly impressive for a student developer.",
    name: 'Krishna Santoki',
    role: 'Senior PHP Developer, Lucrortech Inc. (Texas, USA)',
  },
  {
    text: "Working with Bansi was a great experience. Her Flutter skills and Firebase knowledge helped us deliver the car rental app smoothly, with solid real-time tracking and a polished interface.",
    name: 'Priyanshi Bhimani',
    role: 'Associate Backend Developer, Weybee',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((idx + 1) % testimonials.length)

  return (
    <section className="testimonials" id="about">
      <div className="testimonials__inner">

        {/* ── Left ── */}
        <div className="testimonials__left">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-title">
            What Our Clients<br />Say
          </h2>
          <a href="#contact" className="btn-see testimonials__cta">
            Hire Me
          </a>
        </div>

        {/* ── Right: Testimonial Card ── */}
        <div className="testimonials__right">
          <div className="testimonial-card">
            <span className="testimonial-card__quote">"</span>
            <p className="testimonial-card__text">{testimonials[idx].text}</p>
            <div className="testimonial-card__author">
              <strong>{testimonials[idx].name}</strong>
              <span>{testimonials[idx].role}</span>
            </div>
          </div>

          <div className="testimonial-card__nav">
            <button onClick={prev} aria-label="Previous">‹</button>
            <span>
              {String(idx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <button onClick={next} aria-label="Next">›</button>
          </div>
        </div>

      </div>
    </section>
  )
}
