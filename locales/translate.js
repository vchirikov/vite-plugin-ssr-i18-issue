export { translate }

import { translations } from './translations.js'
import { localeDefault } from './locales.js'

function translate(text, locale) {
  if (locale === localeDefault) {
    return text
  }
  const textTranslations = translations[text]
  if (!textTranslations) {
    throw new Error('No translation found for: `' + text + '`')
  }
  return textTranslations[locale]
}
