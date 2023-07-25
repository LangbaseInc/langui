import Link from 'next/link'
import * as Icons from '@component/CollectionIcons'

export default function CollectionCard({ componentData }) {
  const componentCountPluralize =
    componentData.count > 1 ? 'Components' : 'Component'
  const componentCount = `${componentData.count} ${componentCountPluralize}`

  const IconData = {
    Alerts: Icons.Alerts,
    Buttons: Icons.Buttons,
    Cards: Icons.Cards,
    Badges: Icons.Badges,
    ChatContainers: Icons.ChatContainers,
    ChatInputs: Icons.ChatInputs,
    ChatSuggestions: Icons.ChatSuggestions,
    ChatMessages: Icons.ChatMessages,
    Inputs: Icons.Inputs,
    Pricing: Icons.Pricing,
    Toggles: Icons.Toggles,
    Sidebars: Icons.Sidebars,
    CardsforPrompts: Icons.PromptCards,
    CopytoClipboard: Icons.Copy,
  }
  const Icon = IconData[componentData.title.replace(/\s/g, '')]

  return (
    <Link href={`/${componentData.category}/${componentData.slug}`}>
      <div className="group relative block h-full backdrop-blur-sm">
        <div className="rounded-lg border-2 border-transparent bg-slate-800/20 transition-colors group-hover:border-blue-600">
          <div className="flex  justify-between p-4 sm:p-6">
            <div className="flex flex-col">
              <h2 className="font-medium text-slate-200 sm:text-lg">
                {componentData.title}
              </h2>
              <p className="font-meium mt-2 text-sm text-slate-500">
                {componentCount}
              </p>
            </div>
            <span
              aria-hidden="true"
              role="img"
              className="mx-2 text-lg text-slate-200 sm:text-2xl"
            >
              {Icon}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
