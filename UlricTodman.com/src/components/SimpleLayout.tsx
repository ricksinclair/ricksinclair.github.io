import { Container } from '@/components/Container'
import { UI_CONFIG } from '@/lib/constants'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className={UI_CONFIG.sectionSpacing}>
      <header className="max-w-2xl">
        <h1 className={UI_CONFIG.headingClasses}>
          {title}
        </h1>
        <p className={`mt-6 ${UI_CONFIG.bodyTextClasses}`}>
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
