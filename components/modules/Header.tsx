'use client'

import { useLang } from '@/hooks/useLang'
import { Logo } from '../elements/Logo/Logo'

import Link from 'next/link'
import Menu from './Menu'
import { useModals } from '@/hooks/useModals'
import { addOverflowHIddenFromBody } from '@/utils/common'

export default function Header() {
  const { lang, translation } = useLang()
  const { setMenu } = useModals()

  const handleOpenMenu = () => {
    addOverflowHIddenFromBody()
    setMenu()
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <button
          className='btn-reset header__burger header__links__item__btn'
          onClick={handleOpenMenu}
        >
          {translation[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='list-reset header__links'>
          <li className='header__links__item'>
            <button className='btn-reset header__links__item__btn header__links__item__btn--search' />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/compare'
              className='header__links__item__btn header__links__item__btn--compare'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/cart'
              className='header__links__item__btn header__links__item__btn--cart'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/profile'
              className='header__links__item__btn header__links__item__btn--profile'
            />
          </li>
        </ul>
      </div>
    </header>
  )
}
