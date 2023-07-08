export default function ButtonStyle({ buttonIcon, buttonText, buttonActive }) {
  const buttonClasses = {
    DEFAULT: `border-slate-200/20 ${
      buttonActive
        ? 'text-slate-200 bg-blue-600'
        : 'text-slate-200 hover:bg-blue-600'
    }`,
  }

  const buttonClass = buttonClasses.DEFAULT

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2.5 transition-colors ${buttonClass}`}
    >
      {buttonIcon && (
        <span aria-hidden="true" role="img" className="text-sm">
          {buttonIcon}
        </span>
      )}

      {buttonText && <span className="text-xs font-medium">{buttonText}</span>}
    </span>
  )
}
