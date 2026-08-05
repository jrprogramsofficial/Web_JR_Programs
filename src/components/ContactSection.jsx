/* src/components/ContactSection.jsx — Soporte técnico por Gmail + redes sociales */
import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";
import LogoMark from "./LogoMark";
import { APPS, SUPPORT_EMAIL } from "../data/content";

const APP_OPTIONS = [...APPS.map((a) => a.name), "Otro"];

export default function ContactSection() {
  const [app, setApp] = useState(APP_OPTIONS[0]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const openGmail = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const subject = `Soporte técnico · ${app}`;
    const body = `App: ${app}\nCorreo de contacto: ${
      email.trim() || "no indicado"
    }\nMensaje:\n${message.trim()}`;
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacto" className="scroll-mt-24 max-w-5xl mx-auto px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl border border-white/10 overflow-hidden grid-bg bg-[#0f172a]/80 p-10 md:p-16 text-center"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, rgba(56,189,248,0.15), transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent" />

        <LogoMark size="w-14 h-14 mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          ¿Problemas con una app?{" "}
          <span className="text-gradient">Soporte técnico</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-7">
          ¿Un error o una duda con VentaBox o TuOrden? Escríbenos y te
          responderemos por correo lo antes posible.
        </p>

        <form
          onSubmit={openGmail}
          className="max-w-lg mx-auto mb-8 text-left space-y-4"
        >
          <label className="block">
            <span className="block text-xs font-mono-tech uppercase tracking-widest text-slate-500 mb-2">
              Se trata de…
            </span>
            <select
              value={app}
              onChange={(e) => setApp(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[#020617]/90 px-4 py-3 text-sm text-white outline-none focus:border-[#38bdf8]/60 transition-all appearance-none"
            >
              {APP_OPTIONS.map((o) => (
                <option key={o} value={o} className="bg-[#0f172a]">
                  {o}
                </option>
              ))}
            </select>
          </label>

          <label className="block mt-4">
            <span className="block text-xs font-mono-tech uppercase tracking-widest text-slate-500 mb-2">
              Tu correo (opcional)
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="w-full rounded-lg border border-white/10 bg-[#020617]/90 px-5 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-[#38bdf8]/60 focus:shadow-[0_0_25px_-8px_rgba(56,189,248,0.5)] transition-all"
            />
          </label>

          <label className="block mt-4">
            <span className="block text-xs font-mono-tech uppercase tracking-widest text-slate-500 mb-2">
              Mensaje
            </span>
            <textarea
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Cuéntanos qué te ocurre…"
              className="w-full rounded-lg border border-white/10 bg-[#020617]/90 px-5 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-[#38bdf8]/60 focus:shadow-[0_0_25px_-8px_rgba(56,189,248,0.5)] transition-all resize-none"
            />
          </label>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc] hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.7)] transition-shadow"
            >
              <Icon name="mail" className="w-4 h-4" /> Enviar por Gmail
            </button>
            <span className="font-mono-tech text-[11px] text-slate-500">
              Se abrirá tu Gmail con el mensaje listo.
            </span>
          </div>
        </form>

        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#38bdf8] hover:text-white transition-colors mb-10"
        >
          <Icon name="mail" className="w-3.5 h-3.5" /> {SUPPORT_EMAIL}
        </a>

        <p className="font-mono-tech text-xs text-slate-500 tracking-widest">
          RESPUESTA RÁPIDA · GMAIL
        </p>
      </motion.div>
    </section>
  );
}