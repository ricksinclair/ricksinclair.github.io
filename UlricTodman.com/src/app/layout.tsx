import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { PERSONAL_INFO, SITE_CONFIG } from '@/lib/constants'

import '@/styles/tailwind.css'

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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
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
