export default function RegistrationMark({ className = '', size = 20 }) {
  return (
    <svg
      className={`reg-mark ${className}`}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1" />
      <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
