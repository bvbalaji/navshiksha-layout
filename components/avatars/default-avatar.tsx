export function DefaultAvatar({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#6B7280" />
      <path
        d="M20 10C16.13 10 13 13.13 13 17C13 19.57 14.46 21.78 16.59 22.91C13.23 24.29 11 27.55 11 31H13C13 27.14 16.14 24 20 24C23.86 24 27 27.14 27 31H29C29 27.55 26.77 24.29 23.41 22.91C25.54 21.78 27 19.57 27 17C27 13.13 23.87 10 20 10ZM20 12C22.76 12 25 14.24 25 17C25 19.76 22.76 22 20 22C17.24 22 15 19.76 15 17C15 14.24 17.24 12 20 12Z"
        fill="white"
      />
    </svg>
  )
}
