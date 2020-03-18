import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const Languages = ["DE", "GB", "NO","DK","SE"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'GB',
    debug: true,
    whitelist:Languages,

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;