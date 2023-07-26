import matter from 'gray-matter'
import { join } from 'path'
import { promises as fs } from 'fs'
import Link from 'next/link'
import HeroPattern from '@component/HeroPattern'
import HeroGradient from '@component/HeroGradient'
import BrandLogo from '@component/BrandLogo'
import CollectionGrid from '@component/CollectionGrid'
import HeroBadge from '@/components/HeroBadge'

export async function generateMetadata({ params }) {
  const { categoryData } = await getCategory(params)

  return {
    title: `Tailwind CSS ${categoryData.title} Components | LangUI`,
    description: categoryData.description,
    openGraph: {
      title: `Tailwind CSS ${categoryData.title} Components | LangUI`,
      description: categoryData.description,
      url: 'https://LangUI.dev/',
      siteName: 'LangUI',
      type: 'website',
      image: 'https://LangUI.dev/og.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Tailwind CSS ${categoryData.title} Components | LangUI`,
      description: categoryData.description,
    },
  }
}

export async function generateStaticParams() {
  return ['components']
}

async function getCategory(params) {
  const componentsPath = join(process.cwd(), '/src/data/components')
  const categoriesPath = join(process.cwd(), '/src/data/categories')

  const categorySlug = params.category
  const categoryPath = join(categoriesPath, `${categorySlug}.mdx`)

  const componentSlugs = await fs.readdir(componentsPath)
  const categoryItem = await fs.readFile(categoryPath, 'utf-8')

  const { data: categoryData } = matter(categoryItem)

  const componentItems = await Promise.all(
    componentSlugs
      .filter((componentSlug) => componentSlug.includes(categorySlug))
      .map(async (componentSlug) => {
        const componentPath = join(componentsPath, componentSlug)
        const componentItem = await fs.readFile(componentPath, 'utf-8')

        const { data: componentData } = matter(componentItem)

        const componentSlugFormatted = componentSlug.replace('.mdx', '')
        const componentSlugTrue = componentSlugFormatted.replace(
          `${categorySlug}-`,
          ''
        )
        const componentCount = Object.values(componentData.components).length

        return {
          title: componentData.title,
          slug: componentSlugTrue,
          category: componentData.category,
          emoji: componentData.emoji,
          count: componentCount,
        }
      })
  )

  return {
    categoryData,
    componentItems,
  }
}

export default async function Page({ params }) {
  const { categoryData, componentItems } = await getCategory(params)

  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-900">
        <HeroGradient />
        <HeroPattern />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pb-32 lg:px-3 lg:py-32 xl:px-6">
          <div className="flex-shrink-0 text-center lg:mx-auto lg:max-w-6xl lg:pt-8">
            <BrandLogo withText={false} size={'16'} />

            <h1 className="mt-10 bg-gradient-to-r from-gray-200/60 via-gray-200 to-gray-200/60 bg-clip-text text-center font-bold tracking-tight text-transparent text-4xl sm:text-5xl md:text-6xl max-w-6xl mx-auto">
              <span className="underline decoration-blue-600">55+</span>{' '}
              responsive and dark mode enabled components to build your AI LLM
              apps.
            </h1>
          </div>
          <div className="mt-10 sm:mt-20">
            <CollectionGrid componentItems={componentItems} />
          </div>
        </div>
      </section>
    </>
  )
}
