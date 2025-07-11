# Tailwind UI Component Library

This directory contains Tailwind UI React components organized for reuse across the project. Components are saved here for easy access and consistent implementation.

## Structure

- **navigation/** - Navigation components (headers, sidebars, breadcrumbs, etc.)
- **marketing/** - Marketing sections (heroes, features, testimonials, etc.)
- **application-ui/** - App interface components (forms, tables, cards, etc.)
- **layouts/** - Page layouts and containers
- **forms/** - Form components and patterns
- **overlays/** - Modals, dropdowns, popovers, etc.

## Usage

### Adding Components
1. Copy React component files (.tsx) into the appropriate category folder
2. Include any necessary TypeScript interfaces or types
3. Ensure components use Headless UI when needed for interactive elements
4. Components should be self-contained with their own props interfaces

### Using Components
```tsx
import { HeaderComponent } from '@/lib/tailwind-ui/navigation/HeaderComponent'
import { HeroSection } from '@/lib/tailwind-ui/marketing/HeroSection'

export default function Page() {
  return (
    <div>
      <HeaderComponent />
      <HeroSection 
        title="Welcome"
        subtitle="Build amazing things"
      />
    </div>
  )
}
```

## Component Guidelines

1. **Self-contained**: Each component should include all its dependencies
2. **TypeScript**: Use proper TypeScript interfaces for props
3. **Headless UI**: Use @headlessui/react for interactive components
4. **Tailwind**: Use Tailwind CSS classes for styling
5. **Responsive**: Ensure components work across all screen sizes

## Reference Templates

The `spotlight-ts` directory contains a complete Tailwind UI template that can serve as reference for component patterns and implementations.

## File Naming

- Use PascalCase for component files: `HeaderComponent.tsx`
- Include interface definitions in the same file or separate `.types.ts` files
- Group related components in subfolders when appropriate