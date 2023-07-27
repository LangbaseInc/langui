import 'prismjs/themes/prism-okaidia.css'
import '@style/site.css'
import { Poppins } from 'next/font/google'
import Footer from '@component/Footer'
import Header from '@component/Header'

const poppins = Poppins({
  variable: '--font-poppins',
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
})

export const metadata = {
  title: 'UI for your AI | LangUI',
  description:
    'Open Source Tailwind CSS components for your AI and GPT projects.',
  openGraph: {
    title: 'UI for your AI | LangUI',
    description:
      'Open Source Tailwind CSS components for your AI and GPT projects.',
    url: 'https://www.LangUI.dev/',
    siteName: 'LangUI',
    type: 'website',
    image: 'https://www.LangUI.dev/og.jpeg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI for your AI | LangUI',
    description:
      'Open Source Tailwind CSS components for your AI and GPT projects.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      className={`${poppins.variable} h-full scroll-smooth`}
      lang="en"
      dir="ltr"
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>

      <body className="bg-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
