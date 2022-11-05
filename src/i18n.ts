import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,

    resources: {
      en: {
        translation: {
          title: "Alex's Photos",
          language: "Language:",
          home: "Home",
          about: "About Alex",
          portfolio: "Portfolio",
          dogs: "Dogs",
          weddings: "Weddings",
          nature: "Nature",
          "english-lang": "English",
          "spanish-lang": "Spanish",
        },
      },
      es: {
        translation: {
          title: "Fotos de Alex!",
          language: "Lenguage: ",
          home: "Inicio",
          about: "Sobre Alex",
          portfolio: "Portafolio",
          dogs: "Perros",
          weddings: "Bodas",
          nature: "Naturaleza",
          "english-lang": "Ingles",
          "spanish-lang": "Español",
        },
      },
    },
  });

export default i18next;
