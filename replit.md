# RCM Intelligence Hub

## Overview

This is a professional web application designed for healthcare executives (CIOs, CEOs, etc.) to research and compare AI-powered Revenue Cycle Management (RCM) companies. The application features an interactive heatmap overview, detailed company profiles, advanced filtering capabilities, and PDF export functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Session Management**: Express sessions with PostgreSQL storage

### Database Schema
The application uses a relational database with the following key tables:
- **users**: User authentication and management
- **companies**: Company information, funding details, and metrics
- **categories**: RCM categories and subcategories
- **company_categories**: Many-to-many relationship between companies and categories with rankings

## Key Components

### Data Models
- **Company**: Core entity with funding stage, metrics, and AI-native flags
- **Category**: Hierarchical category structure with parent-child relationships
- **CompanyCategory**: Junction table storing company rankings (1-3 scale) per category
- **FilterState**: Search and filtering criteria for companies

### Frontend Components
- **CategorySection**: Collapsible sections for organizing companies by category
- **CompanyCard**: Interactive tile display for individual companies
- **CompanyModal**: Detailed company information overlay
- **FilterPanel**: Advanced filtering interface with category, rank, and funding filters
- **SearchBar**: Real-time search functionality
- **Legend**: Visual guide for ranking colors and meanings

### Backend Services
- **Storage Layer**: Abstract interface with in-memory implementation for development
- **Route Handlers**: Express routes for CRUD operations on companies, categories, and relationships
- **Data Validation**: Zod schemas for request/response validation

## Data Flow

1. **Initial Load**: Frontend fetches all companies and categories from API endpoints
2. **Filtering**: Client-side filtering based on search terms, categories, ranks, and funding stages
3. **Display**: Companies are grouped by categories and displayed in an interactive heatmap
4. **Company Details**: Modal overlay shows detailed information including rankings and reasoning
5. **PDF Export**: Browser-based PDF generation using window.print() functionality

## External Dependencies

### Core Libraries
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: TypeScript ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **framer-motion**: Animation library
- **zod**: Schema validation
- **wouter**: Lightweight routing

### Development Tools
- **Vite**: Fast build tool with hot reload
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **Database**: Neon Database with connection pooling
- **API**: Express server with TypeScript compilation via tsx

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database Migrations**: Drizzle Kit for schema management
- **Environment**: Production mode with optimized builds

### Key Features
- **Interactive Heatmap**: Visual representation of companies organized by RCM categories
- **Company Rankings**: 3-tier ranking system (High/Medium/Low) with color coding
- **Advanced Filtering**: Multi-dimensional filtering by category, rank, and funding stage
- **PDF Export**: Generate downloadable reports of filtered companies
- **Responsive Design**: Mobile-friendly interface with collapsible sections
- **Real-time Search**: Instant filtering as users type search queries

The application follows a modern full-stack architecture with clear separation of concerns, type safety throughout, and a focus on user experience for healthcare executives researching RCM solutions.