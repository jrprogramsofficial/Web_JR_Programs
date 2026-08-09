/* src/data/seo.js — Configuración SEO por ruta (títulos y meta tags) */
export const SEO_CONFIG = {
  home: {
    title: 'JRPrograms — VentaBox y TuOrden',
    description: 'Apps de escritorio para Windows: VentaBox (inventario y ventas) y TuOrden (bar y restaurante). Listas para usar, con soporte técnico directo y actualizaciones constantes.',
    path: '/',
  },
  ventabox: {
    title: 'VentaBox — Sistema de Inventario y Ventas | JRPrograms',
    description: 'Controla el inventario general y por tienda, registra ventas, mermas y movimientos. Reportes claros para tu negocio. Windows. Lista para usar.',
    path: '/apps/ventabox',
    image: '/images/VentaBox.png',
  },
  tuorden: {
    title: 'TuOrden — Gestión para Bar y Restaurante | JRPrograms',
    description: 'Órdenes, cuentas pendientes, control de materiales y reportes para tu bar o restaurante. Windows. Lista para usar.',
    path: '/apps/tuorden',
    image: '/images/TuOrden.png',
  },
  notfound: {
    title: 'Página no encontrada | JRPrograms',
    description: 'La página que buscas no existe. Volve al inicio para ver VentaBox y TuOrden.',
    path: '/404',
  },
};