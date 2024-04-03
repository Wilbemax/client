import { AllowedLangs } from '@/constants/lang'
import { useLang } from '@/hooks/useLang'
import { useModals } from '@/hooks/useModals'
import { removeOverflowHIddenFromBody } from '@/utils/common'
import Image from 'next/image'
import { useState } from 'react'
import logoBig from '@/public/img/logo-bg.png'
import { Logo } from '../../elements/Logo/Logo'
import { AnimatePresence, motion } from 'framer-motion'
import { Accardion } from '../Accardion/Accardion'

export default function Menu() {
  const { showCatalogList, setShowCatalogList } = useState(false)
  const { showBuyersList, setShowBuyersList } = useState(false)
  const { showContactList, setShowContactList } = useState(false)
  const { modalMenu, setMenu } = useModals()
  const { switchLang, lang, translation } = useLang()

  const handleSwitchLang = (lang: string) => {
    switchLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

  const clothLinks = [
    {
      id: 1,
      text: translation[lang].comparison['t-shirts'],
      href: '/catalog/cloth?offset=0&type=t-shirts',
    },
    {
      id: 2,
      text: translation[lang].comparison['long-sleeves'],
      href: '/catalog/cloth?offset=0&type=long-sleeves',
    },
    {
      id: 3,
      text: translation[lang].comparison.hoodie,
      href: '/catalog/cloth?offset=0&type=hoodie',
    },
    {
      id: 4,
      text: translation[lang].comparison.outerwear,
      href: '/catalog/cloth?offset=0&type=outerwear',
    },
  ]

  const accessoriesLinks = [
    {
      id: 1,
      text: translation[lang].comparison.bags,
      href: '/catalog/accessories?offset=0&type=bags',
    },
    {
      id: 2,
      text: translation[lang].comparison.headdress,
      href: '/catalog/accessories?offset=0&type=headdress',
    },
    {
      id: 3,
      text: translation[lang].comparison.umbrella,
      href: '/catalog/accessories?offset=0&type=umbrella',
    },
  ]

  const souvenirsLinks = [
    {
      id: 1,
      text: translation[lang].comparison['business-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=business-souvenirs',
    },
    {
      id: 2,
      text: translation[lang].comparison['promotional-souvenirs'],
      href: '/catalog/souvenirs?offset=0&type=promotional-souvenirs',
    },
  ]

  const officeLinks = [
    {
      id: 1,
      text: translation[lang].comparison.notebook,
      href: '/catalog/office?offset=0&type=notebook',
    },
    {
      id: 2,
      text: translation[lang].comparison.pen,
      href: '/catalog/office?offset=0&type=pen',
    },
  ]

  return (
    <nav className={`nav-menu ${modalMenu ? 'open' : 'close'}`}>
      <div className={`container nav-menu__container`}>
        {' '}
        <div className={`nav-menu__logo ${modalMenu ? 'open' : ''}`}>
          {' '}
          <Logo />{' '}
        </div>
        <Image
          className={`nav-menu__bg ${modalMenu ? 'open' : ''}`}
          src={logoBig}
          alt='WBMstroe background'
        />
        <button
          onClick={() => {
            removeOverflowHIddenFromBody()
            setMenu()
          }}
          className={`btn-reset nav-menu__close ${modalMenu ? 'open' : ''}`}
        />
        <div className={`nav-menu__lang ${modalMenu ? 'open' : ''}`}>
          <button
            className={`btn-reset nav-menu__lang__btn ${lang === 'ru' ? 'lang-active' : ''}`}
            onClick={handleSwitchLangToRu}
          >
            ru
          </button>
          <button
            className={`btn-reset nav-menu__lang__btn ${lang === 'en' ? 'lang-active' : ''}`}
            onClick={handleSwitchLangToEn}
          >
            en
          </button>
          <ul
            className={`list-reset nav-menu__list ${modalMenu ? 'open' : ''}`}
          >
            <li className='nav-menu__list__item'>
              <button className='btn-reset nav-menu__list__item__btn'>
                {translation[lang].main_menu.catalog}
              </button>
              <AnimatePresence>
                {showCatalogList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset nav-menu__accordion'
                  >
                    <li className='nav-menu__accordion__item'>
                      <Accardion
                        title={translation[lang].main_menu.cloth}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      />
                      <ul className='list-reset nav-menu__accordion__item__list ' />
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className='nav-menu__list__item'>
              <button className='btn-reset nav-menu__list__item__btn'>
                {translation[lang].main_menu.buyers}
              </button>
            </li>
            <li className='nav-menu__list__item'>
              <button className='btn-reset nav-menu__list__item__btn'>
                {translation[lang].main_menu.contacts}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
