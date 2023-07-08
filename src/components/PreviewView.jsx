import ButtonStyle from '@component/ButtonStyle'

export default function PreviewView({ showPreview, handleSetShowPreview }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="rounded-lg border border-slate-200/20">
          <div className="flex text-xs font-bold leading-5">
            <button
              onClick={() => handleSetShowPreview(!showPreview)}
              disabled={showPreview}
              className={
                `flex w-auto gap-2 rounded-lg px-4 py-2 focus:outline-none` +
                ` ` +
                (showPreview ? `bg-blue-600 text-slate-50` : `text-slate-300`)
              }
            >
              Preview
            </button>
            <button
              onClick={() => handleSetShowPreview(!showPreview)}
              disabled={!showPreview}
              className={
                `flex gap-2 rounded-lg px-4 py-2 focus:outline-none` +
                ` ` +
                (!showPreview ? `bg-blue-600 text-slate-50` : `text-slate-300`)
              }
            >
              Code
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
