import * as i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { TxKeyPath } from './i18n'

/**
 * Translates text.
 *
 * @param key The i18n key.
 */

export function translate(key: TxKeyPath, options?: i18next.TOptions) {
  const { t } = useTranslation()
  return key ? t(key, options) : null
}
