import { createContext, useContext, useState, ReactNode } from 'react'
import pt from './translations/pt.json'
import en from './translations/en.json'
import es from './translations/es.json'

type Lang = 'pt' | 'en' | 'es'

const translations = { pt, en, es } as const

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  return path.split('.').reduce((acc: unknown, part: string) => {
    if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part]
    }
    return path
  }, obj) as string
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    return (saved as Lang) || 'pt'
  })

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang)
    localStorage.setItem('lang', newLang)
    document.documentElement.lang = newLang === 'pt' ? 'pt-BR' : newLang
  }

  const t = (key: string): string => {
    return getNestedValue(translations[lang] as Record<string, unknown>, key)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}