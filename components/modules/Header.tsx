'use client'

import { useLang } from '@/hooks/useLang'

export default function Header() {
  const { lang, translation } = useLang()
  return (
    <header className='header'>
      <div className='continer header__continer'>
        <button className='btn-reset header__burger'>
          {translation[lang].header.menu_btn}
        </button>
      </div>
    </header>
  )
}
