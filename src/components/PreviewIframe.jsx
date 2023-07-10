export default function PreviewIframe({
  showPreview,
  componentHtml,
  componentTitle,
  previewWidth = '100%',
  refIframe,
  previewDark,
}) {
  return (
    <div className={showPreview ? 'block' : 'hidden'}>
      <iframe
        className={`h-[400px] w-full rounded-lg border border-slate-200/20 lg:h-[600px] lg:transition-all ${
          previewDark ? 'bg-gray-950' : 'bg-slate-50'
        }`}
        loading="lazy"
        srcDoc={componentHtml}
        style={{ maxWidth: previewWidth }}
        title={`${componentTitle} Component`}
        ref={refIframe}
      ></iframe>
    </div>
  )
}
