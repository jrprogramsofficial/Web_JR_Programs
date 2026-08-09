/* src/components/Marquee.jsx — Cinta infinita de conceptos */
import { useI18n } from "../i18n/context.js";

export default function Marquee() {
  const { t } = useI18n();
  return (
    <div className="overflow-hidden border-y border-white/5 bg-[#0f172a]/60 py-4">
      <div
        className="flex w-max gap-10"
        style={{ animation: "marqueeX 30s linear infinite" }}
      >
        {[...t.marquee, ...t.marquee].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono-tech text-xs tracking-[0.35em] text-slate-500"
          >
            {item} <span className="text-[#38bdf8]">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}
