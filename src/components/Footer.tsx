import { useLanguage } from '../i18n'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Alexandre Andrade. {t('footer.direitos')}</span>
        <div>
          <a href="https://github.com/aralvesandrade" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aralvesandrade/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}