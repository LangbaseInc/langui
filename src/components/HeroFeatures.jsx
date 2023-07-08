export default function HeroFeatures() {
  return (
    <div class="mx-auto mb-10 max-w-7xl px-6 lg:px-3 xl:px-6">
      <h2
        id="features"
        class="text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl"
      >
        <span class="underline decoration-blue-600">Ready to use</span>{' '}
        components
      </h2>

      <p class="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
        Accelerate your development with pre-built, easy to integrate, and
        reusable UI components.
      </p>

      <div class="mt-20 grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 md:max-w-none md:grid-cols-2 xl:grid-cols-3 xl:gap-16">
        <div class="space-y-2">
          <span class="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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

          <h3 class="text-xl font-semibold capitalize text-slate-200">
            Copy & Paste
          </h3>

          <p class="text-slate-400">
            Zero dependencies. No installations required. Pick your component.
            Copy'n paste it into your project and see the magic.
          </p>
        </div>

        <div class="space-y-2">
          <span class="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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

          <h3 class="text-xl font-semibold capitalize text-slate-200">
            Open Source
          </h3>

          <p class="text-slate-400">
            The components are yours. Use, change, or monetize them. No credits
            required. Feeling generous? Support us on GitHub and Product Hunt.
          </p>
        </div>

        <div class="space-y-2">
          <span class="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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

          <h3 class="text-xl font-semibold capitalize text-slate-200">
            Dark mode
          </h3>

          <p class="text-slate-400">
            All components support light and dark modes. Carefully designed to
            look the best across both modes.
          </p>
        </div>

        <div class="space-y-2">
          <span class="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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

          <h3 class="text-xl font-semibold capitalize text-slate-200">
            Fully responsive
          </h3>

          <p class="text-slate-400">
            Components are responsively designed to look great on any screen
            size.
          </p>
        </div>
        <div class="space-y-2">
          <span class="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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

          <h3 class="text-xl font-semibold capitalize text-slate-200">
            Easy to customize
          </h3>

          <p class="text-slate-400">
            Every component in this library is designed with two colors: slate
            and blue, allowing effortless customization.
          </p>
        </div>

        <div class="space-y-2">
          <span class="mb-4 inline-block rounded-full bg-blue-600 p-3 text-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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

          <h3 class="text-xl font-semibold capitalize text-slate-200">
            Request components
          </h3>

          <p class="text-slate-400">
            Request new components through GitHub. Collaborations are also
            welcome.
          </p>
        </div>
      </div>
    </div>
  )
}
