export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Alexandre Andrade. Todos os direitos reservados.</span>
        <div>
          <a href="https://github.com/aralvesandrade" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aralvesandrade/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/curriculo.pdf">Currículo</a>
          <span>PT</span>
        </div>
      </div>
    </footer>
  )
}