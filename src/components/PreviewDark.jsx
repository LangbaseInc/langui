export default function PreviewDark({ isDarkMode, handleSetIsDarkMode }) {
  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="inline-flex h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  )

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="inline-flex h-4 w-4"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="rounded-lg border border-slate-200/20">
          <div className="flex text-xs font-semibold leading-5">
            <button
              onClick={() => handleSetIsDarkMode(!isDarkMode)}
              disabled={isDarkMode}
              className={
                `flex w-auto gap-2 rounded-lg px-4 py-2 focus:outline-none` +
                ` ` +
                (isDarkMode ? `bg-blue-600 text-slate-50` : `text-slate-300`)
              }
            >
              {darkIcon}
            </button>
            <button
              onClick={() => handleSetIsDarkMode(!isDarkMode)}
              disabled={!isDarkMode}
              className={
                `flex gap-2 rounded-lg px-4 py-2.5 focus:outline-none` +
                ` ` +
                (!isDarkMode ? `bg-blue-600 text-slate-50` : `text-slate-300`)
              }
            >
              {lightIcon}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
