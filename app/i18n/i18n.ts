import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, ja } from './locale'

const resources = { en, ja }
const i18nInstance = i18n.createInstance()

i18nInstance
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    load: 'languageOnly',
    defaultNS: 'common',
    nsSeparator: '.',
    returnObjects: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })
  .then((result) => result)
  .catch((err) => {
    console.log('Error in creating instance for i18n', err)
  })

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof en
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]

export default i18nInstance
