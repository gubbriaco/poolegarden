const assets = import.meta.glob('../assets/*', { 
  eager: true,
  query: '?url',
  import: 'default'
}) as Record<string, string>;

const L = (filename: string): string => {
  const path = `../assets/${filename}`;
  if (!assets[path]) {
    console.warn(`Immagine non trovata in src/assets: ${filename}`);
    return "";
  }
  return assets[path];
};

export const images = {
  heroPool: L("hero.jpeg"),

  piscine: L("piscine.jpeg"),
  irrigazione: L("irrigazione.webp"),
  prati: L("prati.jpg"),

  about: L("about.jpeg"),

  gallery: [
    L("gallery-1.jpeg"),
    L("gallery-2.jpg"),
    L("gallery-3.jpg"),
    L("gallery-4.jpg"),
    L("gallery-5.jpg"),
    L("gallery-6.jpeg"),
    L("gallery-7.jpg"),
    L("gallery-8.jpg"),
    L("gallery-9.jpg"),
  ],
} as const;
