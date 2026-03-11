import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: require('./src/locales/en.json') },
  hi: { translation: require('./src/locales/hi.json') },
  bn: { translation: require('./src/locales/bn.json') }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;