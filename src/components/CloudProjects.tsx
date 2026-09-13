import { ArrowUpRight, Cloud } from 'lucide-react'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n'

export function CloudProjects() {
  const { t } = useLanguage()

  return (
    <section id="projetos" className="section divider">
      <div className="container">
        <div className="eyebrow"><span /> {t('cloudProjects.titulo')}</div>
        <p className="section-subtitle">{t('cloudProjects.subtitulo')}</p>
        <div className="projects-grid">
          {projects.map(({ name, url, key }) => (
            <a
              key={name}
              className="project-card"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-card-header">
                <Cloud size={18} />
                <ArrowUpRight size={16} />
              </div>
              <strong>{name}</strong>
              <span className="project-desc">{t(`cloudProjects.projects.${key}`)}</span>
            </a>
          ))}
        </div>
        <p className="section-subtitle project-mgc">
          {t('cloudProjects.mgc')}{' '}
          <a href="https://magalu.cloud/" target="_blank" rel="noreferrer">
            Magalu Cloud
          </a>
        </p>
      </div>
    </section>
  )
}