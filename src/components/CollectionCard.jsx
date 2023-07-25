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
    PromptContainers: Icons.PromptContainers,
    PromptMessageInputs: Icons.PromptMessageInputs,
    PromptSuggestions: Icons.PromptSuggestions,
    PromptMessages: Icons.PromptMessages,
    PromptInputs: Icons.PromptInputs,
    Pricing: Icons.Pricing,
    Toggles: Icons.Toggles,
    Sidebars: Icons.Sidebars,
    PromptCards: Icons.PromptCards,
    CopytoClipboard: Icons.Copy,
  }
  const Icon = IconData[componentData.title.replace(/\s/g, '')]

  return (
    <Link href={`/${componentData.category}/${componentData.slug}`}>
      <div className="group relative block h-full backdrop-blur-xl">
        <div className="rounded-xl border-2 border-transparent bg-slate-800/20 transition-colors group-hover:bg-blue-600">
          <div className="flex justify-between p-4 sm:p-6">
            <div className="flex flex-col">
              <h2 className="font-medium text-slate-200 sm:text-lg group-hover:text-white">
                {componentData.title}
              </h2>
              <p className="font-meium mt-2 text-sm text-slate-500 group-hover:text-white/60">
                {componentCount}
              </p>
            </div>
            <span
              aria-hidden="true"
              role="img"
              className="mx-2 text-lg text-slate-200 sm:text-2xl group-hover:text-white group-hover:animate-pulse"
            >
              {Icon}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
