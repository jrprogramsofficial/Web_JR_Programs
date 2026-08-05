import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { useSEO, SEO_CONFIG } from "../utils/seo.jsx";

export default function NotFound() {
  useSEO(SEO_CONFIG.notfound);
  return (
    <main className="relative grid-bg min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono-tech text-[#38bdf8] text-sm tracking-[0.35em] mb-4">
          404 · NO ENCONTRADO
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Esa página <span className="text-gradient">no existe</span>.
        </h1>
        <p className="text-slate-400 mb-8">
          La página a la que intentas acceder no está disponible.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc] hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.7)] transition-shadow"
        >
          <Icon name="arrow" className="w-4 h-4 rotate-180" /> Volver al inicio
        </Link>
      </motion.div>
    </main>
  );
}