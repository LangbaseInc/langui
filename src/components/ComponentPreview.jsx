import { useEffect, useRef, useState } from 'react'

import { useInView } from 'react-intersection-observer'

import { componentPreviewHtml, componentPreviewJsx } from '@util/transformers'

import PreviewBreakpoints from '@/components/PreviewBreakpoints'
import PreviewCode from '@component/PreviewCode'
import PreviewCopy from '@component/PreviewCopy'
import PreviewDark from '@component/PreviewDark'
import PreviewIframe from '@component/PreviewIframe'
import PreviewTitle from '@component/PreviewTitle'
import PreviewView from '@component/PreviewView'

export default function ComponentPreview({
  componentData,
  componentContainer,
}) {
  const refIframe = useRef(null)

  const [componentCode, setComponentCode] = useState('')
  const [componentHtml, setComponentHtml] = useState('')
  const [componentJsx, setComponentJsx] = useState('')
  const [showPreview, setShowPreview] = useState(true)
  const [previewWidth, setPreviewWidth] = useState('100%')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isInteractive, setIsInteractive] = useState(false)
  const [isRtl, setIsRtl] = useState(false)
  const [isJsx, setIsJsx] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const {
    id: componentId,
    title: componentTitle,
    slug: componentSlug,
    category: componentCategory,
    container: componentSpace,
    dark: componentHasDark,
    interactive: componentHasInteractive,
  } = componentData

  const trueComponentContainer = componentSpace
    ? componentSpace
    : componentContainer

  const componentHash = `component-${componentId}`

  useEffect(() => {
    if (inView) {
      fetchHtml({
        useDark: isDarkMode,
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  useEffect(() => {
    if (inView) {
      fetchHtml({
        useDark: isDarkMode,
        useInteractive: isInteractive,
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode, isInteractive])

  useEffect(() => {
    if (inView) {
      const transformedHtml = componentPreviewHtml(
        componentCode,
        trueComponentContainer,
        isDarkMode,
        isRtl
      )

      setComponentHtml(transformedHtml)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRtl])

  async function fetchHtml(useOptions = {}) {
    const { useDark, useInteractive } = useOptions

    const useDarkMode = componentHasDark && useDark
    const useInteractiveMode = componentHasInteractive && useInteractive

    const componentPath = [
      componentId,
      useDarkMode && 'dark',
      useInteractiveMode && 'interactive',
    ]
      .filter(Boolean)
      .join('-')

    const componentUrl = `/components/${componentCategory}-${componentSlug}/${componentPath}.html`

    const fetchResponse = await fetch(componentUrl)
    const textResponse = await fetchResponse.text()
    const transformedHtml = componentPreviewHtml(
      textResponse,
      trueComponentContainer,
      useDark,
      isRtl
    )
    const transformedJsx = componentPreviewJsx(textResponse)

    setComponentCode(textResponse)
    setComponentHtml(transformedHtml)
    setComponentJsx(transformedJsx)
  }

  return (
    <div className="-mt-20 pt-20" ref={ref} id={componentHash}>
      <div className="space-y-8">
        <PreviewTitle
          componentTitle={componentTitle}
          componentHash={componentHash}
        />

        <div className="lg:flex lg:flex-row-reverse lg:items-end">
          {componentCode && (
            <div className="flex items-end gap-4">
              <PreviewView
                handleSetShowPreview={setShowPreview}
                showPreview={showPreview}
              />

              {componentHasDark && (
                <PreviewDark
                  isDarkMode={isDarkMode}
                  handleSetIsDarkMode={setIsDarkMode}
                />
              )}

              <PreviewCopy
                componentCode={isJsx ? componentJsx : componentCode}
              />
            </div>
          )}

          <div className="lg:justify-en hidden lg:flex lg:flex-1 lg:gap-4">
            <PreviewBreakpoints
              handleSetPreviewWidth={setPreviewWidth}
              previewWidth={previewWidth}
              // breakpointActive={previewWidth === breakpointWidth}
            />
          </div>
        </div>

        <div className="relative">
          <div>
            <PreviewIframe
              showPreview={showPreview}
              componentHtml={componentHtml}
              componentTitle={componentTitle}
              previewWidth={previewWidth}
              refIframe={refIframe}
              previewDark={componentHasDark && isDarkMode}
            />

            <PreviewCode
              showPreview={showPreview}
              handleSetIsJsx={setIsJsx}
              isJsx={isJsx}
              showToggle={!isInteractive}
              componentCode={isJsx ? componentJsx : componentCode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
