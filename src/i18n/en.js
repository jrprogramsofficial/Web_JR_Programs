/* src/i18n/en.js — English dictionary */

const BASE = import.meta.env.BASE_URL;
const withBase = (p) => BASE + p.replace(/^\//, "");

export const EN = {
  nav: [
    ["Apps", "#apps"],
    ["Features", "#features"],
    ["Platforms", "#plataformas"],
    ["Pricing", "#oferta"],
    ["Socials", "#redes"],
  ],

  termLines: [
    { t: "$ jr apps --list", c: "text-slate-200" },
    { t: "▸ VentaBox · inventory & sales", c: "text-[#38bdf8]" },
    { t: "▸ TuOrden · bar & restaurant", c: "text-[#818cf8]" },
    { t: "✔ 2 apps · windows · ready to use", c: "text-[#c084fc]" },
  ],

  apps: [
    {
      name: "VentaBox",
      slug: "ventabox",
      tagline: "Inventory and sales system",
      ver: "v1.0",
      desc: "Control general and per-store inventory, record sales, waste and movements, and get clear reports for your business.",
      bullets: [
        "General and per-store inventory",
        "Sales, waste and movements",
        "Reports and sales history",
      ],
      img: withBase("/images/VentaBox.png"),
      fallback:
        "https://image.qwenlm.ai/public_source/3a2bb54f-4db9-4140-93ea-2f4cb3ec538e/154d778c7-0251-4e72-b4f8-7acfaca5aa86.png",
      icon: "cart",
      grad: "from-[#38bdf8] to-[#818cf8]",
    },
    {
      name: "TuOrden",
      slug: "tuorden",
      tagline: "Bar and restaurant management",
      ver: null,
      desc: "Orders, pending bills and supplies control so your bar or restaurant runs without chaos and with clear numbers.",
      bullets: [
        "New order and pending bills",
        "Supplies and movements",
        "Reports and receipts",
      ],
      img: withBase("/images/TuOrden.png"),
      fallback:
        "https://image.qwenlm.ai/public_source/3a2bb54f-4db9-4140-93ea-2f4cb3ec538e/12e7ccd58-3681-4973-aa78-5ed7926d9fb0.png",
      icon: "box",
      grad: "from-[#818cf8] to-[#c084fc]",
    },
  ],

  features: [
    {
      icon: "bolt",
      t: "Light and fast",
      d: "Smooth desktop apps on your Windows PC, without heavy processes or waiting.",
    },
    {
      icon: "target",
      t: "Focused on your business",
      d: "No filler features: only what you need to sell and keep your inventory in order.",
    },
    {
      icon: "layers",
      t: "Windows first",
      d: "Built for Windows; more platforms will come in the future.",
    },
    {
      icon: "refresh",
      t: "Continuous improvements",
      d: "JRPrograms constantly works on new versions and improvements for both apps.",
    },
  ],

  platforms: [
    { os: "Windows", st: "ok" },
    { os: "macOS", st: "no" },
    { os: "Linux", st: "no" },
    { os: "Android", st: "no" },
    { os: "iOS", st: "no" },
  ],

  marquee: [
    "SALES",
    "INVENTORY",
    "CASH",
    "STOCK",
    "REPORTS",
    "WASTE",
    "WINDOWS",
  ],

  socials: [
    {
      name: "Telegram",
      handle: "@JrPrograms",
      url: "https://t.me/JrPrograms",
      icon: "telegram",
      cls: "text-[#38bdf8] border-[#38bdf8]/30 bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 hover:border-[#38bdf8]/60",
    },
    {
      name: "Instagram",
      handle: "@jrprograms",
      url: "https://www.instagram.com/jrprograms/",
      icon: "instagram",
      cls: "text-[#f472b6] border-[#f472b6]/30 bg-[#f472b6]/10 hover:bg-[#f472b6]/20 hover:border-[#f472b6]/60",
    },
    {
      name: "YouTube",
      handle: "JRPrograms",
      url: "https://www.youtube.com/channel/UC_YQ-bw0dsgmM0saOV2-1DA",
      icon: "youtube",
      cls: "text-[#f87171] border-[#f87171]/30 bg-[#f87171]/10 hover:bg-[#f87171]/20 hover:border-[#f87171]/60",
    },
  ],

  supportEmail: "jrprogramsofficial@gmail.com",

  offer: {
    ctaLabel: "WhatsApp",
    ctaUrl: "https://wa.me/5351431995",
    cardNote:
      "Pick the plan that fits your business and message me on WhatsApp to arrange payment and get your license.",
  },

  offerPlans: [
    { label: "Monthly", cup: "3000 CUP", usd: "$5" },
    { label: "Every 6 months", cup: "15000 CUP", usd: "$25" },
    { label: "Yearly", cup: "30000 CUP", usd: "$48", badge: "best value" },
  ],

  offers: [
    {
      slug: "ventabox",
      detail:
        "Recurring subscription for your store: inventory and sales always up to date.",
    },
    {
      slug: "tuorden",
      detail:
        "Recurring subscription for your bar or restaurant: orders and bills without chaos.",
    },
  ],

  gallery: {
    ventabox: [
      {
        num: "01",
        title: "Dashboard",
        desc: "Business overview: today's sales, products and quick access to the whole system.",
        imgs: [
          "/images/VentaBox/1-Dashboard/Screenshot_2026-08-05_00-38-38.png",
          "/images/VentaBox/1-Dashboard/Screenshot_2026-08-05_00-46-01.png",
        ],
      },
      {
        num: "02",
        title: "General Inventory",
        desc: "All your stock in one place: quantities, prices and status of every product.",
        imgs: [
          "/images/VentaBox/2-Inventario General/Screenshot_2026-08-05_00-38-55.png",
          "/images/VentaBox/2-Inventario General/Screenshot_2026-08-05_00-39-11.png",
          "/images/VentaBox/2-Inventario General/Screenshot_2026-08-05_00-41-19.png",
        ],
      },
      {
        num: "03",
        title: "Incoming Goods",
        desc: "Record goods entering your inventory in seconds.",
        imgs: ["/images/VentaBox/3-Entrantes/Screenshot_2026-08-05_00-39-37.png"],
      },
      {
        num: "04",
        title: "Warehouses",
        desc: "Manage multiple warehouses and control stock levels for each one.",
        imgs: [
          "/images/VentaBox/4-Almacenes/Screenshot_2026-08-05_00-40-10.png",
          "/images/VentaBox/4-Almacenes/Screenshot_2026-08-05_00-40-19.png",
        ],
      },
      {
        num: "05",
        title: "Store Inventory",
        desc: "Per-store or branch inventory, with the detail your business needs.",
        imgs: [
          "/images/VentaBox/5-Inventario Tienda/Screenshot_2026-08-05_00-40-29.png",
          "/images/VentaBox/5-Inventario Tienda/Screenshot_2026-08-05_00-40-39.png",
          "/images/VentaBox/5-Inventario Tienda/Screenshot_2026-08-05_00-40-51.png",
          "/images/VentaBox/5-Inventario Tienda/Screenshot_2026-08-05_00-41-05.png",
        ],
      },
      {
        num: "06",
        title: "Sales",
        desc: "Complete sales record: products, quantities and totals instantly.",
        imgs: [
          "/images/VentaBox/6-Ventas/Screenshot_2026-08-05_00-36-29.png",
          "/images/VentaBox/6-Ventas/Screenshot_2026-08-05_00-36-54.png",
          "/images/VentaBox/6-Ventas/Screenshot_2026-08-05_00-37-04.png",
          "/images/VentaBox/6-Ventas/Screenshot_2026-08-05_00-37-19.png",
          "/images/VentaBox/6-Ventas/Screenshot_2026-08-05_00-38-15.png",
        ],
      },
      {
        num: "07",
        title: "Movements",
        desc: "Every entry and exit is recorded so nothing gets lost.",
        imgs: ["/images/VentaBox/7-Movimientos/Screenshot_2026-08-05_00-41-41.png"],
      },
      {
        num: "08",
        title: "Sales History",
        desc: "Browse all your sales by date, product or ticket.",
        imgs: [
          "/images/VentaBox/8-Historial de Ventas/Screenshot_2026-08-05_00-42-05.png",
          "/images/VentaBox/8-Historial de Ventas/Screenshot_2026-08-05_00-42-16.png",
          "/images/VentaBox/8-Historial de Ventas/Screenshot_2026-08-05_00-42-32.png",
        ],
      },
      {
        num: "09",
        title: "Reports",
        desc: "Clear sales and inventory reports to make data-driven decisions.",
        imgs: [
          "/images/VentaBox/9-Reportes/Screenshot_2026-08-05_00-43-22.png",
          "/images/VentaBox/9-Reportes/Screenshot_2026-08-05_00-43-33.png",
        ],
      },
      {
        num: "10",
        title: "Waste",
        desc: "Track waste and losses to keep your inventory accurate.",
        imgs: [
          "/images/VentaBox/10-Mermas/Screenshot_2026-08-05_00-43-49.png",
          "/images/VentaBox/10-Mermas/Screenshot_2026-08-05_00-44-08.png",
          "/images/VentaBox/10-Mermas/Screenshot_2026-08-05_00-44-18.png",
        ],
      },
      {
        num: "11",
        title: "Sale Menu",
        desc: "Fast checkout interface to record sales without friction.",
        imgs: ["/images/VentaBox/11-Menu Venta/Screenshot_2026-08-05_00-44-44.png"],
      },
      {
        num: "12",
        title: "Settings",
        desc: "Set up your business: stores, taxes and system preferences.",
        imgs: [
          "/images/VentaBox/12-Configuraciones/Screenshot_2026-08-05_00-44-55.png",
          "/images/VentaBox/12-Configuraciones/Screenshot_2026-08-05_00-45-08.png",
          "/images/VentaBox/12-Configuraciones/Screenshot_2026-08-05_00-45-37.png",
        ],
      },
    ],
    tuorden: [
      {
        num: "01",
        title: "Dashboard",
        desc: "The state of your venue at a glance: active orders and today's activity.",
        imgs: [
          "/images/TuOrden/1-Dashboard/Screenshot_2026-08-05_01-00-10.png",
          "/images/TuOrden/1-Dashboard/Screenshot_2026-08-05_01-08-26.png",
        ],
      },
      {
        num: "02",
        title: "Reports",
        desc: "Sales and consumption reports to know how your bar is doing.",
        imgs: [
          "/images/TuOrden/2-Reportes/Screenshot_2026-08-05_01-00-25.png",
          "/images/TuOrden/2-Reportes/Screenshot_2026-08-05_01-00-44.png",
        ],
      },
      {
        num: "03",
        title: "Menu",
        desc: "Menu products with prices and availability, ready to operate.",
        imgs: [
          "/images/TuOrden/3-Menu/Screenshot_2026-08-05_01-01-59.png",
          "/images/TuOrden/3-Menu/Screenshot_2026-08-05_01-02-12.png",
          "/images/TuOrden/3-Menu/Screenshot_2026-08-05_01-02-27.png",
          "/images/TuOrden/3-Menu/Screenshot_2026-08-05_01-02-37.png",
          "/images/TuOrden/3-Menu/Screenshot_2026-08-05_01-02-47.png",
          "/images/TuOrden/3-Menu/Screenshot_2026-08-05_01-02-59.png",
          "/images/TuOrden/3-Menu/Screenshot_2026-08-05_01-03-12.png",
        ],
      },
      {
        num: "04",
        title: "Materials",
        desc: "Supplies and materials control so you never run out of anything.",
        imgs: [
          "/images/TuOrden/4-Materiales/Screenshot_2026-08-05_01-03-23.png",
          "/images/TuOrden/4-Materiales/Screenshot_2026-08-05_01-03-36.png",
          "/images/TuOrden/4-Materiales/Screenshot_2026-08-05_01-03-52.png",
        ],
      },
      {
        num: "05",
        title: "History",
        desc: "Order history and issued receipts, always searchable.",
        imgs: [
          "/images/TuOrden/5-Historial/Screenshot_2026-08-05_01-04-03.png",
          "/images/TuOrden/5-Historial/Screenshot_2026-08-05_01-04-13.png",
        ],
      },
      {
        num: "06",
        title: "Movements",
        desc: "Materials in and out, always recorded.",
        imgs: ["/images/TuOrden/6-Movimientos/Screenshot_2026-08-05_01-04-37.png"],
      },
      {
        num: "07",
        title: "Receipts",
        desc: "Generate clear receipts for your customers.",
        imgs: ["/images/TuOrden/7-Comprobantes/Screenshot_2026-08-05_01-04-56.png"],
      },
      {
        num: "08",
        title: "Settings",
        desc: "Configure your venue, products and system preferences.",
        imgs: [
          "/images/TuOrden/8-Configuracion/Screenshot_2026-08-05_01-05-15.png",
          "/images/TuOrden/8-Configuracion/Screenshot_2026-08-05_01-05-24.png",
        ],
      },
      {
        num: "09",
        title: "New Order",
        desc: "Create new orders with your table, products and quantities.",
        imgs: [
          "/images/TuOrden/9-Ventas/1-Nueva Orden/Screenshot_2026-08-05_01-05-47.png",
          "/images/TuOrden/9-Ventas/1-Nueva Orden/Screenshot_2026-08-05_01-06-16.png",
          "/images/TuOrden/9-Ventas/1-Nueva Orden/Screenshot_2026-08-05_01-06-28.png",
        ],
      },
      {
        num: "10",
        title: "Pending Bills",
        desc: "Keep control of open bills to be collected.",
        imgs: [
          "/images/TuOrden/9-Ventas/2-Cuentas Pendientes/Screenshot_2026-08-05_01-06-42.png",
          "/images/TuOrden/9-Ventas/2-Cuentas Pendientes/Screenshot_2026-08-05_01-06-56.png",
          "/images/TuOrden/9-Ventas/2-Cuentas Pendientes/Screenshot_2026-08-05_01-07-06.png",
          "/images/TuOrden/9-Ventas/2-Cuentas Pendientes/Screenshot_2026-08-05_01-07-20.png",
          "/images/TuOrden/9-Ventas/2-Cuentas Pendientes/Screenshot_2026-08-05_01-07-30.png",
          "/images/TuOrden/9-Ventas/2-Cuentas Pendientes/Screenshot_2026-08-05_01-07-43.png",
          "/images/TuOrden/9-Ventas/2-Cuentas Pendientes/Screenshot_2026-08-05_01-07-56.png",
          "/images/TuOrden/9-Ventas/Screenshot_2026-08-05_01-08-07.png",
        ],
      },
    ],
  },

  seo: {
    home: {
      title: "JRPrograms — VentaBox and TuOrden",
      description:
        "Desktop apps for Windows: VentaBox (inventory and sales) and TuOrden (bar and restaurant). Ready to use, with direct tech support and constant updates.",
      path: "/",
    },
    ventabox: {
      title: "VentaBox — Inventory and Sales System | JRPrograms",
      description:
        "Control general and per-store inventory, record sales, waste and movements. Clear reports for your business. Windows. Ready to use.",
      path: "/apps/ventabox",
      image: "/images/VentaBox.png",
    },
    tuorden: {
      title: "TuOrden — Bar and Restaurant Management | JRPrograms",
      description:
        "Orders, pending bills, materials control and reports for your bar or restaurant. Windows. Ready to use.",
      path: "/apps/tuorden",
      image: "/images/TuOrden.png",
    },
    notfound: {
      title: "Page not found | JRPrograms",
      description:
        "The page you are looking for does not exist. Go back home to see VentaBox and TuOrden.",
      path: "/404",
    },
  },

  ui: {
    // Navbar
    navSupport: "Support",
    navContact: "Contact me",
    langButton: "EN",
    langAria: "Change language",

    // Hero
    heroBadge: "ready to use · windows",
    heroTitlePre: "Your sales and inventory,",
    heroTitleAccent: "under control",
    heroTitlePost: ".",
    heroDesc:
      "JRPrograms presents VentaBox and TuOrden: two desktop tools to manage inventory, sales and orders for your business, without complications.",
    heroCtaApps: "View the apps",
    heroCtaFeatures: "Features",
    heroFollow: "Follow me",
    heroFloatReady: "ready to use",

    // Apps
    appsKicker: "// 01 — THE APPS",
    appsTitlePre: "Two tools,",
    appsTitleAccent: "one goal",
    appsDesc:
      "Each app solves a part of your business day-to-day: selling and keeping everything in order.",
    readyToUse: "ready to use",
    appsViewPage: "View page of",

    // Features
    featuresKicker: "// 02 — FEATURES",
    featuresTitlePre: "Built to work,",
    featuresTitleAccent: "not to get in the way",
    featuresDesc:
      "The JRPrograms philosophy applied to every app in the family.",

    // Platforms
    platformsKicker: "// 03 — PLATFORMS",
    platformsTitlePre: "Windows today,",
    platformsTitleAccent: "tomorrow we'll see",
    platformsDesc:
      "We focus on a single platform to do things right. The rest will come when it has to come.",
    platformsOk: "available",
    platformsNo: "not for now",

    // Socials
    socialsKicker: "// 04 — SOCIALS",
    socialsTitlePre: "News and releases,",
    socialsTitleAccent: "on my socials",
    socialsDesc:
      "New versions, improvements and content about VentaBox and TuOrden. Follow me and don't miss anything.",

    // Offer
    offerKicker: "// 05 — PRICING",
    offerTitlePre: "Recurring",
    offerTitleAccent: "plans",
    offerDesc:
      "VentaBox and TuOrden are available by subscription: monthly, every 6 months or yearly, in CUP or USD. Pick your plan and message me on WhatsApp.",
    offerCta: "Ask via",
    offerSecondary: "or message me on socials",

    // Contact
    contactTitlePre: "Having issues with an app?",
    contactTitleAccent: "Tech support",
    contactDesc:
      "An error or a question about VentaBox or TuOrden? Write to us and we will reply by email as soon as possible.",
    contactAppLabel: "It's about…",
    contactOther: "Other",
    contactEmailLabel: "Your email (optional)",
    contactMsgLabel: "Message",
    contactMsgPlaceholder: "Tell us what's happening…",
    contactSend: "Send via Gmail",
    contactHint: "Your Gmail will open with the message ready.",
    contactFoot: "QUICK REPLY · GMAIL",

    // AppPage
    appBack: "Back to home",
    appPreview: "preview",
    appContact: "Contact me",
    appViewApps: "View the apps",
    appImgAlt: "Interface of",
    appSupportTitlePre: "Problems?",
    appSupportTitleAccent: "We'll help you",
    appSupportDesc: (name) =>
      `${name} is ready for Windows and ready to work. An error or a question? Write to us by email or through my socials.`,
    appSupportBtn: "Tech support",

    // NotFound
    nfKicker: "404 · NOT FOUND",
    nfTitlePre: "That page",
    nfTitleAccent: "doesn't exist",
    nfTitlePost: ".",
    nfDesc: "The page you are trying to access is not available.",

    // Footer
    footDeveloper: "SOFTWARE DEVELOPER",
    footDesc:
      "Management tools for your business: inventory, sales and orders, simple and to the point.",
    footAppsTitle: "APPS",
    footNavTitle: "NAVIGATION",
    footContact: "Contact",
    footCopy: "© 2026 JRPrograms · made with </> and coffee",

    // Gallery
    galKicker: "// GALLERY",
    galTitlePre: "This is",
    galDesc: "Real screenshots of the app, section by section.",
    galShot: "screenshot",
    galShots: "screenshots",
    galViewAria: "View screenshot of",
    galClose: "Close",
    galPrev: "Previous",
    galNext: "Next",
  },
};
