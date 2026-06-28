import './Clients.css'

const techs = ['React', 'Next.js', 'Flutter', 'Firebase', 'Node.js', 'MongoDB']

export default function Clients() {
  return (
    <section className="clients">
      <div className="clients__inner">
        <p className="clients__label">4+ projects delivered</p>
        <div className="clients__logos">
          {techs.map(t => (
            <span key={t} className="clients__logo">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
