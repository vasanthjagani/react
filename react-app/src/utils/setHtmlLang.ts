// src/utils/setHtmlLang.ts
export const setHtmlLang = (lang: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang;
  }
};