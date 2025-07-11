import { Feed } from 'feed'
import { PERSONAL_INFO } from '@/lib/constants'
import { getAllArticles } from '@/lib/articles'


export const dynamic = 'error' // Ensure this route is not treated as dynamic for static export

export async function GET() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: PERSONAL_INFO.name,
    email: PERSONAL_INFO.email,
  }

  let feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  // Use static article metadata for feed
  const articles = await getAllArticles()
  for (const article of articles) {
    const publicUrl = `${siteUrl}/articles/${article.slug}`
    feed.addItem({
      title: article.title,
      id: publicUrl,
      link: publicUrl,
      description: article.description,
      date: new Date(article.date),
      author: [author],
    })
  }

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
