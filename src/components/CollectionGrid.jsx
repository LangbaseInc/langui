import CollectionCard from '@component/CollectionCard'

export default function CollectionGrid({ componentItems }) {
  const sortByPromptKeyword = (first, second) => {
    const hasPromptFirst = first.title.includes('Prompt')
    const hasPromptSecond = second.title.includes('Prompt')

    if (hasPromptFirst && !hasPromptSecond) {
      return -1
    } else if (!hasPromptFirst && hasPromptSecond) {
      return 1
    } else {
      return 0
    }
  }
  const arrangedComponents = componentItems.sort(sortByPromptKeyword)

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
