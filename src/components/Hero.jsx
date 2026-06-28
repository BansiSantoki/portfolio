import './Hero.css'
import profilePic from '../assets/image.png'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">

        {/* ── Left: Text Content ── */}
        <div className="hero__content">
          <p className="section-eyebrow">Portfolio</p>

          <h1 className="hero__name">
            Bansi<br />Santoki
          </h1>

          <p className="hero__desc">
            Welcome to my space where innovation meets execution , building
            scalable, user-focused web and mobile applications with a passion
            for clean code and great UX.
          </p>

          <div className="hero__badge">
            <span className="hero__badge-text">Application Developer</span>
          </div>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--dark">Hire Me</a>
            <a href="#projects" className="btn btn--outline">View Projects</a>
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div className="hero__image-wrap">
          <div className="hero__image-ring">
            <img src={profilePic} alt="Bansi Santoki" className="hero__image" />
          </div>
          <div className="hero__floating-card">
            <span className="hero__floating-dot" />
            <p>Open to opportunities &amp; freelance work</p>
          </div>
        </div>

      </div>
    </section>
  )
}
