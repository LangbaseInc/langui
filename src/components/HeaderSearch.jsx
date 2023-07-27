import { useEffect, useRef, useState } from 'react'

import { usePathname } from 'next/navigation'

import Link from 'next/link'

import { useClickAway, useDebounce } from 'react-use'

export default function HeaderSearch() {
  const routerPathname = usePathname()

  const refDropdown = useRef(null)

  const [showDropdown, setShowDropdown] = useState(false)
  const [initialResults, setInitialResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchQueryDebounced, setSearchQueryDebounced] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getSearchResults = async () => {
      const searchResults = await fetchSearchResults()
      const sortedSearchResults = searchResults.sort((resultA, resultB) =>
        resultA.title.localeCompare(resultB.title)
      )

      setSearchResults(sortedSearchResults)
      setInitialResults(sortedSearchResults)
    }

    getSearchResults()

    return () => {}
  }, [])

  useEffect(() => {
    if (!searchQuery) {
      setSearchResults(initialResults)

      return
    }

    const filteredResults = initialResults.filter(function (initialResult) {
      const { title: initialTitle } = initialResult

      return initialTitle.toLowerCase().includes(searchQuery.toLowerCase())
    })

    setSearchResults(filteredResults)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQueryDebounced])

  useEffect(() => {
    setSearchQuery('')
    setShowDropdown(false)
  }, [routerPathname])

  useClickAway(refDropdown, () => setShowDropdown(false))

  useDebounce(() => setSearchQueryDebounced(searchQuery), 500, [searchQuery])

  async function fetchSearchResults() {
    const searchResults = await fetch('/api/search')
    const searchJson = await searchResults.json()

    return searchJson
  }

  return (
    <div ref={refDropdown} className="relative flex h-16 items-center">
      <form role="search" className="flex max-w-xs sm:w-72 sm:max-w-sm md:w-96">
        <label htmlFor="SiteSearch" className="sr-only">
          Search
        </label>
        <div className="absolute bottom-0 top-6 px-2 text-slate-500">
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
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </div>
        <input
          type="text"
          onInput={(e) => setSearchQuery(e.currentTarget.value)}
          onFocus={() => setShowDropdown(true)}
          value={searchQuery}
          placeholder="Search"
          id="SiteSearch"
          className="w-full rounded-lg border-slate-200/10 bg-slate-800 pl-8 text-sm text-slate-200 placeholder:text-slate-400"
        />

        <button tabIndex={-1} className="sr-only">
          Submit
        </button>
      </form>

      {showDropdown && (
        <div className="absolute right-0 top-14 z-50 w-full rounded-lg border border-slate-200/10 bg-slate-800 shadow-lg">
          {!!searchResults.length ? (
            <ul className="max-h-64 space-y-1 overflow-auto p-2">
              {searchResults.map((searchResult) => (
                <li key={searchResult.id}>
                  <Link
                    href={`/${searchResult.category.slug}/${searchResult.slug}`}
                  >
                    <div className="flex items-center justify-between rounded-md px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-900 focus:bg-slate-50">
                      <span>{searchResult.title}</span>

                      <span className="block rounded bg-slate-900 px-1.5 py-0.5 text-[10px] text-white">
                        {searchResult.category.title}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-sm text-slate-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
