import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalMenu: false,
}

export const modalsSlise = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModalMenu: (state, action) => {
      state.modalMenu = !state.modalMenu
    },
  },
})

export const { setModalMenu } = modalsSlise.actions

export default modalsSlise.reducer
