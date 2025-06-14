import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'http://localhost:8080/download/cristoplus/frontend-translations/{{lng}}/?format=json',
    
      customHeaders: {
        Authorization: 'Token wlu_QJHIjd0jSyv58x8voo6Z0YWwR1MVLrHe45S8',
      },
    }
  });

export default i18n;