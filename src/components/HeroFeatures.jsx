import Link from 'next/link'
import HeroBadge from './HeroBadge'

export default function HeroFeatures() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-3 xl:px-6">
      <div className="mb-3 flex items-center justify-center">
        <HeroBadge>Embrace the magic of our ready-to-rock components</HeroBadge>
      </div>
      <h2
        id="features"
        className="mx-auto max-w-6xl scroll-mt-40 bg-gradient-to-r from-gray-200/60 via-gray-200 to-gray-200/60  bg-clip-text text-center text-2xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
      >
        <span className="underline decoration-blue-600">
          Ready to use AI components
        </span>
        {'. '}
        Accelerate your development with pre-built, easy to integrate, &
        reusable UI components.
      </h2>

      <div className="mt-8 flex h-full w-full items-center justify-center">
        <Link
          href="/components"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-slate-50 transition-colors  hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          Try the components
        </Link>
      </div>

      <div className="mt-28 grid max-w-xl grid-cols-1 justify-items-center gap-x-8 gap-y-16 text-center sm:max-w-none sm:grid-cols-2 sm:text-left xl:grid-cols-3 xl:gap-16">
        <div className="max-w-md space-y-2">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </span>

          <h3 className="text-xl font-semibold capitalize text-slate-200">
            Copy & Paste
          </h3>

          <p className="text-slate-400">
            Zero dependencies. No installations required. Pick your component.
            Copy&apos;n paste it into your project and see the magic.
          </p>
        </div>

        <div className="max-w-md space-y-2 ">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M10.5 10.5c-.847 -.71 -2.132 -.658 -2.914 .116a1.928 1.928 0 0 0 0 2.768c.782 .774 2.067 .825 2.914 .116"></path>
              <path d="M16.5 10.5c-.847 -.71 -2.132 -.658 -2.914 .116a1.928 1.928 0 0 0 0 2.768c.782 .774 2.067 .825 2.914 .116"></path>
            </svg>
          </span>

          <h3 className="text-xl font-semibold capitalize text-slate-200">
            Open Source
          </h3>

          <p className="text-slate-400">
            The components are yours. Use, change, or monetize them. No credits
            required. Feeling generous? Support us on GitHub and Product Hunt.
          </p>
        </div>

        <div className="max-w-md space-y-2 ">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
            </svg>
          </span>

          <h3 className="text-xl font-semibold capitalize text-slate-200">
            Dark mode
          </h3>

          <p className="text-slate-400">
            All components support light and dark modes. Carefully designed to
            look the best across both modes.
          </p>
        </div>

        <div className="max-w-md space-y-2 ">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z"></path>
              <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"></path>
              <path d="M16 9h2"></path>
            </svg>
          </span>

          <h3 className="text-xl font-semibold capitalize text-slate-200">
            Fully responsive
          </h3>

          <p className="text-slate-400">
            Components are responsively designed to look great on any screen
            size.
          </p>
        </div>
        <div className="max-w-md space-y-2 ">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
          </span>

          <h3 className="text-xl font-semibold capitalize text-slate-200">
            Easy to customize
          </h3>

          <p className="text-slate-400">
            Every component in this library is designed with two colors: slate
            and blue, allowing effortless customization.
          </p>
        </div>

        <div className="max-w-md space-y-2">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </span>

          <h3 className="text-xl font-semibold capitalize text-slate-200">
            Request components
          </h3>
          <p className="text-slate-400">
            Request new components through GitHub. Collaborations are also
            welcome.
          </p>
        </div>
      </div>
    </div>
  )
}
