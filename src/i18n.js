import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

import translationEN from './locales/en/translationEN.json'
import translationRU from './locales/ru/translationRU.json'
import translationUZ from './locales/uz/translationUZ.json'
const resources = {
   en: {
      translation: translationEN
   },
   ru: {
      translation: translationRU
   },
   uz: {
      translation: translationUZ
   }
}

i18n
   .use(initReactI18next)
   .use(LanguageDetector)
   .init({
      resources,
      lng: "ru",

   })

export default i18n