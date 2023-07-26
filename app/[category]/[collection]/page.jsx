import matter from 'gray-matter'
import { join } from 'path'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'

import Container from '@component/Container'
import MdxRemoteRender from '@component/MdxRemoteRender'
import CollectionLinks from '@component/CollectionLinks'
import ComponentsList from '@/components/ComponentsList'

const mdxComponents = {
  ComponentsList,
}

const componentsDirectory = join(process.cwd(), '/src/data/components')

export async function generateMetadata({ params }) {
  const { collectionData } = await getCollection(params)

  return {
    title: `Tailwind CSS ${collectionData.seo.title} | LangUI`,
    description: collectionData.seo.description,
    openGraph: {
      title: `Tailwind CSS ${collectionData.seo.title} | LangUI`,
      description: collectionData.seo.description,
      url: 'https://LangUI.dev/',
      siteName: 'LangUI',
      type: 'website',
      image: 'https://LangUI.dev/og.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Tailwind CSS ${collectionData.seo.title} | LangUI`,
      description: collectionData.seo.description,
    },
  }
}

export async function generateStaticParams() {
  return await fs.readdir(componentsDirectory)
}

async function getCollection(params) {
  const componentPath = join(
    componentsDirectory,
    `${params.category}-${params.collection}.mdx`
  )

  const postItem = await fs.readFile(componentPath, 'utf-8')

  const { content, data: frontmatter } = matter(postItem)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontmatter,
  })

  return {
    collectionData: {
      ...frontmatter,
      slug: params.collection,
    },
    collectionContent: mdxSource,
  }
}

export default async function Page({ params }) {
  const { collectionData, collectionContent } = await getCollection(params)

  const componentsData = {
    componentContainer: collectionData.container || '',
    componentsData: Object.entries(collectionData.components).map(
      ([componentId, componentItem]) => {
        return {
          id: componentId,
          title: componentItem.title,
          slug: collectionData.slug,
          category: collectionData.category,
          container: componentItem.container || '',
          creator: componentItem.creator || '',
          dark: !!componentItem.dark,
          interactive: !!componentItem.interactive,
        }
      }
    ),
  }

  return (
    <Container classNames="px-4 max-w-screen-xl py-24 lg:py-32">
      {/* <CollectionLinks /> */}

      <div className="prose prose-h1:text-slate-200 prose-h1:mb-12 max-w-none">
        <MdxRemoteRender
          mdxSource={collectionContent}
          mdxComponents={mdxComponents}
          mdxScope={componentsData}
        />
      </div>
    </Container>
  )
}
