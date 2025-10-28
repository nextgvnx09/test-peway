# SMA NEGERI 2 TOMPASO - Official School Website

## Overview

This is the official website for SMA NEGERI 2 TOMPASO, a government high school located in Kecamatan Tompaso, Kabupaten Minahasa, Sulawesi Utara. The website serves as a digital platform to showcase the school's profile, faculty, student organizations (OSIS), achievements, news, and contact information.

The application is built as a modern, responsive web application with a formal, institutional design befitting a government educational institution. It features a clean interface with the school's brand colors (red #D62828, white #FFFFFF, and light blue #1E90FF) and uses professional typography (Merriweather for headings, Poppins for body text).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Routing**: Wouter for client-side routing, providing a lightweight alternative to React Router. The application uses declarative routing with components for each major page (Home, Profil, GuruStaf, OSIS, Prestasi, Berita, Kontak).

**UI Component Library**: Shadcn/ui with Radix UI primitives. This provides a comprehensive set of accessible, customizable components built on top of Radix UI. The design system uses the "new-york" style variant with Tailwind CSS for styling.

**State Management**: TanStack Query (React Query) for server state management, handling data fetching, caching, and synchronization with the backend API.

**Styling**: Tailwind CSS with a custom design system configured for the school's branding. Uses CSS variables for theme colors and spacing units based on 4px increments for consistent rhythm.

**Design System**: Custom color palette and typography defined in design_guidelines.md, with systematic spacing (units of 4, 6, 8, 12, 16, 20, 24) and responsive breakpoints. The design emphasizes formality and institutional trust.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript for type safety.

**API Design**: RESTful API with endpoints organized by resource type (teachers, OSIS members, news, achievements, activities). All routes are prefixed with `/api` for clear separation from frontend routes.

**Storage Layer**: Abstract storage interface (`IStorage`) with an in-memory implementation (`MemStorage`). This abstraction allows for easy migration to a database-backed solution without changing the API layer.

**Development Setup**: Vite middleware integration for hot module replacement (HMR) during development, with separate build process for production deployment.

**Build Process**: 
- Frontend: Vite builds the React application to `dist/public`
- Backend: esbuild bundles the Express server to `dist/index.js`
- The production server serves static files from the built frontend

### Data Storage Solutions

**Current Implementation**: In-memory storage using JavaScript Maps for development and testing. Data structures include:
- Users (authentication)
- Teachers (faculty profiles)
- OSIS Members (student organization)
- News (announcements)
- Achievements (awards and accomplishments)
- Activities (extracurricular events)

**Prepared for Database Migration**: 
- Drizzle ORM configured with PostgreSQL dialect
- Schema definitions in `shared/schema.ts` using Drizzle's type-safe schema builder
- Database credentials configured via environment variables
- Migration setup ready with `drizzle-kit` for schema versioning

**Schema Design**: Uses UUID primary keys generated via PostgreSQL's `gen_random_uuid()` function. All tables have clearly defined types exported for use throughout the application with Zod validation schemas.

### Authentication and Authorization

The codebase includes user authentication infrastructure (users table with username/password), though the frontend doesn't currently implement login flows. This suggests the site is primarily informational with admin capabilities planned for future implementation.

## External Dependencies

### UI and Component Libraries

- **Radix UI**: Comprehensive collection of accessible, unstyled UI primitives (@radix-ui/*) for building the component library
- **Shadcn/ui**: Pre-built component patterns configured with the "new-york" style
- **Lucide React**: Icon library for consistent iconography throughout the application
- **Embla Carousel**: Carousel/slider functionality for image galleries

### Database and ORM

- **Drizzle ORM**: Type-safe ORM for database operations with PostgreSQL support
- **Neon Serverless**: PostgreSQL database driver optimized for serverless environments (@neondatabase/serverless)
- **connect-pg-simple**: Session store implementation for PostgreSQL (currently unused but available)

### Development Tools

- **Vite**: Build tool and development server with fast HMR
- **TypeScript**: Type safety across the entire codebase
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing pipeline
- **ESBuild**: Fast JavaScript bundler for production builds

### Form Handling and Validation

- **React Hook Form**: Form state management with @hookform/resolvers
- **Zod**: Schema validation library used with Drizzle for type-safe data validation

### Utilities

- **date-fns**: Date formatting and manipulation with Indonesian locale support
- **class-variance-authority (CVA)**: Type-safe variant management for components
- **clsx**: Utility for conditional className construction
- **cmdk**: Command palette component (available but not currently used)

### Assets

The application uses pre-generated images stored in `attached_assets/generated_images/` including:
- School building hero background
- Principal portrait photo
- OSIS and activity photos (Paskibra, Pramuka, Seni, Olahraga)

### Font Loading

Google Fonts integration for:
- Merriweather (Bold, 700 & 900 weights) for headings
- Poppins (300-700 weights) for body text