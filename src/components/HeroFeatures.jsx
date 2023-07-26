import Link from 'next/link'
import HeroBadge from './HeroBadge'

export default function HeroFeatures() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-3 xl:px-6">
      <div className="mb-3 flex items-center justify-center">
        <HeroBadge>
          Embrace the magic of our ready-to-rock AI components
        </HeroBadge>
      </div>
      <h2
        id="features"
        className="scroll-mt-40 bg-gradient-to-r from-gray-200/60 via-gray-200 to-gray-200/60 bg-clip-text text-center  font-bold tracking-tight text-transparent text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-6xl mx-auto"
      >
        <span className="underline decoration-blue-600">Ready to use AI
          components</span>. Accelerate your development with pre-built, easy to
        integrate, & reusable UI components.

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
        <div className="max-w-md group space-y-2 ">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:group-hover:animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </span>

          <h3 className="text-xl font-semibold capitalize text-slate-200">
            Copy & Paste
          </h3>

          <p className="text-slate-400">
            Zero dependencies. Zero installations. Simply pick your desired component, copy'n paste it into your project, and behold the magic!
          </p>
        </div>

        <div className="max-w-md group space-y-2 ">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:group-hover:animate-pulse"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M10.5 10.5c-.847 -.71 -2.132 -.658 -2.914 .116a1.928 1.928 0 0 0 0 2.768c.782 .774 2.067 .825 2.914 .116"></path>
              <path d="M16.5 10.5c-.847 -.71 -2.132 -.658 -2.914 .116a1.928 1.928 0 0 0 0 2.768c.782 .774 2.067 .825 2.914 .116"></path>
            </svg>
          </span>

          <h3 className="text-xl font-semibold capitalize text-slate-200">
            Free & Open Source
          </h3>

          <p className="text-slate-400">
            MIT licensed. Use LangUI components in both personal and commericial projects for free. Feeling generous? <a className="font-semibold hover:text-blue-600 transition-colors" href="https://github.com/ahmadbilaldev/langui" target='_blank'>Star on GitHub</a>.
          </p>
        </div>

        <div className="max-w-md group space-y-2 ">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:group-hover:animate-pulse"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
            </svg>
          </span>

          <h3 className="text-xl font-semibold capitalize text-slate-200">
            Dark & Light modes
          </h3>

          <p className="text-slate-400">
            Meticulously crafted to shine in both light and dark modes, making sure you look slick and stylish no matter what you prefer.
          </p>
        </div>

        <div className="max-w-md group space-y-2 ">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:group-hover:animate-pulse"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
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
            LangUI components have got the magic touch to make your app look fabulous on screens of all shapes and sizes!
          </p>
        </div>
        <div className="max-w-md group space-y-2 ">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:group-hover:animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              />
            </svg>
          </span>

          <h3 className="text-xl font-semibold capitalize text-slate-200">
            Easy to customize
          </h3>

          <p className="text-slate-400">Customize like a boss. Two-color design palette - slate and blue - offering endless possibilities for every component in this library.</p>
        </div>

        <div className="max-w-md group space-y-2">
          <span className="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:group-hover:animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </span>

          <h3 className="text-xl font-semibold capitalize text-slate-200">
            Request components
          </h3>
          <p className="text-slate-400">
            Psst... ready for the AI UI revolution? Send us your wickedly cool component requests on GitHub, and let's cook up something spicy together!
          </p>
        </div>
      </div>
    </div>
  )
}
