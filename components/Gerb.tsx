export function Gerb() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified official-style emblem (monochrome for documents) */}
      <circle cx="100" cy="100" r="96" stroke="black" strokeWidth="4" />
      <path
        d="M100 40
           C70 60, 60 90, 60 120
           C60 150, 80 165, 100 175
           C120 165, 140 150, 140 120
           C140 90, 130 60, 100 40Z"
        stroke="black"
        strokeWidth="3"
        fill="none"
      />
      <line x1="100" y1="55" x2="100" y2="165" stroke="black" strokeWidth="3" />
    </svg>
  );
}

