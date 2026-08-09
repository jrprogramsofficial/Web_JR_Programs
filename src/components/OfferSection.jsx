/* src/components/OfferSection.jsx — Cómo obtener las apps (planes y precios) */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import SectionHead from "./SectionHead";
import { APPS, OFFER, OFFER_PLANS, OFFERS } from "../data/content";

export default function OfferSection() {
  return (
    <section id="oferta" className="scroll-mt-24 max-w-5xl mx-auto px-6 py-20">
      <SectionHead
        kicker="// 05 — OFERTA"
        title={
          <>
            Planes <span className="text-gradient">periódicos</span>
          </>
        }
        desc="VentaBox y TuOrden se contratan por suscripción: mensual, semestral o anual, en CUP o USD. Elige tu plan y escríbeme por WhatsApp."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {OFFERS.map((o, i) => {
          const app = APPS.find((a) => a.slug === o.slug);
          if (!app) return null;
          return (
            <motion.article
              key={o.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-white/10 bg-[#0f172a]/70 p-8 md:p-10 text-center overflow-hidden hover:border-[#38bdf8]/40 transition-colors duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent" />

              <span
                className={`w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${app.grad} shadow-[0_0_30px_-10px_rgba(56,189,248,0.6)]`}
              >
                <Icon name={app.icon} className="w-6 h-6" />
              </span>

              <h3 className="font-display text-2xl font-bold text-white mb-1">
                {app.name}
              </h3>
              <p className="font-mono-tech text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-6">
                {app.tagline}
              </p>

              <div className="space-y-3 mb-8 text-left">
                {OFFER_PLANS.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#020617]/60 px-5 py-3.5"
                  >
                    <span className="flex items-center gap-2 text-sm text-slate-300">
                      {p.label}
                      {p.badge && (
                        <span className="font-mono-tech text-[9px] uppercase tracking-widest text-[#34d399] border border-[#34d399]/30 bg-[#34d399]/10 rounded-full px-2 py-0.5">
                          {p.badge}
                        </span>
                      )}
                    </span>
                    <span className="font-mono-tech text-sm text-[#38bdf8] whitespace-nowrap">
                      {p.cup} · {p.usd}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-400 leading-6 mb-8">{o.detail}</p>

              <a
                href={OFFER.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc] hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.7)] transition-shadow"
              >
                <Icon name="whatsapp" className="w-4 h-4" /> Consultar por{" "}
                {OFFER.ctaLabel}
              </a>
              <div className="mt-4">
                <Link
                  to="/#redes"
                  className="text-xs text-slate-500 hover:text-[#38bdf8] transition-colors"
                >
                  o escríbeme por las redes
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl mx-auto mt-10 text-center font-mono-tech text-xs text-slate-500 leading-6"
      >
        {OFFER.cardNote}
      </motion.p>
    </section>
  );
}