export function TrowelIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Trowel blade - triangular shape */}
      <path d="M4 8 L12 4 L20 8 L12 16 Z" />

      {/* Handle */}
      <line x1="12" y1="16" x2="12" y2="20" />

      {/* Handle grip details */}
      <line x1="10" y1="17" x2="14" y2="17" />
      <line x1="10" y1="19" x2="14" y2="19" />
    </svg>
  )
}
