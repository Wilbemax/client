'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import Header from '../modules/Header/Header'
import { MobileNavBar } from '../modules/MobileNavBar/MobileNavBar'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMediaQuery = useMediaQuery(800)
  return (
    <>
      <Header />
      {children}
      {isMediaQuery && <MobileNavBar />}
      <div className=''>footer</div>
    </>
  )
}
