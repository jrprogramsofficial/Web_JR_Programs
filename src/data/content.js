/* ============================================================
   src/data/content.js
   Todo el contenido editable de la web en un solo lugar.

   CAPTURAS REALES DE TUS APPS:
   Guarda las capturas en la carpeta `public/` de tu proyecto:
     - public/images/VentaBox.png   → dashboard de VentaBox
     - public/images/TuOrden.png    → dashboard de TuOrden
   Las galerías por sección viven en `src/data/gallery.js` y apuntan a
   public/images/<App>/<grupo>/.
   Mientras no existan, se muestra la imagen de respaldo (fallback).
   ============================================================ */

export const NAV_LINKS = [
  ["Apps", "#apps"],
  ["Características", "#features"],
  ["Plataformas", "#plataformas"],
  ["Redes", "#redes"],
];

export const TERM_LINES = [
  { t: "$ jr apps --list", c: "text-slate-200" },
  { t: "▸ VentaBox · inventario y ventas", c: "text-[#38bdf8]" },
  { t: "▸ TuOrden · bar & restaurante", c: "text-[#818cf8]" },
  { t: "✔ 2 apps · windows · listas para usar", c: "text-[#c084fc]" },
];

export const APPS = [
  {
    name: "VentaBox",
    slug: "ventabox",
    tagline: "Sistema de inventario y ventas",
    ver: "v0.1.0",
    desc: "Controla el inventario general y por tienda, registra ventas, mermas y movimientos, y consulta reportes claros de tu negocio.",
    bullets: [
      "Inventario general y por tienda",
      "Ventas, mermas y movimientos",
      "Reportes e historial de ventas",
    ],
    img: "/images/VentaBox.png",
    fallback:
      "https://image.qwenlm.ai/public_source/3a2bb54f-4db9-4140-93ea-2f4cb3ec538e/154d778c7-0251-4e72-b4f8-7acfaca5aa86.png",
    icon: "cart",
    grad: "from-[#38bdf8] to-[#818cf8]",
  },
  {
    name: "TuOrden",
    slug: "tuorden",
    tagline: "Gestión para bar y restaurante",
    ver: null,
    desc: "Órdenes, cuentas pendientes y control de materiales para que tu bar o restaurante funcione sin caos y con números claros.",
    bullets: [
      "Nueva orden y cuentas pendientes",
      "Materiales y movimientos",
      "Reportes y comprobantes",
    ],
    img: "/images/TuOrden.png",
    fallback:
      "https://image.qwenlm.ai/public_source/3a2bb54f-4db9-4140-93ea-2f4cb3ec538e/12e7ccd58-3681-4973-aa78-5ed7926d9fb0.png",
    icon: "box",
    grad: "from-[#818cf8] to-[#c084fc]",
  },
];

export const FEATURES = [
  {
    icon: "bolt",
    t: "Ligeras y rápidas",
    d: "Aplicaciones de escritorio fluidas en tu PC con Windows, sin procesos pesados ni esperas.",
  },
  {
    icon: "target",
    t: "Enfocadas en tu negocio",
    d: "Sin funciones de relleno: solo lo necesario para vender y mantener tu inventario en orden.",
  },
  {
    icon: "layers",
    t: "Windows primero",
    d: "Hechas para Windows; más plataformas llegarán en el futuro.",
  },
  {
    icon: "refresh",
    t: "Mejoras continuas",
    d: "JRPrograms trabaja de forma continua en nuevas versiones y mejoras de ambas apps.",
  },
];

export const PLATFORMS = [
  { os: "Windows", st: "ok" },
  { os: "macOS", st: "no" },
  { os: "Linux", st: "no" },
  { os: "Android", st: "no" },
  { os: "iOS", st: "no" },
];

export const MARQUEE = [
  "VENTAS",
  "INVENTARIO",
  "CAJA",
  "STOCK",
  "REPORTES",
  "MERMAS",
  "WINDOWS",
];

export const SUPPORT_EMAIL = "jrprogramsofficial@gmail.com";

export const SOCIALS = [
  {
    name: "Telegram",
    handle: "@jrprograms",
    url: "https://t.me/jrprograms",
    icon: "telegram",
    cls: "text-[#38bdf8] border-[#38bdf8]/30 bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 hover:border-[#38bdf8]/60",
  },
  {
    name: "Instagram",
    handle: "@jrprograms",
    url: "https://instagram.com/jrprograms",
    icon: "instagram",
    cls: "text-[#f472b6] border-[#f472b6]/30 bg-[#f472b6]/10 hover:bg-[#f472b6]/20 hover:border-[#f472b6]/60",
  },
  {
    name: "YouTube",
    handle: "JRPrograms",
    url: "https://youtube.com/@jrprograms",
    icon: "youtube",
    cls: "text-[#f87171] border-[#f87171]/30 bg-[#f87171]/10 hover:bg-[#f87171]/20 hover:border-[#f87171]/60",
  },
];
