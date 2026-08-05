# JRPrograms — web-sell

Landing page de presentación de **JRPrograms**: VentaBox (inventario y ventas) y
TuOrden (bar y restaurante), dos apps de escritorio para Windows listas para usar.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- framer-motion (animaciones)
- Fuentes por CDN: Space Grotesk, Inter, JetBrains Mono

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (HMR)
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run lint     # eslint
```

## Rutas

- `/` — página de inicio (hero, apps, características, plataformas, redes, soporte)
- `/apps/ventabox` — página dedicada de VentaBox
- `/apps/tuorden` — página dedicada de TuOrden
- cualquier otra — 404

Las páginas de las apps se generan dinámicamente desde `APPS` en
`src/data/content.js` (campo `slug`). El routing usa `react-router-dom`
(BrowserRouter); en un hosting estático configura una reescritura de todas las
rutas al `index.html` (Vercel/Netlify lo hacen automáticamente).

## Estructura

```
src/
├── App.jsx                  # routing + layout compartido
├── index.css                # fuentes + estilos globales + Tailwind v4
├── main.jsx
├── data/
│   ├── content.js           # todo el contenido editable (apps, textos, etc.)
│   └── gallery.js           # galerías de capturas por app
└── components/              # 17 componentes (Navbar, Hero, Apps, Footer, ...)
```

## Contenido

Todo el texto de la web se edita en `src/data/content.js`.

Capturas reales de las apps (opcional): guarda `public/images/VentaBox.png` y
`public/images/TuOrden.png`. Mientras no existan se muestran los fallbacks
remotos configurados en `content.js`.

Las galerías de cada página de app se definen en `src/data/gallery.js`: un
grupo por carpeta de `public/images/<App>/<grupo>/` con su título, número y
descripción.
