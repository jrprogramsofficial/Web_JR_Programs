/* src/components/Hero.jsx — Sección principal */
import { motion } from "framer-motion";
import Icon from "./Icon";
import Terminal from "./Terminal";
import HeroLogo from "./HeroLogo";
import { SOCIALS } from "../data/content";

export default function Hero() {
  return (
    <section id="inicio" className="relative grid-bg pt-32 pb-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(56,189,248,0.12), transparent 70%), radial-gradient(40% 40% at 85% 60%, rgba(192,132,252,0.08), transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#38bdf8] border border-[#38bdf8]/30 bg-[#38bdf8]/10 rounded-full px-3 py-1.5 mb-6"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"
              style={{ animation: "pulseGlow 2s infinite" }}
            />
            listas para usar · windows
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            Tus ventas y tu inventario,{" "}
            <span className="text-gradient">bajo control</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg leading-8 mb-8 max-w-xl"
          >
            JRPrograms presenta{" "}
            <span className="text-[#38bdf8] font-semibold">VentaBox</span> y{" "}
            <span className="text-[#c084fc] font-semibold">TuOrden</span>: dos
            herramientas de escritorio para gestionar inventario, ventas y
            órdenes de tu negocio, sin complicaciones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#apps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc] hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.7)] transition-shadow"
            >
              Ver las apps <Icon name="arrow" className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-slate-200 border border-white/10 hover:border-[#818cf8]/50 hover:text-[#818cf8] transition-colors"
            >
              Características
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <span className="text-xs font-mono-tech uppercase tracking-widest text-slate-500">
              Sígueme
            </span>
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 transition-colors"
                >
                  <Icon name={s.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Terminal />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div style={{ animation: "floatY 7s ease-in-out infinite" }}>
            <HeroLogo />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-2 md:right-10 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0f172a]/90 backdrop-blur px-4 py-3 shadow-[0_0_30px_-10px_rgba(56,189,248,0.5)]"
          >
            <Icon name="windows" className="w-4 h-4 text-[#38bdf8]" />
            <p className="text-[11px] font-mono-tech text-slate-300">Windows</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 left-2 md:left-8 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0f172a]/90 backdrop-blur px-4 py-3 shadow-[0_0_30px_-10px_rgba(192,132,252,0.5)]"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#34d399]"
              style={{ animation: "pulseGlow 2s infinite" }}
            />
            <p className="text-[11px] font-mono-tech text-slate-300">
              listas para usar
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
