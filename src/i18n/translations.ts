import it from "./it.json";
import en from "./en.json";

export type Lang = "it" | "en";

export const defaultLang: Lang = "it";

export const languages: Lang[] = ["it", "en"];

export const translations: Record<Lang, typeof it> = {
  it,
  en: en as typeof it,
};

export default translations;
