import Container from '@component/Container'

export default function HeaderBanner() {
  return (
    <section className="-mt-px border-y border-gray-200 bg-gray-100">
      <Container classNames="py-1.5">
        <a
          href="https://github.com/ahmadbilaldev/langui"
          rel="noreferrer"
          target="_blank"
          className="flex items-center justify-center gap-1.5 transition hover:opacity-75"
        >
          <span className="text-sm/tight font-medium">
            Like LangUI? Star it on GitHub to show your support!
          </span>

          <span aria-hidden="true" role="img">
            💚
          </span>
        </a>
      </Container>
    </section>
  )
}
