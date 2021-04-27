import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

import translationEN from './locales/en/translation.json'
import translationUK from './locales/uk/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  uk: {
    translation: translationUK,
  },
}

i18n.use(reactI18nextModule).init({
  resources,
  lng: 'uk',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
