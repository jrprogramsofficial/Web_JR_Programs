/* src/components/LogoMark.jsx — Isotipo de JrPrograms (brackets + nodo) */
export default function LogoMark({ size = "w-9 h-9" }) {
  return (
    <svg viewBox="0 0 64 64" className={size}>
      <defs>
        <linearGradient id="lgLogo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <g
        stroke="url(#lgLogo)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 22 18 L 10 32 L 22 46" />
        <path d="M 42 18 L 54 32 L 42 46" />
      </g>
      <circle cx="32" cy="32" r="3.5" fill="#38bdf8" />
    </svg>
  );
}
