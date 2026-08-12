/* src/components/ProblemsSection.jsx — Problemas de negocio → soluciones */
import { motion } from "framer-motion";
import Icon from "./Icon";
import SectionHead from "./SectionHead";
import { useI18n } from "../i18n/context.js";

export default function ProblemsSection() {
  const { t } = useI18n();
  const { apps, problems, ui } = t;
  return (
    <section
      id="problemas"
      className="scroll-mt-24 relative grid-bg border-y border-white/5 bg-[#020617]/50 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHead
          kicker={ui.problemsKicker}
          title={
            <>
              {ui.problemsTitlePre}{" "}
              <span className="text-gradient">{ui.problemsTitleAccent}</span>
            </>
          }
          desc={ui.problemsDesc}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => {
            const appsFor = p.apps
              .map((slug) => apps.find((a) => a.slug === slug))
              .filter(Boolean);
            return (
              <motion.div
                key={p.problem}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group rounded-2xl border border-white/5 bg-[#0f172a]/60 p-7 hover:border-[#38bdf8]/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center text-white bg-gradient-to-br from-[#38bdf8] to-[#c084fc] group-hover:shadow-[0_0_30px_-8px_rgba(129,140,248,0.8)] transition-shadow">
                  <Icon name={p.icon} className="w-5 h-5" />
                </div>
                <p className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-[#f87171] mb-2">
                  {ui.problemLabel}
                </p>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {p.problem}
                </h3>
                <p className="text-sm text-slate-400 leading-6 mb-5">
                  {p.solution}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono-tech uppercase tracking-widest text-slate-500 mr-1">
                    {ui.solvedBy}
                  </span>
                  {appsFor.map((a) => (
                    <span
                      key={a.slug}
                      className={`inline-flex items-center gap-1.5 text-[10px] font-mono-tech uppercase tracking-widest text-white border border-white/10 rounded-full px-2.5 py-1 bg-gradient-to-r ${a.grad}`}
                    >
                      <Icon name={a.icon} className="w-3 h-3" /> {a.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}