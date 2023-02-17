import { u as usePageContext, a as jsx, F as Fragment } from "./chunk-14afb3af.js";
import "react";
import { l as localeDefault } from "../pageFiles.js";
const translations = {
  Hello: {
    "de-DE": "Hallo",
    "fr-FR": "Bonjour"
  },
  Welcome: {
    "de-DE": "Wilkommen",
    "fr-FR": "Bienvenue"
  },
  "This page is": {
    "de-DE": "Diese Seite ist",
    "fr-FR": "Cette page est"
  },
  Localized: {
    "de-DE": "Loaklisiert",
    "fr-FR": "Localisé"
  },
  "Change language": {
    "de-DE": "Sprache wechseln",
    "fr-FR": "Changer la langue"
  },
  "Rendered to HTML": {
    "de-DE": "Zu HTML gerendert",
    "fr-FR": "Rendu en HTML"
  },
  Interactive: {
    "de-DE": "Interaktiv",
    "fr-FR": "Interactif"
  },
  Counter: {
    "de-DE": "Zähler",
    "fr-FR": "Compteur"
  },
  Movies: {
    "de-DE": "Filme",
    "fr-FR": "Les Films"
  },
  "Another page": {
    "de-DE": "Eine andere Seite",
    "fr-FR": "Une autre page"
  }
};
function translate(text, locale) {
  if (locale === localeDefault) {
    return text;
  }
  const textTranslations = translations[text];
  if (!textTranslations) {
    throw new Error("No translation found for: `" + text + "`");
  }
  return textTranslations[locale];
}
function LocaleText({ children }) {
  const pageContext = usePageContext();
  const { locale } = pageContext;
  const text = children;
  const textLocalized = translate(text, locale);
  return /* @__PURE__ */ jsx(Fragment, { children: textLocalized });
}
export {
  LocaleText as L
};
