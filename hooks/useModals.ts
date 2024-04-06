import { setCatalogMenu, setModalMenu } from '@/features/modals/modals'
import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'

export const useModals = () => {
  const dispatch = useDispatch()

  const modalMenu = useSelector((state: RootState) => state.modals.modalMenu)
  const catalogMenu = useSelector(
    (state: RootState) => state.modals.catalogMenu
  )

  const setMenu = (isOpen: boolean) => {
    dispatch(setModalMenu(isOpen))
  }
  const setCatalog = (isOpen: boolean) => {
    dispatch(setCatalogMenu(isOpen))
  }
  return { modalMenu, catalogMenu, setMenu, setCatalog }
}
