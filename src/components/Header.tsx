import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../i18n";

const navLinks = [
  ["menu.inicio", "#inicio"],
  ["menu.sobre", "#sobre"],
  ["menu.stack", "#stack"],
  ["menu.projetos", "#projetos"],
  ["menu.experiencia", "#experiencia"],
  ["menu.contato", "#contato"],
] as const;

const langs = [
  { code: "pt" as const, label: "PT" },
  { code: "en" as const, label: "EN" },
  { code: "es" as const, label: "ES" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="header">
      <div className="container nav">
        <a className="brand" href="#inicio" onClick={() => setOpen(false)}>
          <span className="brand-mark">AA</span>
          <span>Alexandre Andrade</span>
        </a>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {navLinks.map(([key, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {t(key)}
            </a>
          ))}
          <span className="nav-separator" />
          <div className="lang-switcher">
            {langs.map(({ code, label }) => (
              <button
                key={code}
                className={`lang-btn${lang === code ? " active" : ""}`}
                onClick={() => setLang(code)}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="nav-separator" />
          <a
            className="nav-social"
            href="https://github.com/aralvesandrade"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            className="nav-social"
            href="https://www.linkedin.com/in/aralvesandrade/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={t("menu.abrir")}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
