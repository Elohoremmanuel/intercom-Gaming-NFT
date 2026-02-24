# TRAC Gaming Platform - Marketing Website

A modern marketing website for the TRAC + Intercom on-chain gaming NFT platform - a plug-and-play middleware SDK for game developers.

## Project Overview

This is a marketing/landing page that presents TRAC as a drop-in blockchain infrastructure solution for game developers. The platform provides:
- NFT minting and ownership tracking
- P2P trading and communication via Intercom
- Smart contracts for marketplace, staking, and governance
- Developer SDK for Unity/Unreal/Web integration

## Tech Stack

### Frontend
- React with TypeScript
- Wouter for routing
- Framer Motion for animations
- TailwindCSS with dark mode theme
- React Hook Form with Zod validation
- Lucide React icons

### Backend
- Express.js server
- PostgreSQL database (Replit Database)
- Drizzle ORM for type-safe database queries
- Zod for API validation

## Project Structure

### Core Files
- `shared/schema.ts` - Database models and types
- `shared/routes.ts` - API contract definitions
- `server/db.ts` - Database connection
- `server/storage.ts` - Database storage layer
- `server/routes.ts` - API route handlers

### Pages
1. **Home (/)** - Hero section, features, benefits, how it works, SDK preview, contact form
2. **Features (/features)** - Detailed breakdown of TRAC data layer, smart contracts, P2P layer, SDK
3. **Developers (/developers)** - Getting started guide, code examples, integration documentation
4. **About (/about)** - Mission, vision, team information

## Features

### Contact Form
- Visitors can submit contact requests via the form
- Data is stored in PostgreSQL (`contact_submissions` table)
- Form includes: name, email, company (optional), message
- Backend validation using Zod schemas
- Success/error handling with toast notifications

## Database Schema

**contact_submissions**
- `id` (serial, primary key)
- `name` (text, required)
- `email` (text, required)
- `company` (text, optional)
- `message` (text, required)
- `created_at` (timestamp, auto-generated)

## API Endpoints

### POST /api/contact
Submit a contact form inquiry
- **Request**: `{ name, email, company?, message }`
- **Response 201**: `{ message: "Thank you! We'll be in touch soon." }`
- **Response 400**: Validation error
- **Response 500**: Server error

## Design System

### Color Scheme (Dark Mode)
- Primary: Purple (#8b5cf6)
- Secondary: Cyan (#06b6d4)
- Accent: Blue (#3b82f6)
- Background: Dark gradients with purple/blue accents

### Typography
- Display font: Outfit
- Body font: DM Sans
- Code font: Monospace

### Key Design Elements
- Gaming/tech aesthetic with mesh gradients
- Subtle grid patterns in hero sections
- Icon-based feature cards with elevation effects
- Smooth page transitions with Framer Motion
- Scroll-triggered animations for engagement

## Development

### Running Locally
The "Start application" workflow runs `npm run dev` which starts both:
- Express backend on port 5000
- Vite frontend dev server (proxied through Express)

### Database Operations
- `npm run db:push` - Push schema changes to database
- Database automatically provisioned via Replit Database

## User Preferences

- **Aesthetic**: Modern tech/blockchain platform with purple/cyan color scheme
- **Tone**: Professional but accessible - not overly technical
- **Target Audience**: Game developers looking for easy blockchain integration
- **Key Message**: "Drop-in blockchain infrastructure - no crypto expertise required"

## Future Enhancements

Potential additions:
- Blog/resources section for technical articles
- Case studies from game studios
- Interactive SDK playground
- Video tutorials and demos
- Developer community forum
- API documentation portal
