import { Cloud, Code2, Database } from 'lucide-react'
import { stack } from '../data/stack'
import { useLanguage } from '../i18n'

export function Stack() {
  const { t } = useLanguage()

  const groups = [
    { title: t('stack.core'), icon: Code2, items: stack.core },
    { title: t('stack.cloud'), icon: Cloud, items: stack.cloud },
    { title: t('stack.additional'), icon: Database, items: stack.additional },
  ]

  return (
    <section id="stack" className="section divider">
      <div className="container">
        <div className="eyebrow"><span /> {t('stack.titulo')}</div>
        <p className="section-subtitle">{t('stack.subtitulo')}</p>
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