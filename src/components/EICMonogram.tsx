export default function EICMonogram({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle cx="50" cy="50" r="48" fill="#0f2a5e" stroke="#c9a84c" strokeWidth="2.5" />

      {/* Inner ring */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3 2" />

      {/* Crown top */}
      <g fill="#c9a84c">
        {/* Crown base band */}
        <rect x="28" y="34" width="44" height="5" rx="1" />
        {/* Crown points */}
        <polygon points="30,34 34,22 38,34" />
        <polygon points="46,34 50,20 54,34" />
        <polygon points="62,34 66,22 70,34" />
        {/* Crown orbs */}
        <circle cx="34" cy="21" r="2.5" />
        <circle cx="50" cy="19" r="2.5" />
        <circle cx="66" cy="21" r="2.5" />
      </g>

      {/* Monogram MR */}
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="22"
        fontWeight="bold"
        fill="#c9a84c"
        letterSpacing="2"
      >
        MR
      </text>

      {/* Bottom laurel dots */}
      <g fill="#c9a84c" opacity="0.7">
        <circle cx="32" cy="78" r="1.5" />
        <circle cx="38" cy="81" r="1.5" />
        <circle cx="44" cy="82.5" r="1.5" />
        <circle cx="50" cy="83" r="1.5" />
        <circle cx="56" cy="82.5" r="1.5" />
        <circle cx="62" cy="81" r="1.5" />
        <circle cx="68" cy="78" r="1.5" />
      </g>
    </svg>
  );
}
