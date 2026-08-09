/* src/i18n/Provider.jsx — Proveedor de idioma (es/en) con persistencia en localStorage */
import { useEffect, useMemo, useState } from "react";
import { ES } from "./es.js";
import { EN } from "./en.js";
import { I18nContext } from "./context.js";

const LANGS = { es: ES, en: EN };
const STORAGE_KEY = "jr-lang";

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* localStorage no disponible */
  }
  if (
    typeof navigator !== "undefined" &&
    navigator.language?.toLowerCase().startsWith("en")
  ) {
    return "en";
  }
  return "es";
}

export default function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* sin persistencia */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: LANGS[lang] }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
