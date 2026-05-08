import { TRANSLATIONS } from '../i18n/translations'

export function useLang() {
  const lang = 'fr'
  const t = TRANSLATIONS[lang] || {}
  return { lang, toggleLang: () => {}, t }
}
