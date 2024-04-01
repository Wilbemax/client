import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import translationJSON from '@/public/translation/translation.json'
import { RootInterface } from '@/types/langTypes'

export const useLang = () => {
  const lang = useSelector((state: RootState) => state.langs)
  const translation: RootInterface = translationJSON

  return { lang, translation }
}
