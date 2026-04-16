export default function EICMonogram({ size = 64 }: { size?: number }) {
  const h = Math.round(size * 1.15);
  return (
    <svg width={size} height={h} viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="eic-top-arc" d="M 18,115 A 82,82 0 0,1 182,115" />
      </defs>

      {/* ── FLAGPOLES ── */}
      <line x1="40" y1="12" x2="40" y2="125" stroke="#c9a84c" strokeWidth="1.8" />
      <line x1="160" y1="12" x2="160" y2="125" strokeWidth="1.8" stroke="#c9a84c" />

      {/* ── LEFT FLAG (union jack style) ── */}
      <rect x="26" y="12" width="28" height="20" fill="white" stroke="#ccc" strokeWidth="0.4" />
      <line x1="26" y1="12" x2="54" y2="32" stroke="#c0392b" strokeWidth="2.5" />
      <line x1="54" y1="12" x2="26" y2="32" stroke="#c0392b" strokeWidth="2.5" />
      <rect x="26" y="20" width="28" height="3.5" fill="#c0392b" />
      <rect x="38" y="12" width="3.5" height="20" fill="#c0392b" />

      {/* ── RIGHT FLAG ── */}
      <rect x="146" y="12" width="28" height="20" fill="white" stroke="#ccc" strokeWidth="0.4" />
      <line x1="146" y1="12" x2="174" y2="32" stroke="#c0392b" strokeWidth="2.5" />
      <line x1="174" y1="12" x2="146" y2="32" stroke="#c0392b" strokeWidth="2.5" />
      <rect x="146" y="20" width="28" height="3.5" fill="#c0392b" />
      <rect x="158.5" y="12" width="3.5" height="20" fill="#c0392b" />

      {/* ── LEFT LION RAMPANT ── */}
      <g fill="#4a7ab5" stroke="#1e4d8c" strokeWidth="0.7">
        {/* body */}
        <ellipse cx="29" cy="92" rx="13" ry="19" transform="rotate(-18,29,92)" />
        {/* neck */}
        <ellipse cx="42" cy="74" rx="9" ry="11" />
        {/* head */}
        <circle cx="53" cy="62" r="13" />
        {/* mane */}
        <circle cx="53" cy="62" r="17" fill="none" stroke="#4a7ab5" strokeWidth="6" opacity="0.65" />
        {/* ear */}
        <polygon points="47,49 52,42 57,50" />
        {/* raised front leg + paw */}
        <path d="M 46,78 Q 55,64 64,58" fill="none" stroke="#4a7ab5" strokeWidth="7" strokeLinecap="round" />
        <circle cx="65" cy="57" r="5.5" />
        {/* lower front leg */}
        <rect x="19" y="100" width="8" height="20" rx="4" transform="rotate(8,23,110)" />
        {/* back leg */}
        <rect x="33" y="103" width="8" height="18" rx="4" />
        {/* hind paw left */}
        <ellipse cx="20" cy="121" rx="7" ry="4" transform="rotate(-10,20,121)" />
        {/* hind paw right */}
        <ellipse cx="37" cy="122" rx="7" ry="4" />
        {/* tail curling up */}
        <path d="M 17,82 Q 2,62 8,42 Q 12,32 19,38" fill="none" stroke="#4a7ab5" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="19" cy="36" r="6" />
      </g>

      {/* ── RIGHT LION RAMPANT (mirror) ── */}
      <g fill="#4a7ab5" stroke="#1e4d8c" strokeWidth="0.7" transform="translate(200,0) scale(-1,1)">
        <ellipse cx="29" cy="92" rx="13" ry="19" transform="rotate(-18,29,92)" />
        <ellipse cx="42" cy="74" rx="9" ry="11" />
        <circle cx="53" cy="62" r="13" />
        <circle cx="53" cy="62" r="17" fill="none" stroke="#4a7ab5" strokeWidth="6" opacity="0.65" />
        <polygon points="47,49 52,42 57,50" />
        <path d="M 46,78 Q 55,64 64,58" fill="none" stroke="#4a7ab5" strokeWidth="7" strokeLinecap="round" />
        <circle cx="65" cy="57" r="5.5" />
        <rect x="19" y="100" width="8" height="20" rx="4" transform="rotate(8,23,110)" />
        <rect x="33" y="103" width="8" height="18" rx="4" />
        <ellipse cx="20" cy="121" rx="7" ry="4" transform="rotate(-10,20,121)" />
        <ellipse cx="37" cy="122" rx="7" ry="4" />
        <path d="M 17,82 Q 2,62 8,42 Q 12,32 19,38" fill="none" stroke="#4a7ab5" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="19" cy="36" r="6" />
      </g>

      {/* ── SHIELD ── */}
      <path d="M 65,50 L 135,50 L 135,115 Q 135,152 100,168 Q 65,152 65,115 Z"
        fill="white" stroke="#c9a84c" strokeWidth="2.5" />

      {/* Quarterly dividers */}
      <line x1="100" y1="50" x2="100" y2="168" stroke="#c9a84c" strokeWidth="2" />
      <line x1="65" y1="109" x2="135" y2="109" stroke="#c9a84c" strokeWidth="2" />

      {/* Q1 top-left: St George cross */}
      <rect x="79" y="53" width="5" height="53" fill="#c0392b" />
      <rect x="67" y="75" width="31" height="5" fill="#c0392b" />

      {/* Q2 top-right: St George cross */}
      <rect x="116" y="53" width="5" height="53" fill="#c0392b" />
      <rect x="102" y="75" width="31" height="5" fill="#c0392b" />

      {/* Q3 bottom-left: navy + ship */}
      <path d="M 65,109 L 99,109 L 99,152 Q 65,150 65,115 Z" fill="#0f2a5e" />
      <g fill="#c9a84c" transform="translate(68,120)">
        <path d="M 1,14 Q 15,2 29,14 Z" />
        <rect x="3" y="14" width="22" height="5" rx="1.5" />
        <line x1="16" y1="2" x2="16" y2="14" stroke="#c9a84c" strokeWidth="1.5" />
        <polygon points="16,2 23,10 16,10" />
      </g>

      {/* Q4 bottom-right: navy + ship */}
      <path d="M 101,109 L 135,109 L 135,115 Q 135,150 101,152 Z" fill="#0f2a5e" />
      <g fill="#c9a84c" transform="translate(104,120)">
        <path d="M 1,14 Q 15,2 29,14 Z" />
        <rect x="3" y="14" width="22" height="5" rx="1.5" />
        <line x1="16" y1="2" x2="16" y2="14" stroke="#c9a84c" strokeWidth="1.5" />
        <polygon points="16,2 23,10 16,10" />
      </g>

      {/* ── CENTRAL BADGE ── */}
      <circle cx="100" cy="109" r="24" fill="#0f2a5e" stroke="#c9a84c" strokeWidth="2.5" />
      <circle cx="100" cy="109" r="19" fill="none" stroke="#c9a84c" strokeWidth="0.9" />
      <line x1="100" y1="89" x2="100" y2="129" stroke="#c9a84c" strokeWidth="1" opacity="0.6" />
      <line x1="80" y1="109" x2="120" y2="109" stroke="#c9a84c" strokeWidth="1" opacity="0.6" />
      <text x="100" y="106" textAnchor="middle" fill="#c9a84c" fontSize="7.5"
        fontFamily="Georgia,serif" fontWeight="bold">E · I</text>
      <text x="100" y="118" textAnchor="middle" fill="#c9a84c" fontSize="7.5"
        fontFamily="Georgia,serif" fontWeight="bold">C · O</text>

      {/* ── TOP ARC TEXT ── */}
      <text fontSize="9.5" fill="#c9a84c" fontFamily="Georgia,serif" fontWeight="bold" letterSpacing="2">
        <textPath href="#eic-top-arc" startOffset="6%">EAST · INDIA · CO.</textPath>
      </text>

      {/* ── BOTTOM RIBBON ── */}
      <path d="M 28,182 Q 100,172 172,182 L 170,197 Q 100,187 30,197 Z" fill="#c9a84c" />
      <path d="M 28,182 L 12,177 L 18,189 L 30,197 Z" fill="#a07820" />
      <path d="M 172,182 L 188,177 L 182,189 L 170,197 Z" fill="#a07820" />
      <text x="100" y="193" textAnchor="middle" fill="#0f2a5e" fontSize="6.2"
        fontFamily="Georgia,serif" fontWeight="bold" letterSpacing="0.6">DEO · DUCENTE · NIL · NOCET</text>
    </svg>
  );
}
