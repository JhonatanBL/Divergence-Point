export function ChalkDoodles() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {/* trajetória parabólica */}
      <path
        d="M40 420 Q 260 40 480 420"
        style={{ stroke: "rgb(var(--accent-orange))" }}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 10"
      />
      <circle cx="480" cy="420" r="4" style={{ fill: "rgb(var(--accent-orange))" }} />

      {/* órbita elíptica */}
      <ellipse
        cx="900"
        cy="150"
        rx="180"
        ry="90"
        style={{ stroke: "rgb(var(--accent-blue))" }}
        strokeWidth="2"
        strokeDasharray="1 9"
      />
      <circle cx="900" cy="150" r="6" style={{ fill: "rgb(var(--accent-blue))" }} />
      <circle cx="1060" cy="150" r="3" style={{ fill: "rgb(var(--chalk))" }} />

      {/* pêndulo */}
      <path
        d="M620 60 L560 260"
        style={{ stroke: "rgb(var(--accent-silver))" }}
        strokeWidth="2"
        strokeDasharray="1 8"
      />
      <path
        d="M620 60 L700 230"
        style={{ stroke: "rgb(var(--accent-silver))" }}
        strokeWidth="2"
        strokeDasharray="1 8"
        opacity="0.5"
      />
      <circle cx="560" cy="260" r="10" style={{ stroke: "rgb(var(--accent-silver))" }} strokeWidth="2" />

      {/* vetor de força */}
      <path
        d="M120 140 L260 100"
        style={{ stroke: "rgb(var(--chalk))" }}
        strokeWidth="2"
        strokeDasharray="1 8"
      />
      <path
        d="M260 100 L246 92 M260 100 L250 112"
        style={{ stroke: "rgb(var(--chalk))" }}
        strokeWidth="2"
      />
    </svg>
  );
}
