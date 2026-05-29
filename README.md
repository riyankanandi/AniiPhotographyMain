 📸 Ani Photography — Professional Photographer Portfolio Website

[![Live Site](https://img.shields.io/badge/Live%20Site-aniiphotography.com-blue?style=for-the-badge&logo=vercel)](https://www.aniiphotography.com)
[![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)

> **Freelance Project (Paid)** — A fully custom, production-grade multi-page portfolio website built for a professional photographer. Currently live and actively used by the client.

---

## 🌐 Live Site

**[www.aniiphotography.com](https://www.aniiphotography.com)**

---

## 📋 About the Project

Ani Photography is a professional portfolio website developed as a **paid freelance commission** for photographer Aniruddha Das. The project was handled end-to-end — from understanding the client's brand, creative brief, and content needs, to designing, building, and deploying the production website.

The site covers the client's full range of services — Wedding, Pre-Wedding, Fashion, Video Production, and Album Design — with a dynamic gallery, blog, booking/contact form, and social media integration.

---

## ✨ Features

- **Multi-Page Service Sections** — Dedicated pages for Wedding, Pre-Wedding, Fashion, Video Production, and Album Design
- **Dynamic Gallery / Albums** — Curated photo collections with category-based browsing
- **Blog Section** — Client-managed blog posts with dynamic routing
- **Booking & Contact Form** — Session enquiry form with backend API handling and email notification
- **About Page** — Photographer profile and story
- **FAQs & Terms** — Informational pages for client transparency
- **Social Media Integration** — Links to Instagram, YouTube, Facebook, and Behance
- **Mobile-Responsive Design** — Fully optimised across all screen sizes
- **SEO Ready** — Meta tags, Open Graph, and semantic HTML for search visibility
- **Fast Performance** — Next.js SSR/SSG and Vercel CDN for optimal load times

---

## 🛠️ Tech Stack

| Layer          | Technology                          |
|----------------|-------------------------------------|
| Framework      | Next.js 14+ (App Router)            |
| Styling        | Tailwind CSS                        |
| Database       | Supabase (PostgreSQL)               |
| Backend        | Next.js API Routes (Node.js runtime)|
| Deployment     | Vercel                              |
| CI/CD          | Vercel Git Integration              |
| Version Control| Git / GitHub                        |

---

## 📁 Project Structure

```
ani_photography_main/
│
├── app/                              # Next.js App Router
│   ├── layout.js                     # Root layout (Navbar, Footer)
│   ├── page.js                       # Home page (hero, services overview, featured gallery)
│   │
│   ├── wedding/
│   │   └── page.js                   # Wedding photography page
│   ├── pre-wedding/
│   │   └── page.js                   # Pre-wedding photography page
│   ├── fashion/
│   │   └── page.js                   # Fashion photography page
│   ├── video-production/
│   │   └── page.js                   # Video production page
│   ├── album-design/
│   │   └── page.js                   # Album design page
│   │
│   ├── albums/
│   │   ├── page.js                   # Gallery / albums listing page
│   │   └── [slug]/
│   │       └── page.js               # Dynamic individual album page
│   │
│   ├── blogs/
│   │   ├── page.js                   # Blog listing page
│   │   └── [slug]/
│   │       └── page.js               # Dynamic individual blog post page
│   │
│   ├── about/
│   │   └── page.js                   # About the photographer
│   ├── contact/
│   │   └── page.js                   # Contact / Book a Session page
│   ├── faqs/
│   │   └── page.js                   # FAQs page
│   ├── terms/
│   │   └── page.js                   # Terms & Conditions page
│   │
│   └── api/                          # Backend API Routes
│       ├── contact/
│       │   └── route.js              # POST — handles booking/contact form submissions
│       ├── blogs/
│       │   ├── route.js              # GET — fetch all blog posts from Supabase
│       │   └── [slug]/
│       │       └── route.js          # GET — fetch single blog post by slug
│       └── albums/
│           ├── route.js              # GET — fetch all albums/gallery data from Supabase
│           └── [slug]/
│               └── route.js          # GET — fetch individual album by slug
│
├── components/                       # Reusable UI components
│   ├── Navbar.jsx                    # Navigation bar with service links
│   ├── Footer.jsx                    # Footer with contact info & social links
│   ├── Hero.jsx                      # Landing hero section
│   ├── ServiceCard.jsx               # Service category card component
│   ├── GalleryGrid.jsx               # Responsive masonry/grid gallery
│   ├── AlbumCard.jsx                 # Individual album thumbnail card
│   ├── BlogCard.jsx                  # Blog post preview card
│   ├── ContactForm.jsx               # Booking / enquiry form
│   └── SocialLinks.jsx               # Social media icon links
│
├── lib/                              # Utility & config
│   ├── supabase.js                   # Supabase client initialisation
│   └── utils.js                      # Shared helper functions
│
├── public/                           # Static assets
│   ├── logo.png
│   ├── favicon.ico
│   └── images/                       # Static/fallback images
│
├── styles/
│   └── globals.css                   # Global styles & Tailwind base imports
│
├── .env.local                        # Environment variables (not committed)
├── next.config.js                    # Next.js configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js
└── package.json
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
CONTACT_EMAIL=contact@aniiphotography.com
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- A Supabase project set up with `albums`, `blogs`, and `contacts` tables

### Installation

```bash
# Clone the repository
git clone https://github.com/sohambanik11/ani_photography_main.git

cd ani_photography_main

# Install dependencies
npm install

# Add environment variables
cp .env.example .env.local
# Fill in your Supabase credentials in .env.local

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

---

## 🗄️ Database Schema (Supabase)

### `albums`
| Column       | Type    | Description                    |
|--------------|---------|--------------------------------|
| id           | uuid    | Primary key                    |
| title        | text    | Album title                    |
| slug         | text    | URL-friendly identifier        |
| category     | text    | wedding / fashion / pre-wedding|
| cover_image  | text    | Cover image URL                |
| images       | jsonb   | Array of image URLs            |
| created_at   | timestamp | Auto-generated               |

### `blogs`
| Column       | Type    | Description                    |
|--------------|---------|--------------------------------|
| id           | uuid    | Primary key                    |
| title        | text    | Blog post title                |
| slug         | text    | URL-friendly identifier        |
| content      | text    | Blog body (markdown/HTML)      |
| cover_image  | text    | Cover image URL                |
| created_at   | timestamp | Auto-generated               |

### `contacts`
| Column       | Type    | Description                    |
|--------------|---------|--------------------------------|
| id           | uuid    | Primary key                    |
| name         | text    | Client name                    |
| email        | text    | Client email                   |
| phone        | text    | Client phone number            |
| message      | text    | Enquiry / booking message      |
| created_at   | timestamp | Auto-generated               |

---

## 🎯 Key Highlights

- **First Freelance Project** — Real client, real requirements, delivered as paid work
- **Production Deployment** — Live website actively used and maintained
- **Solo Full-Stack Ownership** — Client brief → design → development → deployment → maintenance
- **Backend API Routes** — Server-side form handling and dynamic content via Supabase
- **Multi-Page Architecture** — 10+ distinct pages with dynamic routing for albums and blogs

---

## 👤 👤 Developers

**Soham Banik**
- Email: sohambanik11@gmail.com
- GitHub: [github.com/sohambanik11](https://github.com/sohambanik11)

 **Riyanka Nandi**
- Email: riyankanandi28207@gmail.com
- GitHub: [github.com/riyankanandi](https://github.com/riyankanandi)

---

## 📄 License

Built as a freelance commission. All photography content, branding, and client assets belong to Aniruddha Das / Ani Photography. Codebase authored by Soham Banik and Riyanka Nandi.
