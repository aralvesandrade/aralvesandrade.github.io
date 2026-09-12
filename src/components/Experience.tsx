import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'

export function Experience() {
  return (
    <section id="experiencia" className="section divider">
      <div className="container bottom-grid">
        <div>
          <div className="eyebrow"><span /> EXPERIÊNCIA PROFISSIONAL</div>
          <h3>Minha jornada</h3>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <strong>LuizaLabs</strong>
                <b>Software Engineer Sênior</b>
                <small>2022 — atual · Franca/SP · Remoto</small>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <strong>Experiência anterior</strong>
                <p>Desenvolvimento de sistemas, integração de soluções e infraestrutura.</p>
                <small>+20 anos · Diversas empresas</small>
              </div>
            </div>
          </div>
        </div>

        <div id="contato" className="contact">
          <div className="eyebrow"><span /> CONHEÇA MAIS</div>
          <h3>Vamos conversar?</h3>
          <p>Estou sempre aberto a novas oportunidades, projetos desafiadores e boas conversas.</p>
          <a href="mailto:alexandre.andrade@email.com"><Mail size={15} /> alexandre.andrade@email.com</a>
          <span><MapPin size={15} /> Franca/SP · Brasil</span>
          <a href="https://www.linkedin.com/in/aralvesandrade/" target="_blank" rel="noreferrer"><Linkedin size={15} /> linkedin.com/in/aralvesandrade</a>
          <a href="https://github.com/aralvesandrade" target="_blank" rel="noreferrer"><Github size={15} /> github.com/aralvesandrade</a>
          <a className="button primary small" href="mailto:alexandre.andrade@email.com">
            Enviar mensagem <ArrowUpRight size={15} />
          </a>
        </div>

        <aside className="signature-card">
          <div className="signature-mark">AA</div>
          <p>Grandes resultados não vêm de uma única ideia, mas de boas decisões, constância e trabalho em equipe.</p>
          <strong>Alexandre Andrade</strong>
        </aside>
      </div>
    </section>
  )
}