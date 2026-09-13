import { Boxes, Cloud, Code2, Database, GitBranch, Lightbulb, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../i18n'

const expertiseKeys = [
  { icon: Code2, key: 'expertise.backend' },
  { icon: Cloud, key: 'expertise.cloud' },
  { icon: GitBranch, key: 'expertise.devops' },
  { icon: Database, key: 'expertise.integracao' },
  { icon: Boxes, key: 'expertise.arquitetura' },
  { icon: ShieldCheck, key: 'expertise.observabilidade' },
]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="section divider">
      <div className="container about-grid">
        <div>
          <div className="eyebrow"><span /> {t('about.titulo')}</div>
          <h2>{t('about.subtitulo')}</h2>
          <p>
            {t('about.descricao1')}
          </p>
          <p>
            {t('about.descricao2')}
          </p>

          <div className="flow">
            <div><Lightbulb /><span>{t('about.problema')}</span></div>
            <b>→</b>
            <div><Boxes /><span>{t('about.arquitetura')}</span></div>
            <b>→</b>
            <div><Cloud /><span>{t('about.solucoes')}</span></div>
          </div>
        </div>

        <div className="expertise-card">
          <div className="card-title">{t('about.experiencia_titulo')}</div>
          {expertiseKeys.map(({ icon: Icon, key }) => (
            <div className="expertise-row" key={key}>
              <span className="icon-box"><Icon size={17} /></span>
              <span>{t(key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}