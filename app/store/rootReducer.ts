import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './users/users.slice'

import themeSlice from './theme/theme.slice'

const reducers = {
  users: userSlice,
  theme: themeSlice,
}
export default function createRootReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...reducers,
    ...injectedReducers,
  })
  return rootReducer
}
