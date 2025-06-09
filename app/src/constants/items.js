const lang = import.meta.env.VITE_LANG;

const items = {
  it: ['Home', 'Servizi', 'Galleria', 'Chi siamo', 'Contatti'],
  en: ['Home', 'Services', 'Gallery', 'About', 'Contacts'],
};

export const navItems = items[lang];
