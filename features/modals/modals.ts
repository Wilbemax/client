import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalMenu: false,
  catalogMenu: false,
}

export const modalsSlise = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModalMenu: (state, action) => {
      state.modalMenu = action.payload
    },
    setCatalogMenu: (state, action) => {
      state.catalogMenu = action.payload
    },
  },
})

export const { setModalMenu, setCatalogMenu } = modalsSlise.actions

export default modalsSlise.reducer
