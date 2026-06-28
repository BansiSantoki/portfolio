import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    // 🔧 TODO: Replace with Formspree or EmailJS to actually send email
    // Example Formspree:
    // fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify(form), headers: {'Content-Type':'application/json'} })
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', phone: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      {/* ── Dark CTA Banner ── */}
      <div className="cta-banner">
        <span className="cta-banner__star cta-banner__star--tl">✦</span>
        <div className="cta-banner__inner">
          <h2 className="cta-banner__title">Let's Get In Touch</h2>
          <a href="mailto:bansisantoki2005@gmail.com" className="cta-banner__btn">
            Hire Me
          </a>
        </div>
        <span className="cta-banner__star cta-banner__star--br">✦</span>
      </div>

      {/* ── Contact Form Section ── */}
      <section className="contact" id="contact">
        <div className="contact__inner">

          {/* Left */}
          <div className="contact__left">
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="section-title">
              Let's Get<br />in Touch
            </h2>
            <p className="contact__sub">
              Have a question, feedback, or interested in collaborating?
              I'd love to hear from you.
            </p>
            <div className="contact__socials">
              <span className="contact__follow">Follow</span>
              <a
                href="https://github.com/BansiSantoki"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/bansi-santoki-679955375"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="contact__form" onSubmit={submit}>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handle}
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handle}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handle}
                rows={5}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button type="submit" className="btn btn--dark contact__submit">
              {sent ? 'Message Sent ✓' : 'Send a Message'}
            </button>
          </form>

        </div>
      </section>
    </>
  )
}
