import './Skills.css'

const skills = [
  { name: 'React',       icon: '⚛️' },
  { name: 'Next.js',     icon: '▲'  },
  { name: 'Flutter',     icon: '🐦' },
  { name: 'Node.js',     icon: '🟢' },
  { name: 'Firebase',    icon: '🔥' },
  { name: 'MongoDB',     icon: '🍃' },
  { name: 'Figma',       icon: '🎨' },
  { name: 'Kotlin',      icon: '🟣' },
  { name: 'JavaScript',  icon: '💛' },
  { name: 'TypeScript',  icon: '🔷' },
  { name: 'MySQL',       icon: '🐬' },
  { name: 'HTML5',       icon: '🧱' },
  { name: 'CSS3',        icon: '🎀' },
  { name: 'React Native', icon: '📱' },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">
          Exploring My<br />Diverse Skill Set
        </h2>

        <div className="skills__grid">
          {skills.map(s => (
            <div key={s.name} className="skill-card">
              <span className="skill-card__icon">{s.icon}</span>
              <span className="skill-card__name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
