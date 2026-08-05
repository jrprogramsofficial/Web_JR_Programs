/* src/components/Navbar.jsx — Barra de navegación fija + menú móvil */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";
import LogoMark from "./LogoMark";
import { NAV_LINKS, SOCIALS } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#020617]/85 backdrop-blur-md md:backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <LogoMark />
          <span className="font-display font-bold text-white text-lg tracking-tight">
            JrPrograms
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5 mr-1">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 transition-colors"
              >
                <Icon name={s.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-slate-400 hover:text-[#38bdf8] transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm font-semibold text-slate-200 px-4 py-2 rounded-lg border border-white/10 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] transition-colors"
          >
            Soporte
          </a>
          <a
            href="#redes"
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#c084fc] hover:shadow-[0_0_30px_-8px_rgba(56,189,248,0.7)] transition-shadow"
          >
            Contáctame
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300"
          aria-label="menu"
        >
          <Icon name={menuOpen ? "close" : "menu"} className="w-6 h-6" />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    onClick={() => setMenuOpen(false)}
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 transition-colors"
                  >
                    <Icon name={s.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
              {NAV_LINKS.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-slate-300 hover:text-[#38bdf8]"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-slate-200 px-4 py-2 rounded-lg border border-white/10 text-center"
              >
                Soporte
              </a>
              <a
                href="#redes"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#c084fc] text-center"
              >
                Contáctame
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
