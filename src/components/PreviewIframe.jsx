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
        className={`h-[400px] w-full rounded-lg border border-slate-200/20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8ZGVmcz4KPHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjgiIGhlaWdodD0iOCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxwYXRoIGQ9Ik0gOCAwIEwgMCAwIDAgOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjAuMyIgc3Ryb2tlLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgo8L3BhdHRlcm4+CjxwYXR0ZXJuIGlkPSJtZWRpdW1HcmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjc21hbGxHcmlkKSI+PC9yZWN0Pgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJncmF5IiBzdHJva2Utd2lkdGg9IjAuOCIgc3Ryb2tlLW9wYWNpdHk9IjAuMiI+PC9wYXRoPgo8L3BhdHRlcm4+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9InVybCgjbWVkaXVtR3JpZCkiPjwvcmVjdD4KPHBhdGggZD0iTSA4MCAwIEwgMCAwIDAgODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiPjwvcGF0aD4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD4KPC9zdmc+')] lg:h-[600px] lg:transition-all ${
          previewDark ? 'bg-slate-950' : 'bg-slate-100'
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
