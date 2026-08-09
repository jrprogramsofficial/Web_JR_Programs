/* src/i18n/Provider.jsx — Proveedor de idioma (es/en) con persistencia en localStorage */
import { useEffect, useMemo, useState } from "react";
import { ES } from "./es.js";
import { EN } from "./en.js";
import { I18nContext } from "./context.js";
import LanguageChooser from "./LanguageChooser.jsx";

const LANGS = { es: ES, en: EN };
const STORAGE_KEY = "jr-lang";

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* localStorage no disponible */
  }
  return null;
}

export default function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    if (!lang) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* sin persistencia */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: LANGS[lang ?? "es"] }), [lang]);

  return (
    <I18nContext.Provider value={value}>
      {children}
      {lang === null && <LanguageChooser setLang={setLang} />}
    </I18nContext.Provider>
  );
}
