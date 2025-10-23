# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AgentFlux is an academic research project presentation website showcasing a framework for privacy-preserving, on-device AI agent workloads. This is a single-page React application with minimal backend, designed following clean academic design principles (inspired by OpenVLA).

## Development Commands

### Starting Development
```bash
npm run dev
```
Runs the full-stack development server on port 5000 (or PORT env variable):
- Frontend: Vite dev server with HMR
- Backend: tsx with automatic TypeScript compilation

### Building for Production
```bash
npm run build
```
Creates production builds:
- Frontend → `dist/public/` (via Vite)
- Backend → `dist/index.js` (via esbuild, bundled as ESM)

### Running Production Build
```bash
npm start
```
Runs the bundled production server (requires build first)

### Type Checking
```bash
npm run check
```
Runs TypeScript type checking without emitting files

### Database Operations
```bash
npm run db:push
```
Pushes Drizzle schema changes to PostgreSQL database (requires DATABASE_URL env variable)

### GitHub Pages Deployment
This site is configured for GitHub Pages deployment. The following files in the root are auto-generated:

```bash
npm run build  # Build the project first
cp dist/public/index.html index.html
cp -r dist/public/assets assets
cp dist/public/favicon.png favicon.png
```

**Required Files for GitHub Pages**:
- `index.html` - Main entry point (copied from dist/public/)
- `assets/` - Bundled JS and CSS files
- `404.html` - Handles client-side routing for SPAs
- `favicon.png` - Site icon
- `.nojekyll` - Tells GitHub Pages not to process with Jekyll

**Important**: After making changes, rebuild and copy files to root before committing.

## Architecture Overview

### Full-Stack Structure

**Monorepo Layout**:
- `client/` - React frontend (Vite + TypeScript)
- `server/` - Express backend (TypeScript, ESM modules)
- `shared/` - Shared types and database schema
- `dist/` - Production build output (gitignored)

**Path Aliases** (configured in tsconfig.json and vite.config.ts):
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

### Frontend Architecture

**Core Stack**:
- React 18 with TypeScript (strict mode)
- Wouter for routing (lightweight alternative to React Router)
- TanStack Query v5 for server state management
- Shadcn/ui + Radix UI primitives for components
- Tailwind CSS for styling

**Component Organization**:
- `client/src/pages/` - Route components (home.tsx, not-found.tsx)
- `client/src/components/ui/` - Shadcn/ui component library
- `client/src/components/theme-provider.tsx` - Dark/light mode support
- `client/src/hooks/` - Custom React hooks
- `client/src/lib/` - Utilities (queryClient, cn helper)

**App Entry Point** (`client/src/App.tsx`):
```tsx
<QueryClientProvider>
  <ThemeProvider defaultTheme="light">
    <TooltipProvider>
      <Router /> {/* Wouter routing */}
    </TooltipProvider>
  </ThemeProvider>
</QueryClientProvider>
```

### Backend Architecture

**Core Stack**:
- Express.js with TypeScript
- ESM modules throughout
- HTTP server (can be upgraded to WebSocket via httpServer)

**Server Files**:
- `server/index.ts` - Main entry point, middleware setup, request logging
- `server/routes.ts` - API route registration (prefix all routes with `/api`)
- `server/vite.ts` - Vite dev middleware integration
- `server/storage.ts` - Storage interface and in-memory implementation

**Key Server Behaviors**:
1. Request/response logging for `/api` routes with duration tracking
2. JSON body parsing with rawBody capture
3. Development: Vite middleware for HMR
4. Production: Serves static files from `dist/public`
5. Always serves on PORT env variable (default 5000)

### Data Layer

**Current Implementation**: In-memory storage (`MemStorage` class)
- Map-based data structures
- Implements `IStorage` interface
- Ready for database migration without route changes

**Database Setup** (infrastructure ready, not actively used):
- Drizzle ORM with PostgreSQL
- Neon serverless connector
- Schema: `shared/schema.ts`
  - `users` table (id, username, password)
  - UUID primary keys via `gen_random_uuid()`
- Migration directory: `./migrations`

**Storage Pattern**:
```typescript
// Extend IStorage interface for new methods
export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  // Add new methods here
}

// Both MemStorage and future PostgresStorage implement this
```

To migrate to PostgreSQL:
1. Set `DATABASE_URL` environment variable
2. Run `npm run db:push` to sync schema
3. Create new storage class implementing `IStorage`
4. Swap implementation in `server/storage.ts`

### Design System

The project follows specific academic design guidelines documented in `design_guidelines.md`:

**Color Scheme**:
- Light mode primary with subtle professional blue accent (217 91% 60%)
- Full dark mode support
- Defined in Tailwind config with HSL color space

**Typography**:
- Inter font family for UI
- JetBrains Mono for code
- Specific type scale for academic content

**Component Principles**:
- Minimal, purposeful animations only
- No carousels, parallax, or distracting effects
- Academic credibility through clean design
- Information hierarchy for research content

**When adding UI components**:
1. Use Shadcn/ui CLI to add new components
2. Follow existing color palette from design_guidelines.md
3. Maintain academic aesthetic (clean, minimal, professional)

## Project-Specific Patterns

### API Route Convention
All API routes must be prefixed with `/api`:
```typescript
// In server/routes.ts
app.get('/api/users', async (req, res) => {
  // Use storage interface
  const user = await storage.getUser(id);
});
```

### Shared Types
Database schemas and types live in `shared/` and are imported with `@shared/`:
```typescript
import { type User, type InsertUser } from "@shared/schema";
```

### Storage Access
Always use the storage interface, never direct database queries in routes:
```typescript
import { storage } from "./storage";

// Good
const user = await storage.getUserByUsername(username);

// Bad - don't query database directly in routes
const user = await db.select().from(users).where(...);
```

### Component Imports
Use path aliases for cleaner imports:
```typescript
// Good
import { Button } from "@/components/ui/button";
import { User } from "@shared/schema";

// Avoid
import { Button } from "../../../components/ui/button";
```

### Environment Variables
- `NODE_ENV` - Set automatically by npm scripts (development/production)
- `PORT` - Server port (default: 5000)
- `DATABASE_URL` - PostgreSQL connection string (required for db:push)

## Academic Content Structure

This is a research project presentation site. When adding content:

1. **Hero Section**: Title, authors with institutions, paper/code links
2. **Core Architecture**: Technical diagrams showing AgentFlux framework
3. **Benchmarks**: Tables with performance comparisons
4. **Citation**: BibTeX section

Follow the page structure outlined in `design_guidelines.md` for consistency with academic research pages.

## Key Dependencies

**UI Library**: Extensive Radix UI components (accordion, alert-dialog, dropdown, popover, tabs, etc.) - all available in `client/src/components/ui/`

**Form Handling**: react-hook-form with Zod validation via @hookform/resolvers

**State Management**: TanStack Query for server state (no global client state library)

**Build Tools**:
- Vite for frontend (React plugin, Replit plugins in dev)
- esbuild for backend bundling
- tsx for TypeScript execution in development

## Development Notes

**Port Configuration**: Server always uses port 5000 (or PORT env). Other ports are firewalled. Do not change this.

**Vite Setup**: Development and production configs are split in `server/vite.ts`. Vite middleware only loads in development.

**TypeScript Config**: Strict mode enabled, ESM modules, bundler module resolution. Incremental builds with tsbuildinfo cached in node_modules.

**Hot Module Replacement**: Frontend has full HMR support via Vite. Backend changes require restart (tsx watches files automatically in dev).

**Database Migrations**: When schema changes, run `npm run db:push`. For production, use Drizzle migration workflow instead.
