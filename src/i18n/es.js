/* src/i18n/es.js — Diccionario de español (idioma por defecto) */

const BASE = import.meta.env.BASE_URL;
const withBase = (p) => BASE + p.replace(/^\//, "");

export const ES = {
  nav: [
    ["Apps", "#apps"],
    ["Características", "#features"],
    ["Plataformas", "#plataformas"],
    ["Oferta", "#oferta"],
    ["Redes", "#redes"],
  ],

  termLines: [
    { t: "$ jr apps --list", c: "text-slate-200" },
    { t: "▸ VentaBox · inventario y ventas", c: "text-[#38bdf8]" },
    { t: "▸ TuOrden · bar & restaurante", c: "text-[#818cf8]" },
    { t: "✔ 2 apps · windows · listas para usar", c: "text-[#c084fc]" },
  ],

  apps: [
    {
      name: "VentaBox",
      slug: "ventabox",
      tagline: "Sistema de inventario y ventas",
      ver: "v1.0",
      desc: "Controla el inventario general y por tienda, registra ventas, mermas y movimientos, y consulta reportes claros de tu negocio.",
      bullets: [
        "Inventario general y por tienda",
        "Ventas, mermas y movimientos",
        "Reportes e historial de ventas",
      ],
      img: withBase("/images/VentaBox.png"),
      fallback: withBase("/images/placeholder.svg"),
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
      img: withBase("/images/TuOrden.png"),
      fallback: withBase("/images/placeholder.svg"),
      icon: "box",
      grad: "from-[#818cf8] to-[#c084fc]",
    },
  ],

  features: [
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
  ],

  platforms: [
    { os: "Windows", st: "ok" },
    { os: "macOS", st: "no" },
    { os: "Linux", st: "no" },
    { os: "Android", st: "no" },
    { os: "iOS", st: "no" },
  ],

  marquee: [
    "VENTAS",
    "INVENTARIO",
    "CAJA",
    "STOCK",
    "REPORTES",
    "MERMAS",
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
      "Elige el plan que mejor se adapte a tu negocio y escríbeme por WhatsApp para concretar el pago y recibir tu licencia.",
  },

  offerPlans: [
    { label: "Mensual", cup: "3000 CUP", usd: "$5" },
    { label: "Cada 6 meses", cup: "15000 CUP", usd: "$25" },
    { label: "Anual", cup: "30000 CUP", usd: "$48", badge: "mejor precio" },
  ],

  offers: [
    {
      slug: "ventabox",
      detail:
        "Suscripción periódica para tu tienda: inventario y ventas siempre al día.",
    },
    {
      slug: "tuorden",
      detail:
        "Suscripción periódica para tu bar o restaurante: órdenes y cuentas sin caos.",
    },
  ],

  gallery: {
    ventabox: [
      {
        num: "01",
        title: "Dashboard",
        desc: "Resumen del negocio: ventas del día, productos y accesos rápidos a todo el sistema.",
        imgs: [
          "/images/VentaBox/1-Dashboard/Screenshot_2026-08-05_00-38-38.png",
          "/images/VentaBox/1-Dashboard/Screenshot_2026-08-05_00-46-01.png",
        ],
      },
      {
        num: "02",
        title: "Inventario General",
        desc: "Todo tu stock centralizado: cantidades, precios y estado de cada producto.",
        imgs: [
          "/images/VentaBox/2-Inventario General/Screenshot_2026-08-05_00-38-55.png",
          "/images/VentaBox/2-Inventario General/Screenshot_2026-08-05_00-39-11.png",
          "/images/VentaBox/2-Inventario General/Screenshot_2026-08-05_00-41-19.png",
        ],
      },
      {
        num: "03",
        title: "Entrantes",
        desc: "Registra la mercancía que entra a tu inventario en segundos.",
        imgs: ["/images/VentaBox/3-Entrantes/Screenshot_2026-08-05_00-39-37.png"],
      },
      {
        num: "04",
        title: "Almacenes",
        desc: "Administra varios almacenes y controla las existencias de cada uno.",
        imgs: [
          "/images/VentaBox/4-Almacenes/Screenshot_2026-08-05_00-40-10.png",
          "/images/VentaBox/4-Almacenes/Screenshot_2026-08-05_00-40-19.png",
        ],
      },
      {
        num: "05",
        title: "Inventario Tienda",
        desc: "Inventario por tienda o sucursal, con el detalle que tu negocio necesita.",
        imgs: [
          "/images/VentaBox/5-Inventario Tienda/Screenshot_2026-08-05_00-40-29.png",
          "/images/VentaBox/5-Inventario Tienda/Screenshot_2026-08-05_00-40-39.png",
          "/images/VentaBox/5-Inventario Tienda/Screenshot_2026-08-05_00-40-51.png",
          "/images/VentaBox/5-Inventario Tienda/Screenshot_2026-08-05_00-41-05.png",
        ],
      },
      {
        num: "06",
        title: "Ventas",
        desc: "Registro de ventas completo: productos, cantidades y totales al instante.",
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
        title: "Movimientos",
        desc: "Cada entrada y salida queda registrada para que nada se pierda.",
        imgs: ["/images/VentaBox/7-Movimientos/Screenshot_2026-08-05_00-41-41.png"],
      },
      {
        num: "08",
        title: "Historial de Ventas",
        desc: "Consulta todas tus ventas por fecha, producto o ticket.",
        imgs: [
          "/images/VentaBox/8-Historial de Ventas/Screenshot_2026-08-05_00-42-05.png",
          "/images/VentaBox/8-Historial de Ventas/Screenshot_2026-08-05_00-42-16.png",
          "/images/VentaBox/8-Historial de Ventas/Screenshot_2026-08-05_00-42-32.png",
        ],
      },
      {
        num: "09",
        title: "Reportes",
        desc: "Reportes claros de ventas e inventario para decidir con datos.",
        imgs: [
          "/images/VentaBox/9-Reportes/Screenshot_2026-08-05_00-43-22.png",
          "/images/VentaBox/9-Reportes/Screenshot_2026-08-05_00-43-33.png",
        ],
      },
      {
        num: "10",
        title: "Mermas",
        desc: "Controla mermas y pérdidas para mantener el inventario real.",
        imgs: [
          "/images/VentaBox/10-Mermas/Screenshot_2026-08-05_00-43-49.png",
          "/images/VentaBox/10-Mermas/Screenshot_2026-08-05_00-44-08.png",
          "/images/VentaBox/10-Mermas/Screenshot_2026-08-05_00-44-18.png",
        ],
      },
      {
        num: "11",
        title: "Menú Venta",
        desc: "Interfaz de cobro rápida para registrar ventas sin fricción.",
        imgs: ["/images/VentaBox/11-Menu Venta/Screenshot_2026-08-05_00-44-44.png"],
      },
      {
        num: "12",
        title: "Configuraciones",
        desc: "Ajusta tu negocio: tiendas, impuestos y preferencias del sistema.",
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
        desc: "El estado de tu local de un vistazo: órdenes activas y actividad del día.",
        imgs: [
          "/images/TuOrden/1-Dashboard/Screenshot_2026-08-05_01-00-10.png",
          "/images/TuOrden/1-Dashboard/Screenshot_2026-08-05_01-08-26.png",
        ],
      },
      {
        num: "02",
        title: "Reportes",
        desc: "Reportes de ventas y consumo para conocer el desempeño de tu bar.",
        imgs: [
          "/images/TuOrden/2-Reportes/Screenshot_2026-08-05_01-00-25.png",
          "/images/TuOrden/2-Reportes/Screenshot_2026-08-05_01-00-44.png",
        ],
      },
      {
        num: "03",
        title: "Menú",
        desc: "Productos del menú con precios y disponibilidad, listos para operar.",
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
        title: "Materiales",
        desc: "Control de materiales e insumos para no quedarte sin nada.",
        imgs: [
          "/images/TuOrden/4-Materiales/Screenshot_2026-08-05_01-03-23.png",
          "/images/TuOrden/4-Materiales/Screenshot_2026-08-05_01-03-36.png",
          "/images/TuOrden/4-Materiales/Screenshot_2026-08-05_01-03-52.png",
        ],
      },
      {
        num: "05",
        title: "Historial",
        desc: "Historial de órdenes y comprobantes emitidos, siempre consultable.",
        imgs: [
          "/images/TuOrden/5-Historial/Screenshot_2026-08-05_01-04-03.png",
          "/images/TuOrden/5-Historial/Screenshot_2026-08-05_01-04-13.png",
        ],
      },
      {
        num: "06",
        title: "Movimientos",
        desc: "Entradas y salidas de materiales, siempre registradas.",
        imgs: ["/images/TuOrden/6-Movimientos/Screenshot_2026-08-05_01-04-37.png"],
      },
      {
        num: "07",
        title: "Comprobantes",
        desc: "Genera comprobantes claros para tus clientes.",
        imgs: ["/images/TuOrden/7-Comprobantes/Screenshot_2026-08-05_01-04-56.png"],
      },
      {
        num: "08",
        title: "Configuración",
        desc: "Configura el local, productos y preferencias del sistema.",
        imgs: [
          "/images/TuOrden/8-Configuracion/Screenshot_2026-08-05_01-05-15.png",
          "/images/TuOrden/8-Configuracion/Screenshot_2026-08-05_01-05-24.png",
        ],
      },
      {
        num: "09",
        title: "Nueva Orden",
        desc: "Crea órdenes nuevas con tu mesa, productos y cantidades.",
        imgs: [
          "/images/TuOrden/9-Ventas/1-Nueva Orden/Screenshot_2026-08-05_01-05-47.png",
          "/images/TuOrden/9-Ventas/1-Nueva Orden/Screenshot_2026-08-05_01-06-16.png",
          "/images/TuOrden/9-Ventas/1-Nueva Orden/Screenshot_2026-08-05_01-06-28.png",
        ],
      },
      {
        num: "10",
        title: "Cuentas Pendientes",
        desc: "Mantén el control de las cuentas abiertas por cobrar.",
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
      title: "JRPrograms — VentaBox y TuOrden",
      description:
        "Apps de escritorio para Windows: VentaBox (inventario y ventas) y TuOrden (bar y restaurante). Listas para usar, con soporte técnico directo y actualizaciones constantes.",
      path: "/",
    },
    ventabox: {
      title: "VentaBox — Sistema de Inventario y Ventas | JRPrograms",
      description:
        "Controla el inventario general y por tienda, registra ventas, mermas y movimientos. Reportes claros para tu negocio. Windows. Lista para usar.",
      path: "/apps/ventabox",
      image: "/images/VentaBox.png",
    },
    tuorden: {
      title: "TuOrden — Gestión para Bar y Restaurante | JRPrograms",
      description:
        "Órdenes, cuentas pendientes, control de materiales y reportes para tu bar o restaurante. Windows. Lista para usar.",
      path: "/apps/tuorden",
      image: "/images/TuOrden.png",
    },
    notfound: {
      title: "Página no encontrada | JRPrograms",
      description:
        "La página que buscas no existe. Volve al inicio para ver VentaBox y TuOrden.",
      path: "/404",
    },
  },

  ui: {
    // Navbar
    navSupport: "Soporte",
    navContact: "Contáctame",
    langButton: "ES",
    langAria: "Cambiar idioma",

    // Hero
    heroBadge: "listas para usar · windows",
    heroTitlePre: "Tus ventas y tu inventario,",
    heroTitleAccent: "bajo control",
    heroTitlePost: ".",
    heroDesc:
      "JRPrograms presenta VentaBox y TuOrden: dos herramientas de escritorio para gestionar inventario, ventas y órdenes de tu negocio, sin complicaciones.",
    heroCtaApps: "Ver las apps",
    heroCtaFeatures: "Características",
    heroFollow: "Sígueme",
    heroFloatReady: "listas para usar",

    // Apps
    appsKicker: "// 01 — LAS APPS",
    appsTitlePre: "Dos herramientas,",
    appsTitleAccent: "un objetivo",
    appsDesc:
      "Cada app resuelve una parte del día a día de tu negocio: vender y mantener todo en orden.",
    readyToUse: "lista para usar",
    appsViewPage: "Ver página de",

    // Features
    featuresKicker: "// 02 — CARACTERÍSTICAS",
    featuresTitlePre: "Hechas para trabajar,",
    featuresTitleAccent: "no para estorbar",
    featuresDesc: "La filosofía de JRPrograms aplicada a cada app de la familia.",

    // Platforms
    platformsKicker: "// 03 — PLATAFORMAS",
    platformsTitlePre: "Windows hoy,",
    platformsTitleAccent: "mañana ya veremos",
    platformsDesc:
      "Estamos enfocados en una sola plataforma para hacer las cosas bien. El resto llegará cuando tenga que llegar.",
    platformsOk: "disponible",
    platformsNo: "por ahora no",

    // Socials
    socialsKicker: "// 04 — REDES",
    socialsTitlePre: "Novedades y lanzamientos,",
    socialsTitleAccent: "en mis redes",
    socialsDesc:
      "Nuevas versiones, mejoras y contenido de VentaBox y TuOrden. Sígueme y no te pierdas nada.",

    // Offer
    offerKicker: "// 05 — OFERTA",
    offerTitlePre: "Planes",
    offerTitleAccent: "periódicos",
    offerDesc:
      "VentaBox y TuOrden se contratan por suscripción: mensual, semestral o anual, en CUP o USD. Elige tu plan y escríbeme por WhatsApp.",
    offerCta: "Consultar por",
    offerSecondary: "o escríbeme por las redes",
    offerTrial: "7 días de prueba gratis · uso completo de la app",

    // Contact
    contactTitlePre: "¿Problemas con una app?",
    contactTitleAccent: "Soporte técnico",
    contactDesc:
      "¿Un error o una duda con VentaBox o TuOrden? Escríbenos y te responderemos por correo lo antes posible.",
    contactAppLabel: "Se trata de…",
    contactOther: "Otro",
    contactEmailLabel: "Tu correo (opcional)",
    contactMsgLabel: "Mensaje",
    contactMsgPlaceholder: "Cuéntanos qué te ocurre…",
    contactSend: "Enviar por Gmail",
    contactHint: "Se abrirá tu Gmail con el mensaje listo.",
    contactFoot: "RESPUESTA RÁPIDA · GMAIL",

    // AppPage
    appBack: "Volver al inicio",
    appPreview: "vista previa",
    appContact: "Contáctame",
    appViewApps: "Ver las apps",
    appImgAlt: "Interfaz de",
    appSupportTitlePre: "¿Problemas?",
    appSupportTitleAccent: "Te ayudamos",
    appSupportDesc: (name) =>
      `${name} ya está lista para Windows y lista para trabajar. ¿Un error o una duda? Escríbenos al soporte por correo o por mis redes.`,
    appSupportBtn: "Soporte técnico",

    // NotFound
    nfKicker: "404 · NO ENCONTRADO",
    nfTitlePre: "Esa página",
    nfTitleAccent: "no existe",
    nfTitlePost: ".",
    nfDesc: "La página a la que intentas acceder no está disponible.",

    // Footer
    footDeveloper: "SOFTWARE DEVELOPER",
    footDesc:
      "Herramientas de gestión para tu negocio: inventario, ventas y órdenes, simples y al grano.",
    footAppsTitle: "APPS",
    footNavTitle: "NAVEGACIÓN",
    footContact: "Contacto",
    footCopy: "© 2026 JRPrograms · hecho con </> y café",

    // Gallery
    galKicker: "// GALERÍA",
    galTitlePre: "Así se ve",
    galDesc: "Capturas reales de la aplicación, sección por sección.",
    galShot: "captura",
    galShots: "capturas",
    galViewAria: "Ver captura de",
    galClose: "Cerrar",
    galPrev: "Anterior",
    galNext: "Siguiente",
  },
};

/* Aplica el prefijo base a las capturas de la galería */
const RAW_GALLERY = ES.gallery;
ES.gallery = Object.fromEntries(
  Object.entries(RAW_GALLERY).map(([slug, groups]) => [
    slug,
    groups.map((g) => ({ ...g, imgs: g.imgs.map(withBase) })),
  ]),
);
