'use client'

import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import translationJSON from '@/public/translation/translation.json'

export const useLang = () => {
  const lang = useSelector((state: RootState) => state.langs.lang)
  const translation = translationJSON

  return { lang, translation }
}
