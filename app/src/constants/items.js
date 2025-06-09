const lang = import.meta.env.VITE_LANG;

const items = {
  it: ['Home', 'Chi siamo', 'Contatti'],
  en: ['Home', 'About', 'Contact'],
};

export const navItems = items[lang];
