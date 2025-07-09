# Portfolio Website

## Overview

This is a full-stack portfolio website built with React, TypeScript, and Express.js. It showcases a data engineer's professional profile with sections for about, skills, experience, projects, education, and contact information. The application features a modern design using shadcn/ui components, TailwindCSS for styling, and includes a contact form with backend data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.
Color scheme: Light grey theme with complementary colors (blue, teal, purple, orange, green).

## System Architecture

### Monorepo Structure
The application follows a monorepo architecture with clear separation of concerns:
- **client/**: React frontend application
- **server/**: Express.js backend API
- **shared/**: Common TypeScript types and database schema definitions

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Theme System**: Custom theme provider with light/dark mode support

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error handling middleware

## Key Components

### Frontend Components
- **Portfolio Page**: Main landing page with all sections
- **Navigation**: Sticky header with smooth scrolling navigation
- **Hero Section**: Introduction with contact information
- **About**: Professional summary
- **Skills**: Technical skills organized by category
- **Experience**: Professional work history
- **Projects**: Featured projects with GitHub/Medium links
- **Education**: Academic background
- **Contact**: Contact form with validation

### Backend Components
- **Routes**: API endpoints for contact form submission
- **Storage**: In-memory storage implementation (ready for database integration)
- **Middleware**: Request logging and error handling
- **Development Server**: Vite integration for hot reloading

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data is validated using Zod schema
3. TanStack Query mutation sends POST request to `/api/contact`
4. Backend validates data against shared schema
5. Contact message is stored in database
6. Success/error response sent back to frontend
7. Toast notification displays result to user

### Development Workflow
1. Vite handles frontend development server and HMR
2. Express server serves API endpoints
3. Shared types ensure type safety across frontend/backend
4. Database schema changes managed through Drizzle migrations

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Library**: Radix UI primitives, shadcn/ui components
- **Styling**: TailwindCSS, PostCSS, Autoprefixer
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React, React Icons
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Dependencies
- **Server**: Express.js, HTTP server
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for runtime type checking
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build Tools**: Vite, esbuild
- **TypeScript**: Full type safety across the stack
- **Database Tools**: Drizzle Kit for schema management
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Type Checking**: TypeScript compiler validates all code
4. **Database**: Drizzle push updates schema to production database

### Production Configuration
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Asset Serving**: Express serves static files from build directory
- **Error Handling**: Production-ready error responses
- **Logging**: Request logging with response times

### Development vs Production
- **Development**: Vite dev server with HMR, detailed error reporting
- **Production**: Bundled assets, optimized builds, error handling
- **Database**: PostgreSQL for production, in-memory storage for development fallback

The architecture prioritizes developer experience with hot reloading, type safety, and clear separation of concerns while maintaining production readiness with proper error handling and optimization.