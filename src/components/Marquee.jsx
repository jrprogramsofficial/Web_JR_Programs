/* src/components/Marquee.jsx — Cinta infinita de conceptos */
import { MARQUEE } from "../data/content";

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/5 bg-[#0f172a]/60 py-4">
      <div
        className="flex w-max gap-10"
        style={{ animation: "marqueeX 30s linear infinite" }}
      >
        {[...MARQUEE, ...MARQUEE].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono-tech text-xs tracking-[0.35em] text-slate-500"
          >
            {t} <span className="text-[#38bdf8]">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}
