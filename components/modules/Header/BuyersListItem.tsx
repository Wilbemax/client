import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

export const BuyersListItem = () => {
  const { lang, translation } = useLang()

  return (
    <>
      <li className='nav-menu__accordion__item '>
        <Link
          href='/about'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          {translation[lang].main_menu.about}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link href='/blog' className='nav-menu__accordion__item__link'>
          {translation[lang].main_menu.blog}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='/shipping-and-payment'
          className='nav-menu__accordion__item__link'
        >
          {translation[lang].main_menu.shipping}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='/purchase-returns'
          className='nav-menu__accordion__item__link'
        >
          {translation[lang].main_menu.returns}
        </Link>
      </li>
    </>
  )
}
