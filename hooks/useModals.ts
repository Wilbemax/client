import {
  setCatalogMenu,
  setModalMenu,
  setSearchModalWindow,
} from '@/features/modals/modals'
import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'

export const useModals = () => {
  const dispatch = useDispatch()

  const { modalMenu, catalogMenu, searchModal } = useSelector(
    (state: RootState) => state.modals
  )

  const setMenu = (isOpen: boolean) => {
    dispatch(setModalMenu(isOpen))
  }
  const setCatalog = (isOpen: boolean) => {
    dispatch(setCatalogMenu(isOpen))
  }
  const setSearch = (isOpen: boolean) => {
    dispatch(setSearchModalWindow(isOpen))
  }
  return {
    modalMenu,
    catalogMenu,
    searchModal,
    setMenu,
    setCatalog,
    setSearch,
  }
}
