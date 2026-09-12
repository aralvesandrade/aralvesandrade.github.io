import { Cloud, Code2, Database } from 'lucide-react'
import { stack } from '../data/stack'

const groups = [
  { title: 'Core', icon: Code2, items: stack.core },
  { title: 'Cloud & Platform', icon: Cloud, items: stack.cloud },
  { title: 'Também trabalho com', icon: Database, items: stack.additional },
]

export function Stack() {
  return (
    <section id="stack" className="section divider">
      <div className="container">
        <div className="eyebrow"><span /> STACK TECNOLÓGICO</div>
        <p className="section-subtitle">Tecnologias com as quais trabalho</p>
        <div className="stack-grid">
          {groups.map(({ title, icon: Icon, items }) => (
            <div className="stack-card" key={title}>
              <div className="stack-heading"><Icon size={22} /><strong>{title}</strong></div>
              <div className="tags">
                {items.map(item => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}