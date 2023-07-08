import Link from 'next/link'

export default function CollectionCard({ componentData }) {
  const componentCountPluralize =
    componentData.count > 1 ? 'Components' : 'Component'
  const componentCount = `${componentData.count} ${componentCountPluralize}`

  return (
    <Link href={`/${componentData.category}/${componentData.slug}`}>
      <div className="group relative block h-full">
        <div className="rounded-lg bg-slate-800 transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
          <div className="p-4 sm:p-6">
            <span aria-hidden="true" role="img" className="text-lg sm:text-xl">
              {componentData.emoji}
            </span>

            <h2 className="mt-4 font-medium text-slate-200 sm:text-lg">
              {componentData.title}
            </h2>

            <p className="mt-2 text-xs text-slate-300">{componentCount}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
