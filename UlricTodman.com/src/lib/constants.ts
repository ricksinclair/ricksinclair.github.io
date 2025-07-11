// Application Constants
// Centralized constants for maintainability and consistency across the entire application

// =============================================================================
// PERSONAL INFORMATION
// =============================================================================
export const PERSONAL_INFO = {
  // Basic Info
  name: 'Ulric Todman',
  firstName: 'Ulric',
  email: 'ulric@ulrictodman.com',
  location: 'North Carolina',
  
  // Professional Info
  title: 'Software designer, founder, and amateur astronaut',
  company: 'Me Myself and I, Inc.,GmbH & Co. KG & LLC & Corp, Ltd.',
  role: 'founder and CEO',
  
  // Bio/Description
  shortBio: "I'm Ulric, a software designer and entrepreneur based in North Carolina. From breaking computers in Harlem to building the future—I help create technology that actually serves humanity.",
  tagline: 'From breaking computers in Harlem to building the future in North Carolina.',
  
  // Website/Domain
  website: 'ulrictodman.com',
  websiteUrl: 'http://ulrictodman.com',
  
  // Social Media (placeholder links)
  social: {
    instagram: '#', 
    github: '#',
    linkedin: '#',
  }
} as const

// =============================================================================
// SITE CONFIGURATION
// =============================================================================
export const SITE_CONFIG = {
  name: PERSONAL_INFO.name,
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.shortBio,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ulrictodman.com',
} as const

// =============================================================================
// COMPANY/PROJECT INFORMATION
// =============================================================================
export const COMPANY_INFO = {
  name: PERSONAL_INFO.company,
  website: PERSONAL_INFO.website,
  websiteUrl: PERSONAL_INFO.websiteUrl,
  description: 'We develop technologies that empower regular people to explore space on their own terms.',
} as const

// =============================================================================
// UI/UX CONSTANTS
// =============================================================================
export const UI_CONFIG = {
  // Layout
  maxWidth: 'max-w-7xl',
  containerPadding: 'px-4 sm:px-6 lg:px-8',
  
  // Spacing
  sectionSpacing: 'mt-16 sm:mt-32',
  cardSpacing: 'space-y-16',
  
  // Typography
  headingClasses: 'text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100',
  bodyTextClasses: 'text-base text-zinc-600 dark:text-zinc-400',
  
  // Colors
  primaryColor: 'teal',
  accentColor: 'indigo',
  
  // Transitions
  defaultTransition: 'transition hover:text-teal-500 dark:hover:text-teal-400',
} as const

// =============================================================================
// NAVIGATION & ROUTES
// =============================================================================
export const NAVIGATION = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Articles', href: '/articles' },
    { name: 'Projects', href: '/projects' },
    { name: 'Speaking', href: '/speaking' },
    { name: 'Uses', href: '/uses' },
  ],
  footer: [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Speaking', href: '/speaking' },
    { name: 'Uses', href: '/uses' },
  ],
} as const

// =============================================================================
// CONTENT CONFIGURATION
// =============================================================================
export const CONTENT_CONFIG = {
  // Articles
  articlesPerPage: 4,
  articlesDescription: 'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
  
  // RSS Feed
  feedTitle: PERSONAL_INFO.name,
  feedDescription: 'Your blog description',
  
  // Images
  imageQuality: 90,
  avatarSizes: '(min-width: 1024px) 32rem, 20rem',
  
  // SEO
  defaultMetaTitle: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  defaultMetaDescription: PERSONAL_INFO.shortBio,
} as const

// =============================================================================
// EXTERNAL LINKS & INTEGRATIONS
// =============================================================================
export const EXTERNAL_LINKS = {
  // Social Media
  social: PERSONAL_INFO.social,
  
  // Tools & Platforms
  github: PERSONAL_INFO.social.github,
  linkedin: PERSONAL_INFO.social.linkedin,
  
  // Company
  companyWebsite: COMPANY_INFO.websiteUrl,
} as const

// =============================================================================
// FEATURE FLAGS & ENVIRONMENT
// =============================================================================
export const FEATURE_FLAGS = {
  enableAnalytics: process.env.NODE_ENV === 'production',
  enableComments: false,
  enableNewsletter: false,
  enableDarkMode: true,
  enableRss: true,
} as const

// =============================================================================
// VALIDATION & LIMITS
// =============================================================================
export const VALIDATION = {
  // Contact form
  maxNameLength: 100,
  maxEmailLength: 254,
  maxMessageLength: 1000,
  
  // Content
  maxArticleTitleLength: 200,
  maxArticleDescriptionLength: 300,
  
  // File uploads
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedImageTypes: ['.jpg', '.jpeg', '.png', '.webp'],
} as const