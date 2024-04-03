import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import translationJSON from '@/public/translation/translation.json'
import { RootInterface } from '@/types/langTypes'
import { setLang } from '@/features/language/language'
import { AllowedLangs } from '@/constants/lang'

export const useLang = () => {
  const lang = useSelector((state: RootState) => state.langs)
  const translation: RootInterface = translationJSON
  const dispatch = useDispatch()
  const switchLang = (lang: AllowedLangs) => {
    dispatch(setLang(lang))
  }

  return { lang, translation, switchLang }
}
