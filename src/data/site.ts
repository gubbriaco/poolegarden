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
  vatNumber: "03771660788",
  address: {
    street: "Via Trieste 98",
    city: "87046 Montalto Uffugo (CS)",
    country: "Italia",
  },
  foundedYear: 2005,
  domain: "https://www.poolegarden.it",
  email: "info@poolegarden.it",
  phone: "+39 393 93 18 818",
  phoneHref: "+393939318818",
  whatsapp: "393939318818",
  hoursIT: "Lun–Ven: 7:00–19:30",
  social: {
    facebook: "https://www.facebook.com/poolegarden",
    instagram: "https://www.instagram.com/poolegarden",
    linkedin: "https://it.linkedin.com/in/pool-garden-20a54473",
  },
  map: {
    lat: 39.386837677794375,
    lng: 16.236521953145026,
    delta: 0.01,
  },
  /** Static form endpoints — replace with real Formspree/EmailJS id. */
  forms: {
    contact: "https://formspree.io/f/meajrqzp",
    newsletter: "https://assets.mailerlite.com/jsonp/2579284/forms/195990286900397992/subscribe",
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

/** Placeholder imagery lives in `src/data/images.ts`. */
