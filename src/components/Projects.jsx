import './Projects.css'

import glowcartImg from '../assets/projects/glowcart.jpg'
import campuscraveImg from '../assets/projects/campuscrave.jpg'
import expresscarImg from '../assets/projects/expresscar.jpg'
import ebookImg from '../assets/projects/ebook.jpg'

const projects = [
  {
    num: '01',
    title: 'The Glow Cart',
    tags: ['Android', 'Kotlin', 'Firebase'],
    desc: 'Android e-commerce app with product listing, cart, and order management. User-friendly UI with seamless Firebase backend integration.',
    color: '#e8f0e8',
    image: glowcartImg,
    link: 'https://github.com/BansiSantoki',
  },

  {
    num: '02',
    title: 'CampusCrave',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    desc: 'Campus food ordering platform with REST APIs, authentication, cart, and responsive UI for a seamless ordering experience.',
    color: '#e8ecf0',
    image: campuscraveImg,
    link: 'https://github.com/BansiSantoki',
  },

  {
    num: '03',
    title: 'Express Car',
    tags: ['Flutter', 'Firebase', 'Geolocator'],
    desc: 'Role-based car rental app with real-time location tracking, booking management, and separate user, owner, and admin modules.',
    color: '#f0e8ec',
    image: expresscarImg,
    link: 'https://github.com/BansiSantoki',
  },

  {
    num: '04',
    title: 'E-Book',
    tags: ['Flutter', 'Firebase', 'Google Sign-In'],
    desc: 'Built an E-Book application with book browsing and reading features. Implemented Firebase for data storage and authentication with responsive UI.',
    color: '#f0e8ec',
    image: ebookImg,
    link: 'https://github.com/BansiSantoki',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">

        <div className="projects__head">
          <div>
            <p className="section-eyebrow">Latest Projects</p>
            <h2 className="section-title">
              Projects & <br /> Practice
            </h2>
          </div>

          <a
            href="https://github.com/BansiSantoki"
            target="_blank"
            rel="noreferrer"
            className="btn-see"
          >
            See More ↗
          </a>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <div
              key={p.num}
              className="project-card"
              style={{ '--card-bg': p.color }}
            >
              <div className="project-card__top">
                <span className="project-card__num">{p.num}</span>

                <div className="project-card__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="project-card__title">{p.title}</h3>

              <div className="project-card__preview">
                <img src={p.image} alt={p.title} />
              </div>

              <p className="project-card__desc">{p.desc}</p>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}