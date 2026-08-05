import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://jrprogramsofficial.github.io/Web_JR_Programs';

export function useSEO({ title, description, image, path = '/', type = 'website' }) {
  const url = `${BASE_URL}${path}`;
  const img = image ? `${BASE_URL}${image}` : `${BASE_URL}/images/VentaBox.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:site_name" content="JRPrograms" />
      <meta property="og:locale" content="es_ES" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}

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