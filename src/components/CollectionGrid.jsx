import CollectionCard from '@component/CollectionCard'

export default function CollectionGrid({ componentItems }) {
  return (
    <ul className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
      {componentItems.map((componentData) => (
        <li key={componentData.slug}>
          <CollectionCard componentData={componentData} />
        </li>
      ))}
    </ul>
  )
}
