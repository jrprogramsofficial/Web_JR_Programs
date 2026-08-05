/* src/components/AppGallery.jsx — Galería de capturas por grupos + lightbox */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

export default function AppGallery({ name, groups }) {
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => {
      setOpen((o) => {
        if (!o) return o;
        const g = groups[o.g];
        const len = g.imgs.length;
        return { g: o.g, i: (o.i + dir + len) % len };
      });
    },
    [groups],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  return (
    <section className="scroll-mt-24 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center mb-14"
      >
        <p className="font-mono-tech text-xs tracking-[0.35em] text-[#38bdf8] mb-4">
          // GALERÍA
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Así se ve <span className="text-gradient">{name}</span>
        </h2>
        <p className="text-slate-400 leading-7">
          Capturas reales de la aplicación, sección por sección.
        </p>
      </motion.div>

      <div className="space-y-10">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/5 bg-[#0f172a]/50 p-6 md:p-8"
          >
            <div className="flex items-start justify-between gap-6 mb-5">
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="font-mono-tech text-xs text-[#38bdf8]">
                    {g.num}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    {g.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-6">{g.desc}</p>
              </div>
              <span className="hidden sm:block font-mono-tech text-xs text-slate-600 shrink-0 mt-1">
                {g.imgs.length} {g.imgs.length === 1 ? "captura" : "capturas"}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {g.imgs.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setOpen({ g: gi, i })}
                  className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#020617] aspect-video cursor-zoom-in"
                  aria-label={`Ver captura de ${g.title}`}
                >
                  <img
                    src={src}
                    alt={`${name} — ${g.title} (${i + 1})`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <Icon
                    name="arrow"
                    className="absolute top-3 right-3 w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity -rotate-45"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] bg-[#020617]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/10 bg-[#0f172a]/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#38bdf8]/50 transition-colors"
            >
              <Icon name="close" className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Anterior"
              className="absolute left-4 md:left-8 w-11 h-11 rounded-full border border-white/10 bg-[#0f172a]/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#38bdf8]/50 transition-colors"
            >
              <Icon name="arrow" className="w-5 h-5 rotate-180" />
            </button>

            <motion.figure
              key={open.g + "-" + open.i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={groups[open.g].imgs[open.i]}
                alt={`${name} — ${groups[open.g].title}`}
                className="w-full max-h-[78vh] object-contain rounded-xl border border-white/10 bg-[#0f172a]"
              />
              <figcaption className="mt-4 text-center">
                <span className="font-display font-semibold text-white">
                  {name} · {groups[open.g].title}
                </span>
                <span className="ml-3 font-mono-tech text-xs text-slate-500">
                  {open.i + 1} / {groups[open.g].imgs.length}
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Siguiente"
              className="absolute right-4 md:right-8 w-11 h-11 rounded-full border border-white/10 bg-[#0f172a]/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#38bdf8]/50 transition-colors"
            >
              <Icon name="arrow" className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}