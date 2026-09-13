import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { useLanguage } from '../i18n'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span /> {t('hero.cargo')}</div>
          <h1>Alexandre <strong>Andrade</strong></h1>
          <p className="hero-role">Backend <i>·</i> Cloud <i>·</i> Platform Engineering <i>·</i> DevOps</p>
          <p className="hero-description">
            {t('hero.descricao')}
          </p>

          <div className="hero-actions">
            <a className="button primary" href="https://github.com/aralvesandrade" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub <ArrowUpRight size={16} />
            </a>
            <a className="button secondary" href="https://www.linkedin.com/in/aralvesandrade/" target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}