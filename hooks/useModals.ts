import { setModalMenu } from '@/features/modals/modals'
import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'

export const useModals = () => {
  const dispatch = useDispatch()

  const modalMenu = useSelector((state: RootState) => state.modals.modalMenu)

  const setMenu = () => {
    dispatch(setModalMenu())
  }
  return { modalMenu, setMenu }
}
