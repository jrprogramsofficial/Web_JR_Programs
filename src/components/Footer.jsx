/* src/components/Footer.jsx — Pie de página */
import LogoMark from "./LogoMark";
import Icon from "./Icon";
import { useI18n } from "../i18n/context.js";

export default function Footer() {
  const { t } = useI18n();
  const { apps, socials, ui } = t;
  const footerLinks = [
    [t.nav[0][0], "#apps"],
    [t.nav[1][0], "#features"],
    [t.nav[2][0], "#plataformas"],
    [t.nav[4][0], "#redes"],
    [ui.footContact, "#contacto"],
  ];
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
            {ui.footDeveloper}
          </p>
          <p className="text-sm text-slate-400 leading-6 max-w-sm">
            {ui.footDesc}
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map((s) => (
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
            {ui.footAppsTitle}
          </h4>
          <ul className="space-y-3 text-sm">
            {apps.map((a) => (
              <li key={a.slug}>
                <a
                  href="#apps"
                  className={`text-slate-400 hover:text-[#38bdf8] transition-colors ${
                    a.slug === "tuorden" ? "hover:text-[#c084fc]" : ""
                  }`}
                >
                  {a.name} — {a.tagline}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono-tech text-xs tracking-[0.3em] text-slate-500 mb-4">
            {ui.footNavTitle}
          </h4>
          <ul className="space-y-3 text-sm">
            {footerLinks.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-slate-400 hover:text-[#38bdf8] transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center">
        <p className="font-mono-tech text-xs text-slate-600">{ui.footCopy}</p>
      </div>
    </footer>
  );
}
