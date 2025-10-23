# AgentFlux: Privacy-Preserving On-Device Agentic Systems

## Overview

AgentFlux is an academic research project presentation website that showcases a framework for privacy-preserving, on-device AI agent workloads. The project demonstrates a decoupled approach to agentic tasks, separating function selection from argument generation. The website follows a clean, professional academic design aesthetic inspired by research project pages like OpenVLA, focusing on information hierarchy and efficient scanning of technical content.

This is a single-page application built with React that presents research content including introduction, methodology, benchmarks, and citation information. The design emphasizes academic credibility through minimal, professional styling with no authentication or user-generated content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query v5 for server state
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system

**Design System**:
- Custom color palette with light/dark mode support
- Typography based on Inter font family with JetBrains Mono for code
- Academic-focused design with clean, minimal aesthetic
- Responsive breakpoints for mobile, tablet, and desktop

**Component Structure**:
- Page-based architecture with `/client/src/pages/` containing route components
- Shared UI components in `/client/src/components/ui/`
- Custom hooks in `/client/src/hooks/`
- Utility functions in `/client/src/lib/`

**Key Design Decisions**:
- Single-page application for research presentation (no complex navigation needed)
- Static content focus (no dynamic data fetching currently implemented)
- Academic design guidelines documented in `design_guidelines.md`
- Component-first approach using Shadcn/ui for consistency

### Backend Architecture

**Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Build Tool**: Vite for frontend, esbuild for backend bundling
- **Development**: tsx for TypeScript execution in development

**Server Structure**:
- Minimal Express server serving as API backend
- Vite middleware integration for development hot-reloading
- Static file serving for production builds
- Request logging with duration tracking

**API Design**:
- RESTful API structure (currently minimal, ready for expansion)
- Routes prefixed with `/api`
- JSON request/response format
- In-memory storage implementation with interface for future database integration

**Key Design Decisions**:
- Separation of development and production server configurations
- Middleware-based architecture for extensibility
- Request/response logging for debugging
- Type-safe API contracts using shared TypeScript types

### Data Storage

**Current Implementation**: In-memory storage (`MemStorage` class)
- Simple Map-based data structures
- User entity with basic CRUD operations
- Interface-based design (`IStorage`) for easy database migration

**Planned Database**: PostgreSQL with Drizzle ORM
- Schema defined in `shared/schema.ts`
- Neon serverless PostgreSQL connector configured
- Migration system using drizzle-kit
- Type-safe database queries with drizzle-zod validation

**Schema Design**:
- Users table with UUID primary keys
- Username/password fields (authentication ready)
- Extensible schema design for future entities

**Key Design Decisions**:
- Storage abstraction layer allows swapping implementations without code changes
- Drizzle ORM chosen for type-safety and PostgreSQL compatibility
- Neon serverless for scalable, managed PostgreSQL hosting
- Migration-based schema management for version control

### Authentication & Authorization

**Current State**: Infrastructure prepared but not implemented
- User schema includes password field
- Session management dependencies installed (connect-pg-simple)
- No active authentication routes or middleware

**Planned Approach**:
- Session-based authentication using Express sessions
- PostgreSQL session store for persistence
- Password hashing (bcrypt or similar expected)
- Protected API routes with authentication middleware

### Build & Development

**Development Workflow**:
- Vite dev server with HMR for frontend
- tsx watch mode for backend TypeScript
- Concurrent development of frontend and backend
- Source maps for debugging

**Production Build**:
- Vite builds frontend to `dist/public`
- esbuild bundles backend to `dist/index.js`
- Single Node.js process serves everything
- Environment-based configuration

**TypeScript Configuration**:
- Strict mode enabled
- Path aliases for cleaner imports (`@/`, `@shared/`, `@assets/`)
- ESM modules throughout
- Shared types between frontend and backend

## External Dependencies

### UI & Styling
- **Radix UI**: Accessible component primitives (accordion, dialog, dropdown, popover, etc.)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **class-variance-authority**: Component variant management
- **clsx** & **tailwind-merge**: Conditional class name utilities
- **Lucide React**: Icon library

### Forms & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolver
- **zod**: Schema validation
- **drizzle-zod**: Database schema to Zod validation

### Data Fetching
- **TanStack Query**: Server state management and caching
- **@tanstack/react-query**: React integration

### Database & ORM
- **Drizzle ORM**: Type-safe PostgreSQL ORM
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-kit**: Database migrations and schema management
- **connect-pg-simple**: PostgreSQL session store for Express

### Additional UI Libraries
- **cmdk**: Command palette component
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel component
- **vaul**: Drawer component
- **recharts**: Charting library (prepared for data visualization)
- **react-day-picker**: Date picker component

### Development Tools
- **Vite**: Frontend build tool and dev server
- **@vitejs/plugin-react**: React support for Vite
- **esbuild**: Backend bundling
- **tsx**: TypeScript execution for Node.js
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit integration
- **@replit/vite-plugin-dev-banner**: Development banner

### Build Dependencies
- **TypeScript**: Static typing
- **@types/node**: Node.js type definitions
- **autoprefixer**: CSS vendor prefixing
- **tailwindcss**: CSS framework