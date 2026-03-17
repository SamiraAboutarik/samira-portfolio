import { TRANSLATIONS } from '../i18n/translations'

export function useLang() {
  const t = TRANSLATIONS['en']
  return { lang: 'en', toggleLang: () => {}, t }
}