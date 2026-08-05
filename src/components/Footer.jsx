/* src/components/Footer.jsx — Pie de página */
import LogoMark from "./LogoMark";
import Icon from "./Icon";
import { SOCIALS } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <LogoMark />
            <span className="font-display font-bold text-white text-lg">
              JrPrograms
            </span>
          </div>
          <p className="font-mono-tech text-[10px] tracking-[0.45em] text-slate-500 mb-4">
            SOFTWARE DEVELOPER
          </p>
          <p className="text-sm text-slate-400 leading-6 max-w-sm">
            Herramientas de gestión para tu negocio: inventario, ventas y
            órdenes, simples y al grano.
          </p>
          <div className="flex gap-3 mt-5">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className={`w-9 h-9 rounded-lg border flex items-center justify-center ${s.cls}`}
              >
                <Icon name={s.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono-tech text-xs tracking-[0.3em] text-slate-500 mb-4">
            APPS
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#apps"
                className="text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                VentaBox — inventario y ventas
              </a>
            </li>
            <li>
              <a
                href="#apps"
                className="text-slate-400 hover:text-[#c084fc] transition-colors"
              >
                TuOrden — bar & restaurante
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono-tech text-xs tracking-[0.3em] text-slate-500 mb-4">
            NAVEGACIÓN
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#apps"
                className="text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                Apps
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                Características
              </a>
            </li>
            <li>
              <a
                href="#plataformas"
                className="text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                Plataformas
              </a>
            </li>
            <li>
              <a
                href="#redes"
                className="text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                Redes
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-slate-400 hover:text-[#38bdf8] transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center">
        <p className="font-mono-tech text-xs text-slate-600">
          © 2026 JRPrograms · hecho con &lt;/&gt; y café
        </p>
      </div>
    </footer>
  );
}
