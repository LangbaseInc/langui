'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Banner() {
  const [toggleBanner, setToggleBanner] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  const handleBannerVisibility = () => {
    setTimeout(() => {
      setIsVisible(true)
    }, 2000)
  }

  useEffect(() => {
    handleBannerVisibility()
  }, [])

  return (
    <>
      {toggleBanner && (
        <div
          tabIndex="-1"
          className="fixed bottom-0 left-0 z-50 hidden w-full justify-between border-t border-slate-200/10 bg-slate-900 p-3 transition-transform duration-1000 sm:flex"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          }}
        >
          <div className="mx-auto flex items-center">
            <Link
              href="https://github.com/ahmadbilaldev/langui"
              target="_blank"
              onClick={() => setToggleBanner(false)}
              className="group flex items-center text-sm font-normal text-slate-400"
            >
              <span>
                Stars are like little virtual hugs that keep us going.
                <span className="ml-0 flex items-center text-sm font-medium text-blue-600 md:ml-1 md:inline-flex">
                  Star LangUI on GitHub
                  <svg
                    className="ml-2 h-3 w-3 transform transition-transform duration-200 ease-out group-hover:translate-x-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setToggleBanner(false)}
              className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg p-1 text-sm text-slate-400 hover:bg-slate-700 hover:text-slate-50"
            >
              <svg
                className="h-2 w-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close banner</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
