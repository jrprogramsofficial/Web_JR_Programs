/* ============================================================
   src/App.jsx — Routing + layout compartido

   Rutas:
   /                  → Home (página completa de inicio)
   /apps/:slug        → AppPage (página dedicada de cada app)
   *                  → NotFound (404)

   Estructura del proyecto:
   src/
   ├── App.jsx                  ← este archivo
   ├── main.jsx
   ├── index.css                ← fuentes + estilos globales + tailwind
   ├── data/
   │   └── content.js           ← textos, apps, plataformas, marquee
   └── components/
       ├── Home.jsx             ← composición de la página de inicio
       ├── AppPage.jsx          ← página dedicada de una app
       ├── NotFound.jsx
       ├── Icon.jsx
       ├── LogoMark.jsx
       ├── ScrollProgress.jsx
       ├── SectionHead.jsx
       ├── Terminal.jsx
       ├── HeroLogo.jsx
       ├── Navbar.jsx
       ├── Hero.jsx
       ├── Marquee.jsx
       ├── AppsSection.jsx
       ├── FeaturesSection.jsx
       ├── PlatformsSection.jsx
       ├── SocialsSection.jsx
       ├── ContactSection.jsx
       └── Footer.jsx

   Recuerda: capturas reales en public/images/VentaBox.png y
   public/images/TuOrden.png
   ============================================================ */
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AppPage from "./components/AppPage";
import NotFound from "./components/NotFound";

function ScrollReset() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 overflow-x-hidden">
      <ScrollReset />
      <ScrollProgress />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/apps/:slug" element={<AppPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}