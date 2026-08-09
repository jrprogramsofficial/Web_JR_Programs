/* src/i18n/context.js — Contexto y hook de idioma */
import { createContext, useContext } from "react";

export const I18nContext = createContext(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n debe usarse dentro de <LangProvider>");
  return ctx;
}
