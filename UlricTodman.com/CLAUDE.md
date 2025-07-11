# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 personal website project (`ulrictodman.com`) using the App Router, TypeScript, and Tailwind CSS. The project follows modern React patterns with strict TypeScript configuration and includes Turbopack for fast development.

## Common Commands

- **Development server**: `npm run dev` - Serves at http://localhost:3000/ with Turbopack
- **Build**: `npm run build` - Creates production build
- **Start production**: `npm start` - Runs production server
- **Lint**: `npm run lint` - Runs ESLint

## Architecture

### Project Structure
- Uses **App Router** (not Pages Router)
- TypeScript throughout with strict configuration
- Tailwind CSS for styling
- ESLint for code quality
- All application code in `src/` directory

### Key Directories
- `src/app/` - App Router pages and layouts
- `src/app/layout.tsx` - Root layout component
- `src/app/page.tsx` - Home page component
- `src/app/globals.css` - Global CSS with Tailwind directives
- `public/` - Static assets

### Key Technologies
- Next.js 15.3.5 with App Router
- React 19.0.0
- TypeScript 5.x with strict mode
- Tailwind CSS 4.x
- ESLint 9.x with Next.js config
- Turbopack for development

### Configuration Files
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with path aliases (@/*)
- `tailwind.config.ts` - Tailwind CSS configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration

## Tailwind UI Component Library

### Library System
- **Location**: `src/lib/tailwind-ui/`
- **Purpose**: Store Tailwind UI React components for reuse
- **Structure**: Organized by component categories (navigation, marketing, application-ui, etc.)

### Usage Workflow
1. **Adding Components**: Place .tsx files in appropriate category folders
2. **Component Guidelines**: Use TypeScript interfaces, Headless UI for interactivity, self-contained design
3. **Import Pattern**: `import { Component } from '@/lib/tailwind-ui/category/Component'`

### Reference Template
- **spotlight-ts directory**: Contains complete Tailwind UI template for reference
- **Component Examples**: Check spotlight-ts components for implementation patterns

### Component Categories
- `navigation/` - Headers, sidebars, breadcrumbs, navigation elements
- `marketing/` - Heroes, features, testimonials, landing page sections  
- `application-ui/` - Forms, tables, cards, app interface components
- `layouts/` - Page layouts and container components
- `forms/` - Form components and input patterns
- `overlays/` - Modals, dropdowns, popovers, tooltips

## Constants Management System

### Overview
- **Location**: `src/lib/constants.ts`
- **Purpose**: Centralized constants for all application values to avoid hardcoded data throughout the codebase
- **Scope**: Personal info, UI/UX, navigation, content, features, validation, and external links

### Available Constant Categories

#### Personal Information (`PERSONAL_INFO`)
- `name`, `firstName`, `email`, `location`, `title`, `shortBio`, `tagline`
- `company`, `role`, `social` (social media links)

#### Site Configuration (`SITE_CONFIG`)
- `name`, `title`, `description`, `url`

#### UI/UX Constants (`UI_CONFIG`)
- `maxWidth`, `containerPadding`, `sectionSpacing`, `cardSpacing`
- `headingClasses`, `bodyTextClasses`, `primaryColor`, `accentColor`
- `defaultTransition`

#### Navigation (`NAVIGATION`)
- `main` - Main navigation items
- `footer` - Footer navigation items

#### Content Configuration (`CONTENT_CONFIG`)
- `articlesPerPage`, `articlesDescription`, `feedTitle`, `feedDescription`
- `imageQuality`, `avatarSizes`, SEO defaults

#### Feature Flags (`FEATURE_FLAGS`)
- `enableAnalytics`, `enableComments`, `enableNewsletter`, `enableDarkMode`, `enableRss`

#### Validation Rules (`VALIDATION`)
- Form limits, content limits, file upload constraints

#### External Links (`EXTERNAL_LINKS`)
- Social media, tools, platforms, company links

### Implementation Examples

#### Basic Usage
```tsx
import { PERSONAL_INFO, UI_CONFIG } from '@/lib/constants'

export default function About() {
  return (
    <Container className={UI_CONFIG.sectionSpacing}>
      <h1 className={UI_CONFIG.headingClasses}>
        I'm {PERSONAL_INFO.name}. {PERSONAL_INFO.tagline}
      </h1>
    </Container>
  )
}
```

#### Navigation Usage
```tsx
import { NAVIGATION } from '@/lib/constants'

{NAVIGATION.footer.map((item) => (
  <NavLink key={item.name} href={item.href}>
    {item.name}
  </NavLink>
))}
```

#### Content Configuration
```tsx
import { CONTENT_CONFIG } from '@/lib/constants'

export const metadata = {
  title: 'Articles',
  description: CONTENT_CONFIG.articlesDescription,
}
```

### Design Principles
This centralized constants approach ensures:
- **Single Source of Truth**: All configurable values in one location
- **Type Safety**: TypeScript ensures correct usage across the codebase
- **Maintainability**: Easy updates without hunting through multiple files
- **Consistency**: Uniform styling, spacing, and content across components
- **Feature Flags**: Easy toggling of functionality
- **Scalability**: Simple to add new constants as the application grows

## Development Notes

- Path aliases configured: `@/*` maps to `./src/*`
- Strict TypeScript configuration enabled
- Modern ESLint flat config format
- Tailwind CSS 4.x with updated configuration format
- Headless UI recommended for interactive Tailwind UI components