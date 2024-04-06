import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import { useMenuAnimation } from '@/hooks/useMenuAnimation'
import { useModals } from '@/hooks/useModals'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Header from './Header'
import smallLogoBg from '@/public/img/logo-bg-small.png'
import { removeOverflowHIddenFromBody } from '@/lib/utils/common'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { CatalogMenuButton } from './CatalogMenuButton'
import { CatalogMenuList } from './CatalogMenuList'
import { Accardion } from '../Accardion/Accardion'
import { title } from 'process'
import Link from 'next/link'

export const CatalogMenu = () => {
  const { catalogMenu, setCatalog } = useModals()
  const { lang, translation } = useLang()
  const { itemVariants, sideVariants, popupZIndex } = useMenuAnimation(
    2,
    catalogMenu
  )
  const isMedia450 = useMediaQuery(450)
  const [showClothList, setshowClothList] = useState(false)
  const [showAccessoriesList, setshowAccessoriesList] = useState(false)
  const [showSouvenirsList, setshowSouvenirsList] = useState(false)
  const [showOfficeList, setshowOfficeList] = useState(false)

  const handleShowClothList = () => {
    setshowClothList(true)
    setshowAccessoriesList(false)
    setshowSouvenirsList(false)
    setshowOfficeList(false)
  }
  const handleShowAccessoriesList = () => {
    setshowClothList(false)
    setshowAccessoriesList(true)
    setshowSouvenirsList(false)
    setshowOfficeList(false)
  }
  const handleShowSouvenirsList = () => {
    setshowClothList(false)
    setshowAccessoriesList(false)
    setshowSouvenirsList(true)
    setshowOfficeList(false)
  }
  const handleShowOfficeList = () => {
    setshowClothList(false)
    setshowAccessoriesList(false)
    setshowSouvenirsList(false)
    setshowOfficeList(true)
  }

  const handleCloseMenu = () => {
    setshowClothList(false)
    setshowAccessoriesList(false)
    setshowSouvenirsList(false)
    setshowOfficeList(false)
    removeOverflowHIddenFromBody()
    setCatalog(false)
  }

  const items = [
    {
      name: translation[lang].main_menu.cloth,
      id: 1,
      items: [
        translation[lang].comparison['t-shirts'],
        translation[lang].comparison['long-sleeves'],
        translation[lang].comparison.hoodie,
        translation[lang].comparison.outerwear,
      ],
      handler: () => handleShowClothList(),
    },
    {
      name: translation[lang].main_menu.accessories,
      id: 2,
      items: [
        translation[lang].comparison.bags,
        translation[lang].comparison.headdress,
        translation[lang].comparison.umbrella,
      ],
      handler: () => handleShowAccessoriesList(),
    },
    {
      name: translation[lang].main_menu.souvenirs,
      id: 3,
      items: [
        translation[lang].comparison['business-souvenirs'],
        translation[lang].comparison['promotional-souvenirs'],
      ],
      handler: () => handleShowSouvenirsList(),
    },
    {
      name: translation[lang].main_menu.office,
      id: 4,
      items: [
        translation[lang].comparison.notebook,
        translation[lang].comparison.pen,
      ],
      handler: () => handleShowOfficeList(),
    },
  ]

  return (
    <div className='catalog-menu' style={{ zIndex: popupZIndex }}>
      <AnimatePresence>
        {catalogMenu && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: '100vw',
            }}
            exit={{
              width: 0,
              transition: { delay: 0.2, duration: 0.3 },
            }}
            className='catalog-menu__aside'
          >
            <div className='catalog-menu__header'>
              <Header />
            </div>
            <motion.div
              className='catalog-menu__inner'
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}
            >
              <Image
                src={smallLogoBg}
                alt='catalog background'
                className='catalog-menu__bg'
              />
              <motion.button
                className='btn-reset catalog-menu__close'
                variants={itemVariants}
                onClick={handleCloseMenu}
              />
              <motion.h2
                variants={itemVariants}
                className='catalog-menu__title'
              >
                {translation[lang].main_menu.catalog}
              </motion.h2>
              <ul className='list-reset catalog-menu__list'>
                {items.map(({ id, name, items, handler }) => {
                  const buttonProps = (isActive: boolean) => ({
                    handler: handler as VoidFunction,
                    name,
                    isActive,
                  })

                  const isCurrentList = (
                    showList: boolean,
                    currentId: number
                  ) => showList && id === currentId

                  return (
                    <motion.li
                      key={id}
                      variants={itemVariants}
                      className='catalog-menu__list__item'
                    >
                      {!isMedia450 && (
                        <>
                          {id === 1 && (
                            <CatalogMenuButton
                              {...buttonProps(showClothList)}
                            />
                          )}
                          {id === 2 && (
                            <CatalogMenuButton
                              {...buttonProps(showAccessoriesList)}
                            />
                          )}
                          {id === 3 && (
                            <CatalogMenuButton
                              {...buttonProps(showSouvenirsList)}
                            />
                          )}
                          {id === 4 && (
                            <CatalogMenuButton
                              {...buttonProps(showOfficeList)}
                            />
                          )}
                        </>
                      )}

                      {!isMedia450 && (
                        <AnimatePresence>
                          {isCurrentList(showClothList, 1) && (
                            <CatalogMenuList items={items} />
                          )}
                          {isCurrentList(showAccessoriesList, 2) && (
                            <CatalogMenuList items={items} />
                          )}
                          {isCurrentList(showSouvenirsList, 3) && (
                            <CatalogMenuList items={items} />
                          )}
                          {isCurrentList(showOfficeList, 4) && (
                            <CatalogMenuList items={items} />
                          )}
                        </AnimatePresence>
                      )}
                      {isMedia450 && (
                        <Accardion
                          title={name}
                          titleClass='btn-reset nav-menu__accordion__item__title'
                        >
                          <ul className='list-reset catalog__accardion__list'>
                            {items.map((title, i) => (
                              <li
                                key={i}
                                className='catalog__accordion__list__item'
                              >
                                <Link
                                  href='/catalog'
                                  className='nav-menu__accordion__item__list__item__link'
                                >
                                  {title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Accardion>
                      )}
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  )
}
