import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span /> SOFTWARE ENGINEER</div>
          <h1>Alexandre <strong>Andrade</strong></h1>
          <p className="hero-role">Backend <i>·</i> Cloud <i>·</i> Platform Engineering <i>·</i> DevOps</p>
          <p className="hero-description">
            Construo soluções de software e infraestrutura para transformar
            problemas reais em sistemas simples, escaláveis e confiáveis.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="https://github.com/aralvesandrade" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub <ArrowUpRight size={16} />
            </a>
            <a className="button secondary" href="https://www.linkedin.com/in/aralvesandrade/" target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={16} />
            </a>
            <a className="resume-link" href="/curriculo.pdf">
              <Download size={16} /> Ver currículo
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-glow" />
          <img src="/alexandre-andrade.jpg" alt="Alexandre Andrade" />
        </div>
      </div>
    </section>
  )
}