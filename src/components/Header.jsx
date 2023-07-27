'use client'

import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import Container from '@component/Container'
import BrandLogo from '@component/BrandLogo'
import HeaderMenu from '@component/HeaderMenu'
import HeaderMenuLinks from '@component/HeaderMenuLinks'
import HeaderSearch from '@component/HeaderSearch'
import IconGithub from '@component/IconGithub'
import IconTwitter from '@component/IconTwitter'

export default function Header() {
  const routerPathname = usePathname()

  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => setShowMenu(false), [routerPathname])

  const menuLinks = [
    {
      title: 'Components',
      href: '/components/',
      external: false,
    },
  ]
  const socialLinks = [
    {
      title: 'Twitter',
      href: 'https://twitter.com/ahmadbilaldev',
      external: true,
    },
    {
      title: 'GitHub',
      href: 'https://github.com/ahmadbilaldev/langui',
      external: true,
    },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/10 backdrop-blur ">
      <Container classNames="relative max-w-screen-xl px-4 flex h-16 items-center justify-between gap-4 sm:gap-8 max-w-7xl xl:px-6">
        <div className="flex items-center gap-2 sm:gap-6">
          <BrandLogo fontSize="text-xl" />

          <HeaderMenuLinks
            menuLinks={menuLinks}
            navClass="hidden sm:block lg:flex-1"
            ulClass="gap-4 flex"
          />
        </div>

        <div className="flex items-center justify-end gap-4 sm:gap-8">
          <HeaderSearch />
          <div className="hidden gap-4 sm:flex">
            <GithubLink />
            <TwitterLink />
          </div>
          <HeaderMenu
            showMenu={showMenu}
            handleSetShowMenu={setShowMenu}
            menuLinks={[...menuLinks, ...socialLinks]}
          />
        </div>
      </Container>
    </header>
  )
}

function GithubLink() {
  return (
    <a
      href="https://github.com/ahmadbilaldev/gpt-ui"
      rel="noreferrer"
      target="_blank"
      className="inline-block text-slate-200 hover:opacity-75"
    >
      <span className="sr-only"> GitHub </span>

      <IconGithub />
    </a>
  )
}

const TwitterLink = () => {
  return (
    <a
      href="https://twitter.com/ahmadbilaldev"
      rel="noreferrer"
      target="_blank"
      className="inline-block text-slate-200 hover:opacity-75"
    >
      <span className="sr-only"> Twitter </span>

      <IconTwitter />
    </a>
  )
}
