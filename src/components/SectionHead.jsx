/* src/components/SectionHead.jsx — Encabezado reutilizable de sección */
import { motion } from "framer-motion";

export default function SectionHead({ kicker, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center mb-14"
    >
      <p className="font-mono-tech text-xs tracking-[0.35em] text-[#38bdf8] mb-4">
        {kicker}
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {desc && <p className="text-slate-400 leading-7">{desc}</p>}
    </motion.div>
  );
}
