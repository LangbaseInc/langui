export default function HeroBadge({ children }) {
  return (
    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-center text-xs font-semibold leading-6 text-blue-400 ring-1 ring-inset ring-blue-500/20 sm:text-sm">
      {children}
    </span>
  )
}
