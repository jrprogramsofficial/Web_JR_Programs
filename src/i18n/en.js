/* src/i18n/en.js — English dictionary */

const BASE = import.meta.env.BASE_URL;
const withBase = (p) => BASE + p.replace(/^\//, "");

export const EN = {
  nav: [
    ["Apps", "#apps"],
    ["Problems", "#problemas"],
    ["Features", "#features"],
    ["Platforms", "#plataformas"],
    ["Socials", "#redes"],
  ],

  termLines: [
    { t: "$ jr solutions --list", c: "text-slate-200" },
    { t: "▸ VentaBox · inventory control", c: "text-[#38bdf8]" },
    { t: "▸ TuOrden · bar & restaurant", c: "text-[#818cf8]" },
    { t: "✔ 2 solutions · windows · ready to use", c: "text-[#c084fc]" },
  ],

  apps: [
    {
      name: "VentaBox",
      slug: "ventabox",
      tagline: "Inventory and sales system",
      ver: "v1.0",
      desc: "Solves inventory chaos: general and per-store stock, sales, waste and movements recorded, and clear reports for your business.",
      bullets: [
        "General and per-store inventory",
        "Sales, waste and movements",
        "Reports and sales history",
      ],
      img: withBase("/images/VentaBox.png"),
      fallback: withBase("/images/placeholder.svg"),
      icon: "cart",
      grad: "from-[#38bdf8] to-[#818cf8]",
    },
    {
      name: "TuOrden",
      slug: "tuorden",
      tagline: "Bar and restaurant management",
      ver: null,
      desc: "Ends the chaos in your bar or restaurant: orders, pending bills and supplies control so everything runs with clear numbers.",
      bullets: [
        "New order and pending bills",
        "Supplies and movements",
        "Reports and receipts",
      ],
      img: withBase("/images/TuOrden.png"),
      fallback: withBase("/images/placeholder.svg"),
      icon: "box",
      grad: "from-[#818cf8] to-[#c084fc]",
    },
  ],

  problems: [
    {
      icon: "layers",
      apps: ["ventabox"],
      problem: "Inventory out of control?",
      solution:
        "Every product, quantity and price of your stock, general and per store, in one place.",
    },
    {
      icon: "cart",
      apps: ["ventabox"],
      problem: "Sales with no record?",
      solution:
        "Every sale is recorded instantly, with history you can browse by date, product or ticket.",
    },
    {
      icon: "target",
      apps: ["ventabox"],
      problem: "Waste you can't track?",
      solution:
        "Every loss stays controlled so your inventory always reflects reality.",
    },
    {
      icon: "bolt",
      apps: ["tuorden"],
      problem: "Order chaos at your bar?",
      solution:
        "New orders, tables and pending bills to collect, with nothing slipping away.",
    },
    {
      icon: "box",
      apps: ["tuorden"],
      problem: "Supplies running out?",
      solution:
        "Supplies and movements control so you never run out at the key moment.",
    },
    {
      icon: "refresh",
      apps: ["ventabox", "tuorden"],
      problem: "Decisions without data?",
      solution:
        "Clear sales, consumption and inventory reports to decide with numbers, not guesses.",
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
      d: "No filler features: only what you need to keep your business running and in order.",
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
    "CONTROL",
    "ORDER",
    "ORDERS",
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
      title: "JRPrograms — Solutions for Your Business",
      description:
        "VentaBox and TuOrden solve your business problems: inventory, sales and orders under control. Desktop apps for Windows, ready to use.",
      path: "/",
    },
    ventabox: {
      title: "VentaBox — Inventory and Sales System | JRPrograms",
      description:
        "Solves stock chaos: general and per-store inventory, sales, waste and movements recorded. Clear reports to decide with data. Windows.",
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
    heroBadge: "solutions for your business · windows",
    heroTitlePre: "Your business problems,",
    heroTitleAccent: "solved",
    heroTitlePost: ".",
    heroDesc:
      "JRPrograms presents VentaBox and TuOrden: two desktop tools that solve your business day-to-day problems — inventory, sales and orders — without complications.",
    heroCtaApps: "View the solutions",
    heroCtaFeatures: "Features",
    heroFollow: "Follow me",
    heroFloatReady: "made for your business",

    // Problems
    problemsKicker: "// 02 — PROBLEMS",
    problemsTitlePre: "Business problems,",
    problemsTitleAccent: "solved",
    problemsDesc:
      "These are the most common day-to-day problems and how JRPrograms apps solve them.",
    problemLabel: "problem",
    solvedBy: "solved by",

    // Apps
    appsKicker: "// 01 — THE APPS",
    appsTitlePre: "Two tools,",
    appsTitleAccent: "one goal",
    appsDesc:
      "Each app solves a concrete group of problems in your business and keeps everything in order.",
    readyToUse: "ready to use",
    appsViewPage: "View page of",

    // Features
    featuresKicker: "// 03 — FEATURES",
    featuresTitlePre: "Built to work,",
    featuresTitleAccent: "not to get in the way",
    featuresDesc:
      "The JRPrograms philosophy applied to every app in the family.",

    // Platforms
    platformsKicker: "// 04 — PLATFORMS",
    platformsTitlePre: "Windows today,",
    platformsTitleAccent: "tomorrow we'll see",
    platformsDesc:
      "We focus on a single platform to do things right. The rest will come when it has to come.",
    platformsOk: "available",
    platformsNo: "not for now",

    // Socials
    socialsKicker: "// 05 — SOCIALS",
    socialsTitlePre: "News and releases,",
    socialsTitleAccent: "on my socials",
    socialsDesc:
      "New versions, improvements and content about VentaBox and TuOrden. Follow me and don't miss anything.",

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
      "Tools that solve your business problems: inventory, sales and orders, simple and to the point.",
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

/* Aplica el prefijo base a las capturas de la galería */
const RAW_GALLERY = EN.gallery;
EN.gallery = Object.fromEntries(
  Object.entries(RAW_GALLERY).map(([slug, groups]) => [
    slug,
    groups.map((g) => ({ ...g, imgs: g.imgs.map(withBase) })),
  ]),
);
