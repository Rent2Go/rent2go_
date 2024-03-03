// i18n.ts dosyası
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  tr: {
    translation: translationTR
  }
};

// Local storage'dan dil tercihini al
const storedLanguage = localStorage.getItem('preferredLanguage');
const defaultLanguage = storedLanguage || 'en'; // Varsayılan dil İngilizce

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage, // Local storage'dan alınan dil tercihi
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
