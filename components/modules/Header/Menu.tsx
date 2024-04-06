import { AllowedLangs } from '@/constants/lang'
import { useLang } from '@/hooks/useLang'
import { useModals } from '@/hooks/useModals'
import { removeOverflowHIddenFromBody } from '@/lib/utils/common'
import Image from 'next/image'
import { useState } from 'react'
import logoBig from '@/public/img/logo-bg.png'
import logoSmall from '@/public/img/logo-bg-small.png'
import { Logo } from '../../elements/Logo/Logo'
import { AnimatePresence, motion } from 'framer-motion'
import { Accardion } from '../Accardion/Accardion'
import { usePathname } from 'next/navigation'
import { MenuLinkItem } from './MenuLinkItem'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { BuyersListItem } from './BuyersListItem'
import { ContactsListItem } from './ContactsListItem'

export default function Menu() {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setShowBuyersList] = useState(false)
  const [showContactList, setShowContactList] = useState(false)
  const { modalMenu, setMenu } = useModals()
  const { switchLang, lang, translation } = useLang()
  const isMedia800 = useMediaQuery(800)
  const isMedia640 = useMediaQuery(640)

  const pathname = usePathname()

  const handleSwitchLang = (lang: string) => {
    switchLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

  const handleShowCatalogList = () => {
    setShowBuyersList(false)
    setShowCatalogList(true)
    setShowContactList(false)
  }
  const handleShowBuyersList = () => {
    setShowBuyersList(true)
    setShowCatalogList(false)
    setShowContactList(false)
  }
  const handleShowContactsList = () => {
    setShowBuyersList(false)
    setShowCatalogList(false)
    setShowContactList(true)
  }
  const handleRedirectToCatalog = (path: string) => {
    if (pathname.includes('/catalog')) {
      window.history.pushState({ path }, '', path)
      window.location.reload()
    }

    setMenu(true)
  }

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
          src={isMedia800 ? logoSmall : logoBig}
          alt='WBMstroe background'
        />
        <button
          onClick={() => {
            removeOverflowHIddenFromBody()
            setMenu(false)
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
        </div>
        <ul className={`list-reset nav-menu__list ${modalMenu ? 'open' : ''}`}>
          {!isMedia800 && (
            <li className='nav-menu__list__item'>
              <button
                className='btn-reset nav-menu__list__item__btn'
                onMouseEnter={handleShowCatalogList}
              >
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
                      >
                        <ul className='list-reset nav-menu__accordion__item__list '>
                          {clothLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accardion>
                    </li>
                    <li className='nav-menu__accordion__item'>
                      <Accardion
                        title={translation[lang].main_menu.accessories}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list '>
                          {accessoriesLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accardion>
                    </li>
                    <li className='nav-menu__accordion__item'>
                      <Accardion
                        title={translation[lang].main_menu.souvenirs}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list '>
                          {souvenirsLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accardion>
                    </li>
                    <li className='nav-menu__accordion__item'>
                      <Accardion
                        title={translation[lang].main_menu.office}
                        titleClass='btn-reset nav-menu__accordion__item__title'
                      >
                        <ul className='list-reset nav-menu__accordion__item__list '>
                          {officeLinks.map((item) => (
                            <MenuLinkItem
                              key={item.id}
                              item={item}
                              handleRedirectToCatalog={handleRedirectToCatalog}
                            />
                          ))}
                        </ul>
                      </Accardion>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          )}
          <li className='nav-menu__list__item'>
            {!isMedia640 && (
              <button
                onMouseEnter={handleShowBuyersList}
                className='btn-reset nav-menu__list__item__btn'
              >
                {translation[lang].main_menu.buyers}
              </button>
            )}
            {!isMedia640 && (
              <AnimatePresence>
                {showBuyersList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset nav-menu__accordion'
                  >
                    <BuyersListItem />
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
            {isMedia640 && (
              <AnimatePresence>
                <Accardion
                  title={translation[lang].main_menu.buyers}
                  titleClass='btn-reset nav-menu__list__item__btn'
                >
                  <ul className='list-reset nav-menu__accordion__item__list '>
                    <BuyersListItem />
                  </ul>
                </Accardion>
              </AnimatePresence>
            )}
          </li>
          <li className='nav-menu__list__item'>
            {!isMedia640 && (
              <button
                onMouseEnter={handleShowContactsList}
                className='btn-reset nav-menu__list__item__btn'
              >
                {translation[lang].main_menu.contacts}
              </button>
            )}

            {!isMedia640 && (
              <AnimatePresence>
                {showContactList && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='list-reset nav-menu__accordion'
                  >
                    <ul className='list-reset nav-menu__accordion__item__list '>
                      <ContactsListItem />{' '}
                    </ul>
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
            {isMedia640 && (
              <AnimatePresence>
                <Accardion
                  title={translation[lang].main_menu.contacts}
                  titleClass='btn-reset nav-menu__list__item__btn'
                >
                  <ul className='list-reset nav-menu__accordion__item__list '>
                    <ContactsListItem />
                  </ul>
                </Accardion>
              </AnimatePresence>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}
