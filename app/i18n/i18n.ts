import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, ja } from './locale'

const resources = { en: { translation: en }, ja: { translation: ja } }

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translation'],
  defaultNS: 'translation',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
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

export default i18n
