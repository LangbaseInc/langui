export default function HeroBadge({ children }) {
  return (
    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-center text-xs font-semibold leading-6 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200/60 bg-clip-text text-transparent ring-1 ring-inset ring-blue-500/20 sm:text-sm">
      {children}
    </span>
  )
}
