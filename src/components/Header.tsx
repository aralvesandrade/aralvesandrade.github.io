import { Github, Linkedin, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['Início', '#inicio'],
  ['Sobre', '#sobre'],
  ['Experiência', '#experiencia'],
  ['Stack', '#stack'],
  ['Contato', '#contato'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container nav">
        <a className="brand" href="#inicio" onClick={() => setOpen(false)}>
          <span className="brand-mark">AA</span>
          <span>Alexandre Andrade</span>
        </a>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <span className="nav-separator" />
          <a className="nav-social" href="https://github.com/aralvesandrade" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a className="nav-social" href="https://www.linkedin.com/in/aralvesandrade/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </nav>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}