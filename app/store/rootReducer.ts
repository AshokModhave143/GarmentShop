import { combineReducers, compose } from '@reduxjs/toolkit'
import userSlice from './users/users.slice'

import themeSlice from './theme/theme.slice'

const reducers = {
  users: userSlice,
  theme: themeSlice,
}

export const rootReducer = combineReducers({
  ...reducers,
})
export default function createRootReducer(injectedReducers = {}) {
  return rootReducer
}
