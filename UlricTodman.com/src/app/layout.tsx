import { type Metadata } from 'next'
import { Fraunces } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { PERSONAL_INFO, SITE_CONFIG } from '@/lib/constants'

import '@/styles/tailwind.css'

// Engram's hero wordmark face — exposed as a CSS var for the project monogram.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: {
    template: `%s - ${PERSONAL_INFO.name}`,
    default: SITE_CONFIG.title,
  },
  description: PERSONAL_INFO.shortBio,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
