import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

export type User = {
  username: string
  password: string
}
export type ErrorState = {
  status: string
  message: string
}
export type AuthState = {
  hasError: boolean
  isLoggedIn: boolean
  user: User
  error: ErrorState
}
export const initialState: AuthState = {
  hasError: false,
  isLoggedIn: false,
  user: null,
  error: null,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.hasError = false
      state.isLoggedIn = false
      state.error = null
    },
    loginSuccess: (state, action: PayloadAction<User>): any => {
      state.isLoggedIn = true
      state.user = action.payload
      state.error = null
    },
    loginFailure: (state, action: PayloadAction<any>) => {
      state.hasError = true
      state.user = null
      state.error = action.payload
    },
    logout: (state) => {
      state.hasError = false
      state.user = null
      state.isLoggedIn = false
      state.error = null
    },
  },
})

// selectors
export const authSelector = (state: RootState) => state.auth
// Actions
export const { login, loginFailure, loginSuccess, logout } = AuthSlice.actions

// reducer
export default AuthSlice.reducer
