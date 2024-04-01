import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = AllowedLangs.RU

export const langSlise = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<AllowedLangs>) => action.payload,
  },
})

export const { setLang } = langSlise.actions

export default langSlise.reducer
