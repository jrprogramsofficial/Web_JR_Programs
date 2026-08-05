/* src/components/Terminal.jsx — Terminal animada con efecto de escritura */
import { useState, useEffect, useMemo, useRef } from "react";
import { TERM_LINES } from "../data/content";

export default function Terminal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const total = useMemo(
    () => TERM_LINES.reduce((a, l) => a + l.t.length, 0),
    [],
  );
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(
      () => setStep((s) => (s >= total + 70 ? 0 : s + 1)),
      40,
    );
    return () => clearInterval(id);
  }, [total, visible]);

  const starts = useMemo(
    () =>
      TERM_LINES.reduce(
        (acc, l) => [...acc, acc[acc.length - 1] + l.t.length],
        [0],
      ),
    [],
  );

  const shown = TERM_LINES.map((l, i) => {
    const take = Math.max(0, Math.min(l.t.length, step - starts[i]));
    return { ...l, text: l.t.slice(0, take) };
  });
  const lastVisible = shown.reduce((acc, l, i) => (l.text ? i : acc), 0);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-white/10 bg-[#020617]/90 overflow-hidden shadow-[0_0_60px_-15px_rgba(56,189,248,0.4)]"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-[#38bdf8]/70" />
        <span className="w-3 h-3 rounded-full bg-[#818cf8]/70" />
        <span className="w-3 h-3 rounded-full bg-[#c084fc]/70" />
        <span className="ml-3 font-mono-tech text-xs text-slate-500">
          jr-cli — zsh
        </span>
      </div>
      <div className="p-5 font-mono-tech text-sm leading-7 min-h-[152px]">
        {shown.map((l, i) => (
          <div key={i} className={l.c}>
            {l.text}
            {i === lastVisible && (
              <span
                className="inline-block w-2 h-4 align-middle ml-0.5 bg-[#38bdf8]"
                style={{ animation: "blink 1s steps(1) infinite" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}