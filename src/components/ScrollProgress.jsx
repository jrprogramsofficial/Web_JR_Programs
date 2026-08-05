/* src/components/ScrollProgress.jsx — Barra de progreso de scroll */
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[70] bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc]"
    />
  );
}
