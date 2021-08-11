import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { ThemeNames } from '../../theme'

export type ThemeState = {
  themeName: string
}
export const initialState: ThemeState = {
  themeName: ThemeNames.DARK,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    saveTheme: (state, action: PayloadAction<ThemeState>) => {
      state.themeName = action.payload.themeName
    },
    getTheme: (state) => {
      return state
    },
  },
})

// selectors
export const themeSelector = (state: RootState) => state.theme.themeName
// Actions
export const { saveTheme, getTheme } = themeSlice.actions

// reducer
export default themeSlice.reducer
