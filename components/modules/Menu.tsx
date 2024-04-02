import { useModals } from '@/hooks/useModals'
import { useState } from 'react'

export default function Menu() {
  const { showCatalogList, setShowCatalogList } = useState(false)
  const { showBuyersList, setShowBuyersList } = useState(false)
  const { showContactList, setShowContactList } = useState(false)
  const { modalMenu, setMenu } = useModals()

  return (
    <nav className={`nav-menu ${modalMenu ? 'open' : 'close'}`}>
      <button
        onClick={() => setMenu()}
        className={`btn-reset nav-menu__close ${modalMenu ? 'open' : ''}`}
      />
    </nav>
  )
}
