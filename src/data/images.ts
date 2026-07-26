/**
 * PLACEHOLDER photography (Unsplash, free licence, no attribution required).
 *
 * These are real, topical images used so the site looks finished out-of-the-box.
 * Each URL was verified to resolve. Replace them with the client's real
 * project photography before launch — the rest of the code will pick up the
 * new URLs automatically.
 *
 * Builder: `U("<unsplash-id>", width, height?)` → optimised JPEG.
 */

const U = (id: string, w: number, h?: number): string =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${
    h ? `&h=${h}` : ""
  }&q=80`;

export const images = {
  /** Hero background — swimming pool. */
  heroPool: U("1540541338287-41700207dee6", 2000),

  /** Detailed service section images. */
  piscine: U("1564594985645-4427056e22e2", 1100, 825),
  irrigazione: U("1416879595882-3373a0480b5b", 1100, 825),
  prati: U("1551522435-a13afa10f103", 1100, 825),

  /** About section image. */
  about: U("1515263487990-61b07816b324", 1100, 900),

  /**
   * Gallery — order must match `gallery.captions` in src/i18n/{it,en}.json:
   * [0] residential pool, [1] irrigation, [2] residential lawn,
   * [3] infinity pool (featured), [4] green area, [5] sports field.
   */
  gallery: [
    U("1571896349842-33c89424de2d", 900, 700),
    U("1416879595882-3373a0480b5b", 900, 700),
    U("1466692476868-aef1dfb1e735", 900, 700),
    U("1601924994987-69e26d50dc26", 1200, 900),
    U("1558904541-efa843a96f01", 900, 700),
    U("1517649763962-0c623066013b", 900, 700),
  ],
} as const;
