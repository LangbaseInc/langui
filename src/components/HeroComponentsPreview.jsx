export default function HeroComponentsPreview() {
  return (
    <>
      <div class="col-span-2 h-max rounded-lg border border-slate-200 bg-white px-3 py-6 shadow dark:border-slate-700 dark:bg-slate-800 sm:col-span-1 sm:max-w-xs">
        <div class="flex items-center justify-between">
          <div class="flex">
            <div class="relative inline-flex">
              <span class="absolute bottom-0 right-0 h-3 w-3 rounded-full border bg-green-600 dark:border-slate-900 dark:bg-green-600 dark:text-slate-100"></span>
              <img
                src="https://source.unsplash.com/40x40/?portrait"
                alt="user"
                class="h-10 w-10 rounded-full bg-slate-400 dark:border-slate-700"
              />
            </div>
            <div class="ml-4 flex flex-col gap-y-2">
              <h3 class="text-sm font-bold text-slate-900 dark:text-slate-200">
                John Doe
              </h3>
              <span class="text-xs text-slate-400">johndoe@gmail.com</span>
            </div>
          </div>
          <span class="rounded-full bg-green-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-green-600">
            Free
          </span>
        </div>
        <button
          class="mt-6 w-full rounded-lg border border-slate-300 p-4 text-center text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-blue-600 hover:text-slate-50 focus:outline-none dark:border-slate-700 dark:text-slate-200"
          type="button"
        >
          ✨ Upgrade to Pro
        </button>
      </div>
      <div className="flex flex-col items-start justify-around gap-y-4 sm:gap-y-0">
        <div className="flex justify-center">
          <div className="rounded-full border border-slate-300 p-1 dark:border-slate-300/20">
            <div className="flex text-xs font-semibold leading-5">
              <button className="w-auto rounded-full bg-blue-600 px-3 py-1 text-slate-200 focus:outline-none">
                Monthly
              </button>
              <button className="rounded-full px-3 py-1 text-slate-800 focus:outline-none dark:text-slate-200">
                Yearly
              </button>
            </div>
          </div>
        </div>
        <button class="inline-flex items-center gap-x-1 rounded-lg bg-slate-200 p-2 text-xs text-slate-600 hover:bg-blue-600 hover:text-slate-200 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-blue-600 sm:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline h-4 w-4"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
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
            class="inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-3.5 py-2.5 text-center text-xs font-medium text-slate-50 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 sm:text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
            Send
          </button>
          <button
            type="button"
            class="inline-flex items-center gap-x-2 rounded-lg bg-slate-700 px-3.5 py-2.5 text-center text-xs font-medium text-slate-50 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 sm:text-sm"
          >
            Cancel
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Only */}
      <div className="flex flex-col items-start justify-start gap-4 sm:hidden">
        <span class="inline-flex h-max items-center gap-x-1 rounded-full bg-yellow-600/10 px-2.5 py-1 text-sm font-semibold leading-5 text-yellow-600">
          Summarize
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M10 10l4 4m0 -4l-4 4"></path>
          </svg>
        </span>
        <span class="inline-flex h-max items-center gap-x-1 rounded-full bg-green-600/10 px-2.5 py-1 text-sm font-semibold leading-5 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M9 12l2 2l4 -4"></path>
          </svg>
          Done
        </span>
      </div>

      <div className="col-span-2 flex flex-col sm:col-span-1 sm:max-w-xs">
        <a class="cursor-pointer rounded-lg border-2 border-slate-300 bg-slate-50 transition-colors hover:border-blue-600 dark:border-slate-300/20 dark:bg-slate-900 dark:hover:border-blue-600">
          <div class="flex w-full items-center justify-between p-6">
            <h2 class="text-base font-medium text-slate-900 transition-colors dark:text-slate-200">
              Code generation
            </h2>

            <div className="text-slate-900 dark:text-slate-200">
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
                <path d="M5 12l14 0"></path>
                <path d="M15 16l4 -4"></path>
                <path d="M15 8l4 4"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>

      <div className="hidden items-center gap-2 sm:flex">
        <span class="inline-flex h-max items-center gap-x-1 rounded-full bg-yellow-600/10 px-2.5 py-1 text-sm font-semibold leading-5 text-yellow-600">
          Summarize
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M10 10l4 4m0 -4l-4 4"></path>
          </svg>
        </span>
        <span class="inline-flex h-max items-center gap-x-1 rounded-full bg-green-600/10 px-2.5 py-1 text-sm font-semibold leading-5 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M9 12l2 2l4 -4"></path>
          </svg>
          Done
        </span>
      </div>
      <form className="col-span-2">
        <label for="chat-input" class="sr-only">
          Enter your prompt
        </label>
        <div class="relative">
          <textarea
            id="chat-input"
            class="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pr-16 text-sm text-slate-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-500 sm:text-base"
            placeholder="Enter your prompt"
            rows="1"
            required
          ></textarea>
          <button
            type="button"
            class="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 p-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              aria-hidden="true"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
            <span class="sr-only">Send message</span>
          </button>
        </div>
      </form>
      <div className="col-span-2 rounded-lg bg-slate-50 shadow dark:bg-slate-900">
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <button className="group flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="truncate text-sm font-medium text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-600">
                Linux Terminal
              </h3>
            </div>
            <p className="mt-1 truncate text-sm text-slate-500">
              I want you to act as a linux terminal. I will type commands and
              you will reply with what the terminal should show.
            </p>
          </button>
          <button className="flex flex-shrink-0 flex-col items-center gap-y-1 rounded-lg p-1 text-xs text-slate-200 transition-colors hover:text-blue-600 focus:text-blue-600">
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
              <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
            </svg>
            <span>23</span>
          </button>
        </div>
      </div>

      {/* <form className="col-span-2">
        <div class="mb-4 w-full max-w-3xl rounded-lg bg-slate-200 dark:bg-slate-900">
          <div class="rounded-lg rounded-b-none border border-slate-300 bg-slate-50 px-2 py-2 dark:border-slate-700 dark:bg-slate-800">
            <label for="prompt-input" class="sr-only">
              Enter your prompt
            </label>
            <textarea
              id="prompt-input"
              rows="4"
              class="w-full border-0 bg-slate-50 px-0 text-base text-slate-900 focus:outline-none focus:ring-0 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400"
              placeholder="Enter your prompt"
              required
            ></textarea>
          </div>
          <div class="flex items-center justify-between px-2 py-2">
            <button
              type="button"
              class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-slate-50"
            >
              <span class="sr-only">Attach file</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"></path>
              </svg>
              <span class="px-2 text-sm">Attach a file</span>
            </button>
            <button
              type="button"
              class="inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-slate-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 sm:text-base"
            >
              Generate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 14l11 -11"></path>
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
              </svg>
            </button>
          </div>
        </div>
      </form> */}
      <div class="col-span-2 flex-1 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm text-slate-900 dark:bg-slate-800 dark:text-slate-200 sm:text-base">
        <div class="flex flex-row px-2 py-4 sm:px-4">
          <img
            class="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
            src="https://dummyimage.com/256x256/363536/ffffff&text=U"
          />

          <div class="flex max-w-3xl items-center">
            <p>Explain quantum computing in simple terms</p>
          </div>
        </div>
        <div class="mb-2 flex w-full flex-row justify-end gap-x-2 text-slate-500">
          <button class="hover:text-blue-500" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
              <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
            </svg>
          </button>
          <button class="hover:text-blue-500" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
            </svg>
          </button>
          <button class="hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
            </svg>
          </button>
        </div>
        <div class="mb-4 flex rounded-xl bg-slate-200 px-4 py-4 dark:bg-slate-900">
          <img
            class="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
            src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
          />

          <div class="flex max-w-3xl items-center rounded-xl">
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
    </>
  )
}
