/* src/i18n/LanguageChooser.jsx — Selector de idioma al primer ingreso */
import { motion } from "framer-motion";
import LogoMark from "../components/LogoMark";

export default function LanguageChooser({ setLang }) {
  return (
    <div className="fixed inset-0 z-[95] bg-[#020617]/90 backdrop-blur-sm flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#0f172a]/90 p-10 text-center overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent" />
        <LogoMark size="w-14 h-14 mx-auto mb-6" />
        <p className="font-mono-tech text-xs tracking-[0.35em] text-[#38bdf8] mb-3">
          JRPROGRAMS
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
          Elige tu idioma
        </h2>
        <p className="font-display text-lg text-slate-400 mb-8">
          Choose your language
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setLang("es")}
            className="group rounded-2xl border border-white/10 bg-[#020617]/60 px-6 py-5 hover:border-[#38bdf8]/50 transition-colors"
          >
            <span className="block font-display text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors">
              Español
            </span>
            <span className="font-mono-tech text-[10px] tracking-[0.3em] text-slate-500 mt-1.5 block">
              ES
            </span>
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className="group rounded-2xl border border-white/10 bg-[#020617]/60 px-6 py-5 hover:border-[#818cf8]/50 transition-colors"
          >
            <span className="block font-display text-xl font-bold text-white group-hover:text-[#818cf8] transition-colors">
              English
            </span>
            <span className="font-mono-tech text-[10px] tracking-[0.3em] text-slate-500 mt-1.5 block">
              EN
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
