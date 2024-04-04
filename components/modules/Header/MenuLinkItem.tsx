import Link from 'next/link'
import { IMenuLinkItemProps } from './../../../types/modules'
import React from 'react'

export const MenuLinkItem = ({
  item,
  handleRedirectToCatalog,
}: IMenuLinkItemProps) => {
  const onRedirect = () => handleRedirectToCatalog(item.href)
  return (
    <li key={item.id} className='nav-menu__accordion__item__list__item'>
      <Link
        href={item.href}
        className='nav-menu__accordion__item__list__item__lin'
        onClick={onRedirect}
      />
      {item.text}
    </li>
  )
}
