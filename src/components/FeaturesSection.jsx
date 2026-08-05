/* src/components/FeaturesSection.jsx — Filosofía / características */
import { motion } from "framer-motion";
import Icon from "./Icon";
import SectionHead from "./SectionHead";
import { FEATURES } from "../data/content";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-24 relative grid-bg border-y border-white/5 bg-[#0f172a]/40 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          kicker="// 02 — CARACTERÍSTICAS"
          title={
            <>
              Hechas para trabajar,{" "}
              <span className="text-gradient">no para estorbar</span>
            </>
          }
          desc="La filosofía de JRPrograms aplicada a cada app de la familia."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="group rounded-2xl border border-white/5 bg-[#020617]/60 p-7 hover:border-[#818cf8]/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center text-white bg-gradient-to-br from-[#38bdf8] to-[#c084fc] group-hover:shadow-[0_0_30px_-8px_rgba(129,140,248,0.8)] transition-shadow">
                <Icon name={f.icon} className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {f.t}
              </h3>
              <p className="text-sm text-slate-400 leading-6">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
