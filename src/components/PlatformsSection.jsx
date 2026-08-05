/* src/components/PlatformsSection.jsx — Estado por plataforma */
import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { PLATFORMS } from "../data/content";

export default function PlatformsSection() {
  return (
    <section
      id="plataformas"
      className="scroll-mt-24 max-w-5xl mx-auto px-6 py-20"
    >
      <SectionHead
        kicker="// 03 — PLATAFORMAS"
        title={
          <>
            Windows hoy,{" "}
            <span className="text-gradient">mañana ya veremos</span>
          </>
        }
        desc="Estamos enfocados en una sola plataforma para hacer las cosas bien. El resto llegará cuando tenga que llegar."
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {PLATFORMS.map((p, i) => (
          <motion.div
            key={p.os}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`rounded-2xl border p-5 text-center ${
              p.st === "ok"
                ? "border-[#38bdf8]/40 bg-gradient-to-b from-[#38bdf8]/10 to-[#c084fc]/5 shadow-[0_0_40px_-12px_rgba(56,189,248,0.4)]"
                : "border-white/5 bg-[#0f172a]/50 opacity-60"
            }`}
          >
            <p
              className={`font-display font-bold ${p.st === "ok" ? "text-white" : "text-slate-500"}`}
            >
              {p.os}
            </p>
            <p
              className={`mt-2 text-[10px] font-mono-tech uppercase tracking-widest ${p.st === "ok" ? "text-[#38bdf8]" : "text-slate-600"}`}
            >
              {p.st === "ok" ? "disponible" : "por ahora no"}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
