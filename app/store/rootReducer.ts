import userSlice from './users/users.slice'
import themeSlice from './theme/theme.slice'

const reducers = {
  users: userSlice,
  theme: themeSlice,
}
export default function createRootReducer(injectedReducers = {}) {
  const rootReducer = {
    ...reducers,
    ...injectedReducers,
  }
  return rootReducer
}
