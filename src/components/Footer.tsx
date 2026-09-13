import { useLanguage } from '../i18n'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Alexandre Andrade. {t('footer.direitos')}</span>
      </div>
    </footer>
  )
}