import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalMenu: false,
}

export const modalsSlise = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModalMenu: (state) => {
      state.modalMenu = !state.modalMenu
    },
  },
})

export const { setModalMenu } = modalsSlise.actions

export default modalsSlise.reducer
