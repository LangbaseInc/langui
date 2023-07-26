import Link from 'next/link'

export default function BrandLogo({
  withText = true,
  fontSize = 'text-sm',
  size = '8',
}) {
  return (
    <Link href="/">
      <div className={`inline-flex gap-1.5 ${fontSize} font-poppins items-end`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-${size} w-${size} text-blue-600`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-5 10.5A1.5 1.5 0 0 1 9.5 14c-.086 0-.168-.011-.25-.025-.083.01-.164.025-.25.025a2 2 0 1 1 2-2c0 .085-.015.167-.025.25.013.082.025.164.025.25zm4 1.5c-.086 0-.167-.015-.25-.025a1.471 1.471 0 0 1-.25.025 1.5 1.5 0 0 1-1.5-1.5c0-.085.012-.168.025-.25-.01-.083-.025-.164-.025-.25a2 2 0 1 1 2 2z"></path>
        </svg>

        {withText && (
          <span className="font-regular tracking-tigh text-slate-200">
            Lang
            <span className="font-extrabold tracking-wider text-blue-600 ">
              UI
            </span>
          </span>
        )}
      </div>
    </Link>
  )
}
