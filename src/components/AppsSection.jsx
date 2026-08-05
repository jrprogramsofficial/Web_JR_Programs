/* src/components/AppsSection.jsx — Tarjetas de VentaBox y TuOrden */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import SectionHead from "./SectionHead";
import { APPS } from "../data/content";

/* Si la captura local aún no existe, muestra el respaldo sin romper el diseño */
const handleImgError = (e, fallback) => {
  const el = e.currentTarget;
  if (fallback && !el.dataset.fb) {
    el.dataset.fb = "1";
    el.src = fallback;
  }
};

export default function AppsSection() {
  return (
    <section id="apps" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-20">
      <SectionHead
        kicker="// 01 — LAS APPS"
        title={
          <>
            Dos herramientas, <span className="text-gradient">un objetivo</span>
          </>
        }
        desc="Cada app resuelve una parte del día a día de tu negocio: vender y mantener todo en orden."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {APPS.map((app, i) => (
          <motion.article
            key={app.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative rounded-2xl border border-white/5 bg-[#0f172a]/70 overflow-hidden hover:border-[#38bdf8]/40 transition-colors duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative overflow-hidden aspect-video bg-[#020617]">
              <img
                src={app.img}
                alt={`Interfaz de ${app.name}`}
                onError={(e) => handleImgError(e, app.fallback)}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
              <span className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-mono-tech uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur border text-[#34d399] border-[#34d399]/30 bg-[#020617]/60">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#34d399]"
                  style={{ animation: "pulseGlow 2s infinite" }}
                />
                lista para usar
              </span>
            </div>

            <div className="p-7 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${app.grad}`}
                  >
                    <Icon name={app.icon} className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white leading-none">
                      {app.name}
                    </h3>
                    <p className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-slate-500 mt-1.5">
                      {app.tagline}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="flex items-center gap-1.5 text-[10px] font-mono-tech uppercase tracking-widest text-slate-400 border border-white/10 rounded-full px-2.5 py-1">
                    <Icon name="windows" className="w-3 h-3" /> Windows
                  </span>
                  {app.ver && (
                    <span className="font-mono-tech text-[10px] text-slate-600">
                      {app.ver}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-6">{app.desc}</p>

              <ul className="space-y-2.5">
                {app.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2.5 text-sm text-slate-300"
                  >
                    <Icon
                      name="check"
                      className="w-4 h-4 text-[#38bdf8] shrink-0"
                    />{" "}
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                to={`/apps/${app.slug}`}
                className="group/link inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[#38bdf8] hover:text-white transition-colors"
              >
                Ver página de {app.name}
                <Icon
                  name="arrow"
                  className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
