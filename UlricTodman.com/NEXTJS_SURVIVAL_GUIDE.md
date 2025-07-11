# Next.js Survival Guide for React Developers

Welcome! This guide is for React developers who are new to Next.js and want to quickly understand how it works, especially in the context of this project.

---

## What is Next.js?

Next.js is a React framework for building web applications with features like:
- **File-based routing**
- **Server-side rendering (SSR) & static site generation (SSG)**
- **API routes**
- **Built-in CSS & Sass support**
- **Image optimization**
- **TypeScript support**

---

## Key Concepts

### 1. File-based Routing
- Pages are React components in the `src/app/` directory.
- The file structure determines the URL structure.
- Example: `src/app/about/page.tsx` → `/about`

### 2. Pages & Layouts
- Each folder in `src/app/` can have a `page.tsx` (the page) and `layout.tsx` (the layout for that section).
- The root `layout.tsx` wraps all pages.

### 3. Data Fetching
- Use React Server Components (default in `app/`), or `fetch`/`getStaticProps`/`getServerSideProps` in older `pages/` directory (not used here).
- Fetch data directly in your components or use libraries like SWR/React Query for client-side fetching.

### 4. Static Assets
- Place images in `src/images/`.
- Reference them with import or relative paths.

### 5. Components
- Shared UI lives in `src/components/`.
- Import and use as in any React project.

### 6. Styling
- Tailwind CSS is used (see `src/styles/tailwind.css`).
- You can also use CSS modules or global CSS.

### 7. Environment Variables
- Use `.env.local` for secrets.
- Access with `process.env.YOUR_VAR`.

### 8. TypeScript
- This project uses TypeScript throughout.

---

## Project Structure Overview

```
src/
  app/           # App directory (routing, pages, layouts)
  components/    # Reusable React components
  images/        # Static images
  lib/           # Utilities, constants, helpers
  styles/        # Tailwind and global CSS
```

---

## Common Tasks

- **Add a page:** Create a folder and `page.tsx` in `src/app/`.
- **Add a component:** Add a `.tsx` file in `src/components/` and import it where needed.
- **Add global styles:** Edit `src/styles/tailwind.css`.
- **Fetch data:** Use `fetch` in server components or client-side hooks.

---

## Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## Tips for React Devs

- You can use all your React knowledge!
- Learn about server components and the new `app/` directory.
- Routing is file-based, not via `react-router`.
- Data fetching can be server-side or client-side.

---

Happy coding! 🚀

