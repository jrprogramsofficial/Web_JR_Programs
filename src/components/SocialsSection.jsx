/* src/components/SocialsSection.jsx — Redes sociales */
import { motion } from "framer-motion";
import Icon from "./Icon";
import SectionHead from "./SectionHead";
import { useI18n } from "../i18n/context.js";

export default function SocialsSection() {
  const { t } = useI18n();
  return (
    <section id="redes" className="scroll-mt-24 max-w-5xl mx-auto px-6 py-20">
      <SectionHead
        kicker={t.ui.socialsKicker}
        title={
          <>
            {t.ui.socialsTitlePre}{" "}
            <span className="text-gradient">{t.ui.socialsTitleAccent}</span>
          </>
        }
        desc={t.ui.socialsDesc}
      />

      <div className="grid sm:grid-cols-3 gap-5">
        {t.socials.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group relative rounded-2xl border p-8 text-center transition-transform hover:-translate-y-1 ${s.cls}`}
          >
            <Icon
              name={s.icon}
              className="w-10 h-10 mx-auto mb-5 transition-transform group-hover:scale-110"
            />
            <h3 className="font-display text-lg font-bold text-white mb-1">
              {s.name}
            </h3>
            <p className="font-mono-tech text-[10px] tracking-widest uppercase opacity-80">
              {s.handle}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}