import CollectionCard from '@component/CollectionCard'

export default function CollectionGrid({ componentItems }) {
  const sortByChatKeyword = (first, second) => {
    const hasChatFirst = first.title.includes('Chat')
    const hasChatSecond = second.title.includes('Chat')

    if (hasChatFirst && !hasChatSecond) {
      return -1
    } else if (!hasChatFirst && hasChatSecond) {
      return 1
    } else {
      return 0
    }
  }
  const arrangedComponents = componentItems.sort(sortByChatKeyword)

  return (
    <ul className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
      {arrangedComponents.map((componentData) => (
        <li key={componentData.slug}>
          <CollectionCard componentData={componentData} />
        </li>
      ))}
    </ul>
  )
}
