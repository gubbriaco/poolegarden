# Z.ai Prompt — Pool & Garden Corporate Website

## Role & Objective

You are an expert front-end web developer and UI/UX designer. Build a **modern, professional, modular, and scalable static website** for an Italian company called **Pool & Garden**.

Pool & Garden specializes in the **construction (realizzazione) and maintenance (manutenzione)** of:
1. Swimming pools (piscine)
2. Irrigation systems (impianti di irrigazione)
3. Synthetic/artificial lawns (prati sintetici)

The site must feel premium, clean, and trustworthy — reflecting outdoor living, water, and green spaces — while remaining fast, lightweight, and easy to maintain/extend over time.

---

## Technical Requirements

- **Static site**, no backend required (can use static forms/services like Formspree, EmailJS, or similar placeholders for form submission and newsletter signup).
- **Modular and scalable architecture**: organize code into reusable components/sections (e.g., separate files/partials for Header, Hero, Services, About, Testimonials, Contact, Footer, etc.) so new services or sections can be added easily in the future.
- Fully **responsive** (mobile, tablet, desktop) with a mobile-first approach.
- **Fast-loading**: optimized images, lazy loading, minimal dependencies.
- **SEO-friendly**: semantic HTML5, proper meta tags, Open Graph tags, sitemap.xml, robots.txt, descriptive alt attributes.
- **Accessibility (a11y)**: proper contrast ratios, ARIA labels where needed, keyboard navigation.
- Clean, well-commented code with a clear folder structure (e.g., `/src`, `/src/assets`, `/src/components`, `/src/sections`, `/src/i18n`, etc.).
- Use the existing company logo located at **`src/assets/logo.png`** in the header/navbar and footer, and as the favicon source.

---

## Language & Localization

- Implement a **language switcher (IT / EN)** — Italian and English — allowing users to toggle the entire site's content between the two languages without a page reload if possible (e.g., via a simple i18n JSON/JS structure).
- Default language: **Italian** (the company is Italian and primarily serves the Italian market), with English as the secondary option for international visitors.
- All UI labels, section titles, service descriptions, and form text must be translatable through this system — do not hardcode text directly into markup.

---

## Site Structure & Required Sections

### 1. Header / Navigation
- Logo (`src/assets/logo.png`), company name, sticky/fixed navigation bar.
- Menu links to all main sections (smooth scroll or anchor links for a one-page site, or proper routing if multi-page).
- Language switcher (IT/EN) clearly visible.
- Prominent call-to-action button (e.g., "Request a Quote" / "Richiedi un Preventivo").

### 2. Hero Section
- Strong visual banner (pool/garden imagery), tagline, brief value proposition, and a primary CTA button.

### 3. Services Overview
A summary/intro section presenting the three core service areas, each linking down to its detailed section below.

### 4. Detailed Service Sections (one per service, each split into Construction + Maintenance)
For **each** of the three services, include two clearly distinguished sub-sections or tabs:

**a) Swimming Pools (Piscine)**
   - Construction/Realization: design, materials, types of pools, process overview.
   - Maintenance: cleaning, water treatment, seasonal opening/closing, repairs.

**b) Irrigation Systems (Impianti di Irrigazione)**
   - Construction/Realization: system design, automation, water-saving technology.
   - Maintenance: inspections, repairs, seasonal adjustments, winterization.

**c) Synthetic Lawns (Prati Sintetici)**
   - Construction/Realization: installation process, materials, use cases (residential/commercial/sports).
   - Maintenance: cleaning, brushing, infill top-up, repairs.

Each service block should include: a short description, key benefits/features (icon list), optional image gallery placeholder, and a CTA (e.g., "Get a Free Quote").

### 5. About Us (Chi Siamo)
- Company story, mission/values, years of experience, team overview (placeholder content), why choose us (certifications, guarantees, service area).

### 6. Testimonials / Reviews (optional but recommended)
- Placeholder customer reviews/ratings to build trust.

### 7. Gallery / Portfolio (optional but recommended)
- Placeholder grid of completed projects (pools, gardens, lawns) with lightbox view.

### 8. Contact Section
Must include:
- Phone number (click-to-call link)
- Email address (mailto link)
- WhatsApp (click-to-chat link, e.g. `https://wa.me/...`)
- Social media icons/links: Facebook, Instagram, LinkedIn
- A contact form (name, email, phone, message, service of interest — static form service integration)
- **Interactive map** embed (e.g., Google Maps iframe or Leaflet/OpenStreetMap) showing the company's physical location, with address text alongside it.

### 9. Newsletter Signup
- A dedicated newsletter subscription block (in the footer or as its own section) with an email input and subscribe button, integrated with a placeholder static form/email service.

### 10. Footer
- Logo, short company description, quick links (sitemap-style), contact summary, social icons, newsletter (if not placed elsewhere), copyright notice, and legal links (Privacy Policy, Cookie Policy, Terms of Service — pages or placeholder sections).
- Include the company's **VAT number (P.IVA)** in the footer, as is standard practice and often a legal requirement for Italian business websites, along with registered company name and address (use realistic placeholder values, e.g., "P.IVA 00000000000", to be replaced by the client).
- Include a **cookie consent banner** (basic placeholder) given GDPR requirements for Italian/EU websites, since a map embed, forms, and possible analytics will use cookies/third-party scripts.

---

## Additional Standard Elements to Include

- Favicon generated from `src/assets/logo.png`.
- 404 error page.
- Basic Google Analytics / analytics placeholder integration point (commented out, ready to enable).
- `sitemap.xml` and `robots.txt`.
- Smooth scroll animations and subtle micro-interactions/hover effects for a polished feel (kept lightweight — no heavy animation libraries required, but CSS transitions or a small lightweight library like AOS is acceptable).
- Placeholder images/icons for services (clearly marked as placeholders for the client to replace with real photography).
- Loading performance best practices (deferred/async scripts, optimized image formats like WebP with fallback).

---

## Deliverables

- Complete, well-organized static site source code (HTML/CSS/JS, or a lightweight static site framework of your choice, as long as it stays static and dependency-light).
- Clear folder/file structure separating components, assets, styles, scripts, and i18n content.
- Brief README explaining the project structure, how to add a new section/service in the future, and how to update translations, contact info, and the map location.

---

## Tone & Style Guidance

- Professional, trustworthy, and clean — avoid overly playful or cluttered design.
- Color palette inspired by water and greenery (blues, teals, greens) balanced with neutral tones (white, light gray, dark accents) for readability and a premium feel.
- Modern sans-serif typography, generous white space, clear visual hierarchy.
