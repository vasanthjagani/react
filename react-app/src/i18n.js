import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import translationEN from "./locales/en/translations.json";
import translationFR from "./locales/es/translations.json";
// import translationSP from "./locales/sp/transulation.json";
 
// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationFR,
  }, 
  // sp: {
  //   translation: translationSP,
  // },
};
 
i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: "en", // use English if detected language is not available
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });
 
export default i18n;