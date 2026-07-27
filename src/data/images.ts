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


const U = (id: string, w: number, h?: number): string =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${
    h ? `&h=${h}` : ""
  }&q=80`;

export const images = {
  heroPool: L("hero.jpeg"),

  piscine: L("piscine.jpeg"),
  irrigazione: L("irrigazione.webp"),
  prati: L("prati.jpg"),

  about: L("about.jpeg"),

  gallery: [
    L("gallery-1.jpg"),
    L("gallery-2.jpg"),
    L("gallery-3.png"),
    L("gallery-4.jpg"),
    L("gallery-5.webp"),
    L("gallery-6.jpg"),
  ],
} as const;


/**
const U = (id: string, w: number, h?: number): string =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${
    h ? `&h=${h}` : ""
  }&q=80`;

export const images = {
  heroPool: U("1540541338287-41700207dee6", 2000),

  piscine: U("1564594985645-4427056e22e2", 1100, 825),
  irrigazione: U("1416879595882-3373a0480b5b", 1100, 825),
  prati: U("1551522435-a13afa10f103", 1100, 825),

  about: U("1515263487990-61b07816b324", 1100, 900),

  gallery: [
    U("1571896349842-33c89424de2d", 900, 700),
    U("1416879595882-3373a0480b5b", 900, 700),
    U("1466692476868-aef1dfb1e735", 900, 700),
    U("1601924994987-69e26d50dc26", 1200, 900),
    U("1558904541-efa843a96f01", 900, 700),
    U("1517649763962-0c623066013b", 900, 700),
  ],
} as const;
*/