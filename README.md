# Pool & Garden — Corporate Website

A modern, fast, fully static website for **Pool & Garden**, an Italian company
specialising in the **construction and maintenance** of swimming pools
(_piscine_), irrigation systems (_impianti di irrigazione_) and artificial
lawns (_prati sintetici_).

Built with **[Astro](https://astro.build)** (static output) and **Tailwind CSS v4**,
with a lightweight client-side **IT / EN internationalisation** system (no page reload),
SEO best practices, accessibility, and GDPR-ready cookie consent.

---

## Tech stack

| Concern        | Choice                                                        |
| -------------- | ------------------------------------------------------------ |
| Framework      | Astro 7 (100% static HTML output)                            |
| Styling        | Tailwind CSS v4 (CSS-based config in `src/styles/global.css`)|
| i18n           | JSON dictionaries + tiny vanilla-JS runtime (`public/js/i18n.js`) |
| Interactions   | Vanilla JS — IntersectionObserver reveal, tabs, lightbox, cookie banner |
| Map            | OpenStreetMap embed (no API key required)                    |
| Forms          | Static form service (Formspree placeholder)                  |
| Fonts          | Inter + Plus Jakarta Sans (Google Fonts, `display=swap`)     |

No heavy runtime dependencies are added — the site ships mostly hand-written
HTML/CSS/JS.

---

## Getting started

```sh
# Requires Node.js >= 22.12 (see package.json "engines")
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the built site
```

> The default Node on this machine is v18; switch to the bundled v22 first, e.g.
> `nvm use v22.22.1`.

---

## Project structure

```text
poolegarden/
├── astro.config.mjs            # Astro + Tailwind v4 Vite plugin
├── public/
│   ├── js/
│   │   ├── i18n.js             # IT/EN language switcher (no reload)
│   │   └── main.js             # reveal, mobile menu, tabs, lightbox, cookie, forms
│   ├── images/placeholders/    # placeholder SVGs (hero + gallery/services)
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── assets/
    │   └── logo.png            # company logo (header, footer, favicon)
    ├── components/             # reusable UI pieces
    │   ├── Icon.astro          # inline SVG icon set
    │   ├── CTAButton.astro     # button / link with variants
    │   ├── LanguageSwitcher.astro
    │   └── SectionHeading.astro
    ├── sections/               # page sections (composable)
    │   ├── Header.astro
    │   ├── Hero.astro
    │   ├── ServicesOverview.astro
    │   ├── ServiceBlock.astro  # reusable Construction/Maintenance tabbed block
    │   ├── About.astro
    │   ├── Gallery.astro
    │   ├── Testimonials.astro
    │   ├── Contact.astro
    │   ├── Newsletter.astro
    │   ├── Footer.astro
    │   └── CookieConsent.astro
    ├── layouts/
    │   ├── Layout.astro        # <head>, SEO/OG meta, favicon, fonts, scripts
    │   └── LegalPage.astro     # shared chrome for privacy/cookie/terms
    ├── pages/
    │   ├── index.astro         # one-page site (all sections)
    │   ├── 404.astro
    │   ├── privacy.astro
    │   ├── cookie-policy.astro
    │   └── terms.astro
    ├── i18n/
    │   ├── it.json             # Italian dictionary (default)
    │   ├── en.json             # English dictionary
    │   └── translations.ts     # typed loader + default language
    ├── data/
    │   └── site.ts             # company info, contacts, socials, map, forms
    └── styles/
        └── global.css          # Tailwind import + design tokens (@theme)
```

---

## Design system

Colours and fonts are defined as Tailwind v4 tokens in `src/styles/global.css`
under `@theme`:

- **Ocean** (`ocean-50…950`) — primary, water / teal-blue.
- **Leaf** (`leaf-50…950`) — secondary, greenery.
- **Sand** (`sand-50…200`) — warm neutral.
- **Fonts**: `--font-sans` (Inter) and `--font-display` (Plus Jakarta Sans).

Use them as standard Tailwind utilities, e.g. `bg-ocean-600`, `text-leaf-500`.

---

## Internationalisation (IT / EN)

- Default language is **Italian** (server-rendered, SEO-friendly for the primary
  market). English is swapped **instantly, without a page reload**, by
  `public/js/i18n.js`, which also persists the choice in `localStorage`.
- All copy lives in `src/i18n/it.json` and `src/i18n/en.json`. **Never hardcode
  UI text** in markup — instead add a key to both files and reference it.

### How text is translated in markup

```astro
<!-- plain text -->
<h2 data-i18n="about.title">Titolo</h2>

<!-- attributes (e.g. placeholder, aria-label) -->
<input data-i18n-attr="placeholder:contact.form.emailPh" />

<!-- rich HTML -->
<div data-i18n-html="some.htmlKey"></div>
```

The dotted path supports nested objects **and arrays**, e.g.
`piscine.construction.features.2` or `testimonials.items.0.name`.

### Adding / updating translations

1. Edit `src/i18n/it.json` and `src/i18n/en.json` — keep the **structure
   identical** in both files (same keys, same array lengths).
2. Reference the new key via `data-i18n="…"` in any component.

---

## How to extend

### Add a new service

1. **Copy**: add a new block to both `it.json` and `en.json`, mirroring the
   structure of an existing service (e.g. `piscine`), with
   `eyebrow`, `title`, `intro`, `construction` / `maintenance` (each with
   `tab`, `title`, `desc`, `features[]`) and `cta`.
2. **Render** it on the homepage (`src/pages/index.astro`):
   ```astro
   <ServiceBlock id="illuminazione" prefix="illuminazione" icon="sparkles"
     accent="ocean" image="/images/placeholders/your-image.svg" />
   ```
3. **Icon**: add a new entry to the `icons` map in `src/components/Icon.astro`.
4. **Nav / quick links**: add the anchor to `navLinks` / `serviceLinks` in
   `src/data/site.ts`, and a card to `ServicesOverview.astro` if desired.

### Add a new section

Create `src/sections/MySection.astro`, then drop it into `src/pages/index.astro`.
Use `<SectionHeading>` for consistent headings and `data-reveal` for the scroll-in
animation.

### Update company / contact info

Edit **`src/data/site.ts`** (single source of truth):

- `email`, `phone`, `phoneHref`, `whatsapp`
- `address`, `vatNumber` (P.IVA), `legalName`
- `social` links (Facebook / Instagram / LinkedIn)
- `map` coordinates (lat / lng / delta) for the OpenStreetMap embed
- `forms.contact` / `forms.newsletter` — your real Formspree/EmailJS endpoint

These values are picked up automatically by Header, Footer, Contact and the
JSON-LD structured data.

### Update the map location

Change `site.map.lat` and `site.map.lng` in `src/data/site.ts` (and optionally
`delta` to control the zoom window). The OSM embed is regenerated automatically.

### Wire up the forms

Replace the placeholder Formspree URLs in `site.forms` with your real endpoint
(e.g. `https://formspree.io/f/abcdwxyz`). The forms submit via AJAX with a
graceful fallback; set up the fields in your Formspree/EmailJS dashboard.

### Enable Google Analytics

Open `public/js/main.js` → `enableAnalytics()` and uncomment the `gtag` block,
replacing `G-XXXXXXXXXX`. Analytics only loads **after** the user accepts the
cookie banner.

### Replace placeholder images

Swap the files in `public/images/placeholders/` with real photography
(preferably optimised WebP with a fallback). The gallery list lives in
`src/data/site.ts` (`galleryImages`) and captions in the i18n files
(`gallery.captions`).

---

## SEO & accessibility

- Semantic HTML5 landmarks, descriptive `alt`s, ARIA roles for tabs / dialogues.
- `skip-link`, visible focus styles, keyboard-operable menu/lightbox, and
  `prefers-reduced-motion` support.
- Per-page `<title>`/meta, Open Graph + Twitter cards, canonical URLs,
  `sitemap.xml`, `robots.txt`, and `LocalBusiness` JSON-LD structured data.
- Favicon is generated from `src/assets/logo.png`.

---

## Legal / compliance notes

- Company name, address and **P.IVA** in `src/data/site.ts` are realistic
  **placeholders** — replace them with the client's real details before going live.
- The Privacy Policy, Cookie Policy and Terms pages contain **placeholder** legal
  text — have the final copy drafted by a professional before publication.
- The cookie consent banner stores the user's choice in `localStorage` and gates
  analytics; adjust to your exact consent workflow as needed.

---

## Commands

| Command           | Action                                         |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the dev server (`localhost:4321`)        |
| `npm run build`   | Build the static site to `./dist`              |
| `npm run preview` | Preview the production build locally           |
| `npm run astro`   | Run Astro CLI commands                         |
