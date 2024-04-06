'use client'
import { useLang } from '@/hooks/useLang'
import { useModals } from '@/hooks/useModals'
import {
  addOverflowHIddenFromBody,
  removeOverflowHIddenFromBody,
} from '@/lib/utils/common'
import Link from 'next/link'

export const MobileNavBar = () => {
  const { lang, translation } = useLang()
  const { modalMenu, catalogMenu, setMenu, setCatalog } = useModals()

  const handleOpenMainMenu = () => {
    if (modalMenu) {
      removeOverflowHIddenFromBody()
      setMenu(false)
    } else {
      addOverflowHIddenFromBody()
      setMenu(true)
    }

    // setCatalog(false)
  }

  return (
    <div className='mobile-navbar'>
      <Link href='/' className=' btn-reset mobile-navbar__btn'>
        {translation[lang].breadcrumbs.main}
      </Link>
      <button className='btn-reset mobile-navbar__btn'>
        {translation[lang].breadcrumbs.catalog}
      </button>
      <Link href='/favorites' className='btn-reset mobile-navbar__btn'>
        {translation[lang].breadcrumbs.favorites}
      </Link>
      <Link href='/cart' className='btn-reset mobile-navbar__btn'>
        {translation[lang].breadcrumbs.cart}
      </Link>
      <button
        onClick={handleOpenMainMenu}
        className='btn-reset mobile-navbar__btn'
      >
        {translation[lang].breadcrumbs.main}
      </button>
    </div>
  )
}
