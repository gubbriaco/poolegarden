/**
 * Site-wide configuration & company data.
 * Centralised here so contact details, socials, map location and forms
 * can be updated in a single place. Non-translatable data lives here;
 * all UI copy lives in `src/i18n/*.json`.
 *
 * Replace the placeholder values with the real client information.
 */

export const site = {
  name: "Pool & Garden",
  legalName: "Pool & Garden S.r.l.",
  vatNumber: "00000000000",
  address: {
    street: "Via del Giardino 12",
    city: "20121 Milano (MI)",
    country: "Italia",
  },
  foundedYear: 2005,
  domain: "https://www.poolegarden.example",
  email: "info@poolegarden.example",
  phone: "+39 02 1234 5678",
  phoneHref: "+390212345678",
  whatsapp: "393331234567",
  hoursIT: "Lun–Ven: 8:30–18:30 · Sab: 9:00–12:30",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  /** Approximate coordinates for the map embed (placeholder: Milan centre). */
  map: {
    lat: 45.4642,
    lng: 9.19,
    delta: 0.01,
  },
  /** Static form endpoints — replace with real Formspree/EmailJS id. */
  forms: {
    contact: "https://formspree.io/f/your-contact-form-id",
    newsletter: "https://formspree.io/f/your-newsletter-form-id",
  },
} as const;

/** Navigation anchors (one-page site, anchor links). */
export const navLinks: { id: string; key: string }[] = [
  { id: "servizi", key: "nav.services" },
  { id: "chi-siamo", key: "nav.about" },
  { id: "progetti", key: "nav.gallery" },
  { id: "recensioni", key: "nav.testimonials" },
  { id: "contatti", key: "nav.contact" },
];

/** Service anchors used in the footer quick links. */
export const serviceLinks: { id: string; key: string }[] = [
  { id: "piscine", key: "servicesOverview.cards.piscine.title" },
  { id: "irrigazione", key: "servicesOverview.cards.irrigazione.title" },
  { id: "prati", key: "servicesOverview.cards.prati.title" },
];

/** Three core service sections rendered on the homepage. */
export const services = ["piscine", "irrigazione", "prati"] as const;
export type ServiceId = (typeof services)[number];

/** Ordered list of gallery placeholder images (files in /public/images/placeholders). */
export const galleryImages: string[] = [
  "/images/placeholders/pool-1.svg",
  "/images/placeholders/irrigation-1.svg",
  "/images/placeholders/lawn-1.svg",
  "/images/placeholders/pool-2.svg",
  "/images/placeholders/garden-1.svg",
  "/images/placeholders/lawn-2.svg",
];
