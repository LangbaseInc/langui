'use client'
import { useState, useEffect } from 'react'
import IconGithub from './IconGithub'
import Link from 'next/link'

const fetchStars = async () => {
  const res = await fetch('https://api.github.com/repos/ahmadbilaldev/langui', {
    next: { revalidate: 1500 },
  })
  const data = await res.json()
  if (!res.ok) {
    return null
  }
  return data.stargazers_count
}

export default function ButtonGithubStars() {
  const [starCount, setStarCount] = useState(null)

  useEffect(() => {
    const stars = fetchStars()
    setStarCount(stars)
    console.log(stars)
  }, [])

  return (
    <Link href="https://github.com/ahmadbilaldev/langui" target="_blank">
      <div className="hidden items-center rounded-lg border border-slate-200/10 bg-slate-800 transition-colors hover:bg-slate-700 lg:flex">
        <div
          type="button"
          className="font-poppins flex w-full items-center gap-2 px-2 py-1 text-xs font-medium text-slate-300"
        >
          <IconGithub size="4" />
          Star
          {starCount && (
            <span
              type="button"
              className=" rounded-xl bg-slate-700 p-1.5 font-sans text-xs font-medium text-slate-300"
            >
              {starCount}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
