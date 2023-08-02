import Container from '@component/Container'
import HeroPattern from './HeroPattern'
import HeroGradient from './HeroGradient'
import BrandLogo from './BrandLogo'
import HeroComponentsPreview from './HeroComponentsPreview'
import HeroFeatures from './HeroFeatures'
import Link from 'next/link'
import HeroBadge from './HeroBadge'

export default function HeroBanner({ children, subtitle, title }) {
  return (
    <section className="bg-slate-900">
      <Container classNames="py-8 lg:py-12">
        <div className="relative isolate overflow-hidden lg:mb-40">
          <HeroPattern />
          <HeroGradient />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:pb-32 lg:flex lg:px-3 lg:py-32 xl:px-6">
            <div className="max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-lg lg:pt-8 xl:max-w-xl">
              <BrandLogo withText={false} size={'16'} />
              <div className="mt-12 lg:mt-12">
                <HeroBadge>The perfect UI for your AI</HeroBadge>
              </div>
              <h1 className="mt-6 bg-gradient-to-r from-gray-200/60 via-gray-200 to-gray-200/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                Beautiful components for your AI projects
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-300 md:text-xl md:leading-10">
                LangUI is an Open Source Tailwind library with free to use
                components tailored for your AI and GPT projects. Focus on
                building the next best project and let it handle the UI.
              </p>
              <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row sm:items-center">
                <Link
                  href="/components"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-slate-50 transition-colors  hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Browse AI components{' '}
                  <span className="ml-1 h-fit animate-pulse rounded-md bg-white bg-opacity-25 px-2 py-1 text-[10px] leading-3">
                    60+
                  </span>
                </Link>

                <a
                  href="#features"
                  className="group inline-flex justify-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-slate-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Learn more{' '}
                  <span
                    className="inline-flex pl-2 transition-transform group-hover:translate-y-1 group-hover:transform"
                    aria-hidden="true"
                  >
                    &darr;
                  </span>
                </a>
              </div>
            </div>
            <div className="mx-auto ml-0 mt-16 grid w-full max-w-4xl auto-cols-max auto-rows-max grid-cols-2 gap-x-2 gap-y-4 lg:-mt-10 lg:ml-4 lg:grid-cols-2 xl:ml-32 xl:grid-cols-1">
              <HeroComponentsPreview />
            </div>
          </div>
        </div>
        <HeroFeatures />
      </Container>
    </section>
  )
}
