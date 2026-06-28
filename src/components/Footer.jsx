import './Footer.css'

const pages = ['Home', 'About', 'Projects', 'Skills', 'Achievements', 'Contact']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Bansi Santoki. All rights reserved.
        </p>
        <ul className="footer__links">
          {pages.map(p => (
            <li key={p}>
              <a href={`#${p.toLowerCase()}`}>{p}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
