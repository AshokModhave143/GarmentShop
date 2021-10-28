import { combineReducers, compose } from '@reduxjs/toolkit'
import userSlice from './users/users.slice'
import authSlice from './auth/auth.slice'

import themeSlice from './theme/theme.slice'

const reducers = {
  users: userSlice,
  theme: themeSlice,
  auth: authSlice,
}

export const rootReducer = combineReducers({
  ...reducers,
})
export default function createRootReducer(injectedReducers = {}) {
  return rootReducer
}
