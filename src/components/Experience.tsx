import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../i18n'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experiencia" className="section divider">
      <div className="container bottom-grid">
        <div>
          <div className="eyebrow"><span /> {t('exp.titulo')}</div>
          <h3>{t('exp.jornada')}</h3>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <strong>LuizaLabs</strong>
                <b>Software Engineer Sênior</b>
                <small>2022 — {t('exp.atual')} · Franca/SP · {t('exp.remoto')}</small>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <strong>{t('exp.anterior')}</strong>
                <p>{t('exp.descricao_anterior')}</p>
                <small>{t('exp.anos')} · {t('exp.empresas')}</small>
              </div>
            </div>
          </div>
        </div>

        <div id="contato" className="contact">
          <div className="eyebrow"><span /> {t('exp.contato_titulo')}</div>
          <h3>{t('exp.contato_subtitulo')}</h3>
          <p>{t('exp.contato_descricao')}</p>
          <a href="mailto:aralves.andrade@gmail.com"><Mail size={15} /> aralves.andrade@gmail.com</a>
          <a href="https://wa.me/5516992750948" target="_blank" rel="noreferrer"><Phone size={15} /> (16) 99275-0948</a>
          <span><MapPin size={15} /> Franca/SP · Brasil</span>
          <a href="https://www.linkedin.com/in/aralvesandrade/" target="_blank" rel="noreferrer"><Linkedin size={15} /> linkedin.com/in/aralvesandrade</a>
          <a href="https://github.com/aralvesandrade" target="_blank" rel="noreferrer"><Github size={15} /> github.com/aralvesandrade</a>
        </div>
      </div>
    </section>
  )
}