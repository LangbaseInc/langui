import { useState, useEffect } from 'react'

import { useCopyToClipboard } from 'react-use'

import ButtonStyle from '@component/ButtonStyle'

export default function PreviewCopy({ componentCode = '' }) {
  const IconCopy = (
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
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
    </svg>
  )

  const IconCopied = (
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
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
      <path d="M9 14l2 2l4 -4"></path>
    </svg>
  )

  const [buttonText, setButtonText] = useState('Copy')
  const [buttonIcon, setButtonIcon] = useState(IconCopy)
  const [copyStatus, copyToClipboard] = useCopyToClipboard()
  const buttonActive = buttonText === 'Copied'

  function handleCopyToClipboard() {
    copyToClipboard(componentCode)

    if (copyStatus.error) {
      setButtonText('Error')
      setButtonIcon('🚨')

      return
    }

    setButtonText('Copied')
    setButtonIcon(IconCopied)

    setTimeout(() => {
      setButtonText('Copy')
      setButtonIcon(IconCopy)
    }, 3000)
  }

  return (
    <button className="hidden sm:block" onClick={handleCopyToClipboard}>
      <ButtonStyle
        buttonIcon={buttonIcon}
        buttonText={buttonText}
        buttonActive={buttonActive}
      />
    </button>
  )
}
