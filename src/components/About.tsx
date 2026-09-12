import { Boxes, Cloud, Code2, Database, GitBranch, Lightbulb, ShieldCheck } from 'lucide-react'

const expertise = [
  [Code2, 'Desenvolvimento Backend e APIs'],
  [Cloud, 'Cloud & Infraestrutura'],
  [GitBranch, 'DevOps / GitOps'],
  [Database, 'Integração de Sistemas e Dados'],
  [Boxes, 'Arquitetura de Software'],
  [ShieldCheck, 'Observabilidade e Monitoramento'],
]

export function About() {
  return (
    <section id="sobre" className="section divider">
      <div className="container about-grid">
        <div>
          <div className="eyebrow"><span /> SOBRE MIM</div>
          <h2>Quem eu sou</h2>
          <p>
            Sou engenheiro de software com mais de 20 anos de experiência
            em desenvolvimento de sistemas, integração de soluções, cloud
            e infraestrutura.
          </p>
          <p>
            Atuo principalmente com Go, .NET, React, Docker, Kubernetes
            e bancos de dados relacionais e NoSQL, sempre buscando
            boas práticas, automação e soluções escaláveis.
          </p>

          <div className="flow">
            <div><Lightbulb /><span>Problema<br />de negócio</span></div>
            <b>→</b>
            <div><Boxes /><span>Arquitetura<br />eficiente</span></div>
            <b>→</b>
            <div><Cloud /><span>Soluções<br />escaláveis</span></div>
          </div>
        </div>

        <div className="expertise-card">
          <div className="card-title">EXPERIÊNCIA EM</div>
          {expertise.map(([Icon, text]) => (
            <div className="expertise-row" key={text as string}>
              <span className="icon-box"><Icon size={17} /></span>
              <span>{text as string}</span>
            </div>
          ))}
        </div>

        <blockquote>
          <span>“</span>
          Tecnologia é mais poderosa quando resolve problemas reais,
          melhora processos e gera valor para as pessoas.
          <small />
        </blockquote>
      </div>
    </section>
  )
}