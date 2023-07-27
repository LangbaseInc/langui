import Container from '@component/Container'
import BrandLogo from '@component/BrandLogo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/10 bg-slate-900">
      <Container classNames="py-8 px-4 max-w-screen-xl lg:py-12">
        <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
          <BrandLogo fontSize="text-lg" />
          <ul className="text-center">
            <li className="relative inline-block pr-8 before:absolute before:right-3 before:top-1/2 before:-translate-y-1/2 before:text-slate-300 before:content-['/'] last:pr-0 last-of-type:before:hidden dark:before:text-slate-600">
              <Link
                className="inline-flex gap-x-2 text-sm text-slate-400 hover:text-slate-200"
                href="/components"
              >
                Components
              </Link>
            </li>
            <li className="relative inline-block pr-8 before:absolute before:right-3 before:top-1/2 before:-translate-y-1/2 before:text-slate-300 before:content-['/'] last:pr-0 last-of-type:before:hidden dark:before:text-slate-600">
              <Link
                className="inline-flex gap-x-2 text-sm text-slate-400 hover:text-slate-200"
                href="#"
              >
                GitHub
              </Link>
            </li>
            <li className="relative inline-block pr-8 before:absolute before:right-3 before:top-1/2 before:-translate-y-1/2 before:text-slate-300 before:content-['/'] last:pr-0 last-of-type:before:hidden dark:before:text-slate-600">
              <Link
                className="inline-flex gap-x-2 text-sm text-slate-400 hover:text-slate-200"
                href="https://twitter.com/ahmadbilaldev"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col items-center gap-y-4 md:flex-row md:justify-between">
          <p className="max-w-md text-center text-sm leading-relaxed text-slate-400">
            Beautifully crafted Tailwind components for your GPT projects
          </p>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            Created by{' '}
            <Link
              href="https://ahmadbilal.dev"
              target="_blank"
              className="underline decoration-blue-600 decoration-2 underline-offset-2 hover:text-slate-200"
            >
              {' '}
              Ahmad Bilal
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}
