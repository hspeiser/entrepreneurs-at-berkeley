# Agent Guidelines for E@B Codebase

## Build/Lint/Test Commands
- **Dev**: `npm run dev` (starts Next.js dev server)
- **Build**: `npm run build` (production build)
- **Lint**: `npm run lint` (runs ESLint)
- **Start**: `npm run start` (runs production server)
- **Note**: No test suite currently configured

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Data**: Airtable API
- **Animation**: Framer Motion

## Code Style Guidelines

### Imports
- Use `@/` path alias for imports (e.g., `@/components/ui/button`)
- Group imports: external dependencies → internal components → utilities
- Use named imports for React components

### Components
- Use `"use client"` directive for client components (e.g., forms, interactive UI, animations)
- Prefer functional components with TypeScript interfaces for props
- Use `React.forwardRef` for components that need ref forwarding
- Component filenames: lowercase with hyphens (e.g., `button.tsx`, `neural-network-canvas.tsx`)

### Styling
- Use Tailwind utility classes, avoid custom CSS unless necessary
- Use `cn()` utility from `@/lib/utils` to merge class names conditionally
- Follow shadcn/ui patterns for component variants with `class-variance-authority`
- Use `hsl(var(--variable))` for theme colors

### TypeScript
- Enable strict mode (already configured)
- Define interfaces for all component props and data structures
- Use `type` for unions/intersections, `interface` for object shapes
- Avoid `any`; use `unknown` or specific types

### Naming Conventions
- Components: PascalCase (e.g., `Button`, `NeuralNetworkCanvas`)
- Files: kebab-case (e.g., `button.tsx`, `coffee-chat-card.tsx`)
- Functions: camelCase (e.g., `getCoffeeChats`, `updateCoffeeChat`)
- Constants: SCREAMING_SNAKE_CASE for true constants

### Error Handling
- Use try-catch blocks in API routes and data fetching functions
- Always log errors with `console.error()` before throwing/returning
- Return appropriate HTTP status codes in API routes (500 for server errors)
- Throw descriptive Error messages for better debugging

### API Routes
- Use Next.js App Router API routes in `app/api/`
- Export named functions: `GET`, `POST`, `PUT`, `DELETE`
- Return `NextResponse.json()` with appropriate status codes
- Validate input data before processing

### Data Fetching
- Airtable integration via `@/lib/airtable.ts`
- Check for environment variables before initializing clients
- Use server-side data fetching where possible (Server Components)

## Best Practices
- Keep components small and focused on single responsibility
- Use Server Components by default; only add `"use client"` when needed
- Optimize images with Next.js `<Image>` component
- Use semantic HTML and ARIA attributes for accessibility
- Test responsive design across breakpoints (mobile-first approach)
