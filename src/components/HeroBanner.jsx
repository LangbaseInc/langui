import Container from '@component/Container'
import HeroPattern from './HeroPattern'
import HeroGradient from './HeroGradient'
import BrandLogo from './BrandLogo'
import HeroComponentsPreview from './HeroComponentsPreview'
import HeroFeatures from './HeroFeatures'

export default function HeroBanner({ children, subtitle, title }) {
  return (
    <section className="bg-slate-900">
      <Container classNames="py-8 lg:py-12">
        <div class="relative isolate overflow-hidden">
          <HeroPattern />
          <HeroGradient />
          <div class="mx-auto max-w-7xl px-6 py-24 sm:pb-32 lg:flex lg:px-3 lg:py-32 xl:px-6">
            <div class="max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-lg lg:pt-8 xl:max-w-xl">
              <BrandLogo withText={false} size={'16'} />
              <div class="mt-12 lg:mt-16">
                <a href="#" class="inline-flex space-x-6">
                  <span class="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-400 ring-1 ring-inset ring-blue-500/20">
                    Tailwind V3.3.1
                  </span>
                </a>
              </div>
              <h1 class="mt-10 text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl">
                Beautiful components for your GPT projects
              </h1>
              <p class="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                GPT UI is an Open Source Tailwind library with free to use
                components tailored for your AI and GPT projects. Focus on
                building the next best project and let it handle the UI.
              </p>
              <div class="mt-10 flex flex-col gap-x-6 gap-y-4 sm:flex-row sm:items-center">
                <a
                  href="/components"
                  class="inline-flex justify-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-slate-50 transition-colors  hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Browse components
                </a>

                <a
                  href="#features"
                  class="group inline-flex justify-center rounded-md border border-slate-200/10 px-3.5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  Learn more{' '}
                  <span
                    class="inline-flex -translate-y-0.5 pl-2 transition-transform group-hover:translate-y-0.5 group-hover:transform"
                    aria-hidden="true"
                  >
                    &darr;
                  </span>
                </a>
              </div>
            </div>
            <div class="mx-auto ml-0 mt-16 grid w-full max-w-4xl auto-cols-max auto-rows-max grid-cols-2 gap-x-2 gap-y-4 lg:-mt-10 lg:ml-4 lg:grid-cols-2 xl:ml-32 xl:grid-cols-1">
              <HeroComponentsPreview />
            </div>
          </div>
        </div>
        <HeroFeatures />
        {/* <Container classNames="px-4 max-w-screen-xl">
            <div className="flex flex-col space-y-4 space-y-reverse">
              <h1 className="order-last text-lg text-slate-200">{subtitle}</h1>

              <h2 className="text-4xl font-bold text-slate-200 sm:text-6xl">
                {title}
              </h2>
            </div>

            <p className="mt-6 max-w-lg text-base/relaxed text-slate-200">
              {children}
            </p>
          </Container> */}
      </Container>
    </section>
  )
}
