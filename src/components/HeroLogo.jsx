/* src/components/HeroLogo.jsx — Logo animado del hero (órbitas + brackets) */
export default function HeroLogo() {
  return (
    <svg viewBox="0 0 800 640" className="w-full max-w-[460px] mx-auto">
      <defs>
        <linearGradient id="hGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>

      {/* Glow estático (barato: un solo elemento con opacidad, sin blur animado) */}
      <circle cx="400" cy="320" r="120" fill="url(#hGrad)" opacity="0.08" />

      <circle
        cx="400"
        cy="320"
        r="235"
        fill="none"
        stroke="#1e293b"
        strokeWidth="2"
        strokeDasharray="6 10"
      />
      <circle
        cx="400"
        cy="320"
        r="172"
        fill="none"
        stroke="#1e293b"
        strokeWidth="1.5"
        strokeDasharray="3 8"
      />

      <g
        stroke="url(#hGrad)"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 300 240 L 210 320 L 300 400" />
        <path d="M 500 240 L 590 320 L 500 400" />
        <path d="M 350 186 L 450 186" strokeDasharray="8 8" strokeWidth="6" />
        <path d="M 330 454 L 470 454" strokeWidth="6" />
      </g>

      <circle
        cx="210"
        cy="320"
        r="9"
        fill="#38bdf8"
        style={{ animation: "pulseGlow 2.4s ease-in-out infinite" }}
      />
      <circle
        cx="590"
        cy="320"
        r="9"
        fill="#c084fc"
        style={{ animation: "pulseGlow 2.4s ease-in-out infinite 1.2s" }}
      />

      <text
        x="400"
        y="344"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="62"
        fontWeight="700"
        fill="url(#hGrad)"
      >
        &lt;/&gt;
      </text>
    </svg>
  );
}