/* ============================================================
   src/data/gallery.js
   Galerías de capturas por app. Cada grupo corresponde a una
   carpeta de public/images/<App>/ con su descripción.

   Para añadir o quitar capturas, edita las rutas de cada grupo.
   ============================================================ */

const BASE = import.meta.env.BASE_URL;
const withBase = (p) => BASE + p.replace(/^\//, "");

const RAW_GALLERY = {
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
      imgs: [
        "/images/VentaBox/3-Entrantes/Screenshot_2026-08-05_00-39-37.png",
      ],
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
      imgs: [
        "/images/VentaBox/7-Movimientos/Screenshot_2026-08-05_00-41-41.png",
      ],
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
      imgs: [
        "/images/VentaBox/11-Menu Venta/Screenshot_2026-08-05_00-44-44.png",
      ],
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
      imgs: [
        "/images/TuOrden/6-Movimientos/Screenshot_2026-08-05_01-04-37.png",
      ],
    },
    {
      num: "07",
      title: "Comprobantes",
      desc: "Genera comprobantes claros para tus clientes.",
      imgs: [
        "/images/TuOrden/7-Comprobantes/Screenshot_2026-08-05_01-04-56.png",
      ],
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
};

export const GALLERY = Object.fromEntries(
  Object.entries(RAW_GALLERY).map(([slug, groups]) => [
    slug,
    groups.map((g) => ({ ...g, imgs: g.imgs.map(withBase) })),
  ]),
);
