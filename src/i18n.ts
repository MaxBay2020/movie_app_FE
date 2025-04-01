import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from './locales/en/en.json'
import frTranslation from './locales/fr/fr.json'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    English: {
        translation: enTranslation
    },
    French: {
        translation: frTranslation
    }
};

const currentLanguage = localStorage.getItem('language') || 'English'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: currentLanguage,
        fallbackLng: 'English',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;