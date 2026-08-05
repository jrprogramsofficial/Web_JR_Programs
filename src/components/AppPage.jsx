/* src/components/AppPage.jsx — Página dedicada de cada app (VentaBox / TuOrden) */
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "./Icon";
import AppGallery from "./AppGallery";
import NotFound from "./NotFound";
import { APPS } from "../data/content";
import { GALLERY } from "../data/gallery";
import { useSEO, SEO_CONFIG } from "../utils/seo.jsx";

const handleImgError = (e, fallback) => {
  const el = e.currentTarget;
  if (fallback && !el.dataset.fb) {
    el.dataset.fb = "1";
    el.src = fallback;
  }
};

export default function AppPage() {
  const { slug } = useParams();
  const app = APPS.find((a) => a.slug === slug);

  const seoKey = slug === 'ventabox' ? 'ventabox' : 'tuorden';
  useSEO(SEO_CONFIG[seoKey]);

  if (!app) return <NotFound />;

  return (
    <main className="relative grid-bg pt-28 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(56,189,248,0.1), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#38bdf8] transition-colors"
          >
            <Icon name="arrow" className="w-4 h-4 rotate-180" /> Volver al
            inicio
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#34d399] border border-[#34d399]/30 bg-[#34d399]/10 rounded-full px-3 py-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#34d399]"
                  style={{ animation: "pulseGlow 2s infinite" }}
                />
                lista para usar
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono-tech text-slate-400 border border-white/10 rounded-full px-3 py-1.5">
                <Icon name="windows" className="w-3 h-3" /> Windows
              </span>
              {app.ver && (
                <span className="font-mono-tech text-xs text-slate-600">
                  {app.ver}
                </span>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-3"
            >
              {app.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-[#38bdf8] font-semibold mb-6"
            >
              {app.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-8 mb-8"
            >
              {app.desc}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {app.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <Icon
                    name="check"
                    className="w-5 h-5 text-[#38bdf8] shrink-0"
                  />
                  {b}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/#redes"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc] hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.7)] transition-shadow"
              >
                <Icon name="arrow" className="w-4 h-4" /> Contáctame
              </Link>
              <Link
                to="/#apps"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-slate-300 border border-white/10 hover:border-[#818cf8]/50 hover:text-[#818cf8] transition-colors"
              >
                Ver las apps
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className={`absolute -inset-6 rounded-3xl bg-gradient-to-br ${app.grad} opacity-15 blur-2xl`}
            />
            <div className="relative rounded-2xl border border-white/10 bg-[#0f172a]/80 overflow-hidden shadow-[0_0_60px_-20px_rgba(56,189,248,0.5)]">
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent`}
              />
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-[#38bdf8]/70" />
                <span className="w-3 h-3 rounded-full bg-[#818cf8]/70" />
                <span className="w-3 h-3 rounded-full bg-[#c084fc]/70" />
                <span className="ml-3 font-mono-tech text-xs text-slate-500">
                  {app.name} · vista previa
                </span>
              </div>
              <div className="relative aspect-video bg-[#020617]">
                <img
                  src={app.img}
                  alt={`Interfaz de ${app.name}`}
                  onError={(e) => handleImgError(e, app.fallback)}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent" />
                <span
                  className={`absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${app.grad}`}
                >
                  <Icon name={app.icon} className="w-5 h-5" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <AppGallery name={app.name} groups={GALLERY[app.slug] || []} />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-24 rounded-3xl border border-white/10 bg-[#0f172a]/70 p-10 md:p-14 text-center overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent" />
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
            ¿Problemas? <span className="text-gradient">Te ayudamos</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-7">
            {app.name} ya está lista para Windows y lista para trabajar. ¿Un
            error o una duda? Escríbenos al soporte por correo o por mis
            redes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc] hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.7)] transition-shadow"
            >
              <Icon name="mail" className="w-4 h-4" /> Soporte técnico
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-slate-300 border border-white/10 hover:border-[#818cf8]/50 hover:text-[#818cf8] transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}