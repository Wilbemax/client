'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import Header from '../modules/Header/Header'
import { MobileNavBar } from '../modules/MobileNavBar/MobileNavBar'
import { AnimatePresence, motion } from 'framer-motion'
import { useModals } from '@/hooks/useModals'
import { SearchModal } from '../modules/Header/SearchModal'
import { removeOverflowHIddenFromBody } from '@/lib/utils/common'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMediaQuery = useMediaQuery(800)
  const { searchModal, setSearch } = useModals()
  const handleCloseSearchModal = () => {
    setSearch(false)
    removeOverflowHIddenFromBody()
  }
  return (
    <>
      <Header />
      {children}
      {isMediaQuery && <MobileNavBar />}
      <AnimatePresence>
        {searchModal && (
          <motion.div
            initial={{ opacity: 0, zIndex: 102 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {' '}
            <SearchModal />{' '}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`header__search-overlay ${searchModal ? 'overlay-active' : ' '}`}
        onClick={handleCloseSearchModal}
      />
      <div className=''>footer</div>
    </>
  )
}
