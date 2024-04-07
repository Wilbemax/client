import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalMenu: false,
  catalogMenu: false,
  searchModal: false,
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
    setSearchModalWindow: (state, action) => {
      state.searchModal = action.payload
    },
  },
})

export const { setModalMenu, setCatalogMenu, setSearchModalWindow } =
  modalsSlise.actions

export default modalsSlise.reducer
