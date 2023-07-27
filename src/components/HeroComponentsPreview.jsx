'use client'

import { useState } from 'react'
import HeroGradient from './HeroGradient'

export default function HeroComponentsPreview() {
  const [isMonthly, setIsMonthly] = useState(true)
  const [bookmark, setBookmark] = useState(false)

  return (
    <>
      <div className="col-span-2 h-max rounded-lg border border-slate-200 bg-white px-3 py-6 shadow dark:border-slate-700 dark:bg-slate-800 sm:col-span-1 sm:max-w-xs">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="relative inline-flex">
              <span className="absolute bottom-0 right-2 -mr-1 -mt-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
              <img
                src="https://source.unsplash.com/40x40/?portrait"
                alt="user"
                className="h-10 w-10 rounded-full bg-slate-400 dark:border-slate-700"
              />
            </div>
            <div className="ml-4 flex flex-col gap-y-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200">
                AI Agent
              </h3>
              <span className="text-xs text-slate-400">
                Business metrics analyzer
              </span>
            </div>
          </div>
          <span className="rounded-full bg-green-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-green-600">
            Free
          </span>
        </div>
        <button
          className="mt-6 w-full rounded-lg border border-slate-300 p-4 text-center text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-blue-600 hover:text-slate-50 focus:outline-none dark:border-slate-700 dark:text-slate-200"
          type="button"
        >
          ✨ Upgrade to Pro
        </button>
      </div>
      <div className="flex flex-col items-start justify-around gap-y-4 sm:items-end sm:gap-y-0 lg:justify-between">
        <div className="flex justify-center">
          <div className="rounded-full border border-slate-300 p-1 dark:border-slate-300/20">
            <div className="flex text-xs font-semibold leading-5">
              <button
                className={
                  `w-auto rounded-full px-3 py-1 text-slate-50 focus:outline-none` +
                  ` ` +
                  (isMonthly ? `bg-blue-600` : ``)
                }
                disabled={isMonthly}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={
                  `rounded-full px-3 py-1 text-slate-50 focus:outline-none` +
                  ` ` +
                  (isMonthly ? `` : `bg-blue-600`)
                }
                disabled={!isMonthly}
                onClick={() => setIsMonthly(false)}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
        <button className="inline-flex items-center gap-x-1 rounded-lg bg-slate-200 p-2 text-xs text-slate-600 hover:bg-blue-600 hover:text-slate-200 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-blue-600 sm:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"></path>
            <path d="M20 4v5h-5"></path>
          </svg>
          Regenerate response
        </button>
        <div className="flex gap-x-2">
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-3.5 py-2.5 text-center text-xs font-medium text-slate-50 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 sm:text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
            Send
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-lg bg-slate-700 px-3.5 py-2.5 text-center text-xs font-medium text-slate-50 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 sm:text-sm"
          >
            Cancel
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Only */}
      <div className="flex flex-col items-end justify-center gap-4 sm:hidden">
        <div>
          <span class="inline-flex items-center gap-x-2 rounded-full bg-green-600/10 px-2.5 py-1 text-sm font-semibold leading-5 text-green-600">
            <span class="inline-block h-1.5 w-1.5 rounded-full bg-green-600"></span>
            Approved
          </span>
        </div>
        <div>
          <span class="inline-flex items-center gap-x-2 rounded-full bg-amber-600/10 px-2.5 py-1 text-sm font-semibold leading-5 text-amber-600">
            <span class="inline-block h-1.5 w-1.5 rounded-full bg-amber-600"></span>
            Pending
          </span>
        </div>
        <div>
          <span class="inline-flex items-center gap-x-2 rounded-full bg-blue-600/10 px-2.5 py-1 text-sm font-semibold leading-5 text-blue-600">
            <span class="inline-block h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            In Progress
          </span>
        </div>
      </div>

      <div className="group col-span-2 flex rounded-lg bg-slate-900 text-slate-200 transition-colors duration-300 hover:bg-blue-600 sm:col-span-1">
        <div className="flex cursor-pointer items-center justify-between space-x-6 truncate p-6">
          <div className="flex flex-col items-center gap-y-1 rounded-lg text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 6l7 7l-4 4"></path>
              <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z"></path>
              <path d="M4 20l1.768 -1.768"></path>
            </svg>
          </div>
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className=" text-sm font-medium text-slate-200 group-hover:text-slate-50">
                Screenwriter
              </h3>
            </div>
            <p className="mt-1 truncate text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
              I want you to act as a screenwriter. You will develop an engaging
              and creative script for either a feature length film or a Web
              Series that can captivate its viewers.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden items-center justify-end gap-2 sm:flex">
        <div>
          <span class="inline-flex items-center gap-x-2 rounded-full bg-green-600/10 px-2.5 py-1 text-sm font-semibold leading-5 text-green-600">
            <span class="inline-block h-1.5 w-1.5 rounded-full bg-green-600"></span>
            Approved
          </span>
        </div>
        <div>
          <span class="inline-flex items-center gap-x-2 rounded-full bg-amber-600/10 px-2.5 py-1 text-sm font-semibold leading-5 text-amber-600">
            <span class="inline-block h-1.5 w-1.5 rounded-full bg-amber-600"></span>
            Pending
          </span>
        </div>
      </div>
      <form className="col-span-2">
        <label for="chat-input" className="sr-only">
          Enter prompt here …
        </label>
        <div className="relative">
          <textarea
            id="chat-input"
            className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pr-16 text-sm text-slate-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-600 sm:text-base"
            placeholder="Enter prompt here …"
            rows="1"
            required
          ></textarea>
          <button
            type="button"
            className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 p-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              aria-hidden="true"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
      <div className="col-span-2 rounded-xl bg-slate-50 dark:bg-slate-900">
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <button className="group flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="truncate text-sm font-medium text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-600">
                Linux Terminal
              </h3>
            </div>
            <p className="mt-1 truncate text-sm text-slate-500">
              I want you to act as a linux terminal. I will type commands and
              you will reply with the result that the terminal should show as a
              result of the command.
            </p>
          </button>
          <button
            className={
              `flex flex-shrink-0 flex-col items-center gap-y-1 rounded-lg p-1 text-xs transition-colors hover:text-blue-600` +
              ` ` +
              (bookmark ? `text-blue-600` : `text-slate-200`)
            }
            onClick={() => setBookmark(!bookmark)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill={bookmark ? 'currentColor' : 'none'}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
            </svg>
            <span className="text-slate-200">
              {bookmark ? <>24</> : <>23</>}
            </span>
          </button>
        </div>
      </div>

      <div className="col-span-2 flex-1 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7">
        <div className="flex flex-row px-2 py-4 sm:px-4">
          <img
            className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
            src="https://dummyimage.com/256x256/363536/ffffff&text=U"
          />

          <div className="flex max-w-3xl items-center">
            <p>Explain quantum computing in simple terms</p>
          </div>
        </div>
        <div className="mb-2 flex w-full flex-row justify-end gap-x-2 text-slate-500">
          <button className="hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
            </svg>
          </button>
          <button className="hover:text-blue-600" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
            </svg>
          </button>
          <button className="hover:text-blue-600" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
              <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
            </svg>
          </button>
        </div>
        <div className="mb-4 flex rounded-xl bg-slate-50 px-2 py-6 dark:bg-slate-900 sm:px-4">
          <img
            className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
            src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
          />

          <div className="flex max-w-3xl items-center rounded-xl">
            <p>
              Certainly! Quantum computing is a new type of computing that
              relies on the principles of quantum physics. Traditional
              computers, like the one you might be using right now, use bits to
              store and process information. These bits can represent either a 0
              or a 1. In contrast, quantum computers use quantum bits, or
              qubits.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <HeroGradient position="top-[50rem] " />
      </div>
    </>
  )
}
