'use client'

import { useLang } from '@/hooks/useLang'
import { Logo } from '../elements/Logo/Logo'
import '@/app/globalStyels/header.css'
import Link from 'next/link'

export default function Header() {
  const { lang, translation } = useLang()
  return (
    <header className='header'>
      <div className='continer header__continer'>
        <button className='btn-reset header__burger'>
          {translation[lang].header.menu_btn}
        </button>
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links'>
          <li className='header__links__item__btn'>
            <button className='header__links__item__btn--search' />
          </li>
          <li className='header__links__item__btn'>
            <Link
              href='/favorites'
              className='header__links__item__btn--search'
            />
          </li>
          <li className='header__links__item__btn'>
            <Link
              href='/compare'
              className='header__links__item__btn--compare'
            />
          </li>
          <li className='header__links__item__btn'>
            <Link href='/cart' className='header__links__item__btn--cart' />
          </li>
          <li className='header__links__item__btn'>
            <Link
              href='/profile'
              className='header__links__item__btn--profil'
            />
          </li>
        </ul>
      </div>
    </header>
  )
}
