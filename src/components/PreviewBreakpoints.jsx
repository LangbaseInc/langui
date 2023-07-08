import ButtonStyle from '@component/ButtonStyle'

export default function PreviewBreakpoint({
  handleSetPreviewWidth,
  previewWidth,
}) {
  const iconMobile = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path>
      <path d="M11 4h2"></path>
      <path d="M12 17v.01"></path>
    </svg>
  )

  const iconTablet = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-3 15h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"></path>
    </svg>
  )

  const iconLaptop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 19l18 0"></path>
      <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path>
    </svg>
  )

  const iconDesktop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path>
      <path d="M7 20h10"></path>
      <path d="M9 16v4"></path>
      <path d="M15 16v4"></path>
    </svg>
  )

  const componentBreakpoints = [
    {
      name: 'Mobile',
      icon: iconMobile,
      width: '425px',
    },
    {
      name: 'Tablet',
      icon: iconTablet,
      width: '768px',
    },
    {
      name: 'Laptop',
      icon: iconLaptop,
      width: '1024px',
    },
    {
      name: 'Desktop',
      icon: iconDesktop,
      width: '100%',
    },
  ]

  return (
    <>
      {componentBreakpoints.map(
        ({
          name: breakpointName,
          icon: breakpointIcon,
          width: breakpointWidth,
        }) => (
          // <PreviewBreakpoints
          //   key={breakpointName}
          //   breakpointText={breakpointName}
          //   breakpointEmoji={breakpointEmoji}
          //   breakpointWidth={breakpointWidth}
          //   handleSetPreviewWidth={setPreviewWidth}
          //   breakpointActive={previewWidth === breakpointWidth}
          // />

          <button
            key={breakpointName}
            onClick={() => handleSetPreviewWidth(breakpointWidth)}
          >
            <ButtonStyle
              buttonIcon={breakpointIcon}
              buttonActive={previewWidth == breakpointWidth}
            />
          </button>
        )
      )}
    </>
  )
}
