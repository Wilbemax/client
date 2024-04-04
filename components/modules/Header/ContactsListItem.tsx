import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

export const ContactsListItem = () => {
  const { lang, translation } = useLang()
  return (
    <>
      <li className='nav-menu__accordion__item'>
        <a
          href='tel:+74995558293'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          +7 (999) 555 55 55
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <a
          href='mailto:test@gmail.com'
          className='nav-menu__accordion__item__link'
        >
          Email
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='https://t.me/jkdlon'
          className='nav-menu__accordion__item__link'
        >
          {translation[lang].main_menu.tg}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link href='https://vk.com' className='nav-menu__accordion__item__link'>
          {translation[lang].main_menu.vk}
        </Link>
      </li>
    </>
  )
}
