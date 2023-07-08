import matter from 'gray-matter'
import { join } from 'path'
import { promises as fs } from 'fs'

import Container from '@component/Container'
import HeroPattern from '@component/HeroPattern'
import HeroGradient from '@component/HeroGradient'
import BrandLogo from '@component/BrandLogo'
import CollectionGrid from '@component/CollectionGrid'

export async function generateMetadata({ params }) {
  const { categoryData } = await getCategory(params)

  return {
    title: `Tailwind CSS ${categoryData.title} Components | GPTUI`,
    description: categoryData.description,
    openGraph: {
      title: `Tailwind CSS ${categoryData.title} Components | GPTUI`,
      description: categoryData.description,
      url: 'https://www.gptui.dev/',
      siteName: 'GPTUI',
      type: 'website',
      image: 'https://www.gptui.dev/og.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Tailwind CSS ${categoryData.title} Components | GPTUI`,
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
          <div className="max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-lg lg:pt-8 xl:max-w-xl">
            <BrandLogo withText={false} size={'16'} />

            <h1 className="mt-10 text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl">
              <span className="underline decoration-blue-600">55+</span>{' '}
              Components
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              GPT UI is an Open Source Tailwind library with free to use
              components tailored for your AI and GPT projects. Focus on
              building the next best project and let it handle the UI.
            </p>
          </div>
          <div className="mt-10 sm:mt-20">
            <CollectionGrid componentItems={componentItems} />
          </div>
        </div>
      </section>
    </>
  )
}
