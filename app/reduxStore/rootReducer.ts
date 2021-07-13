import userSlice from './users/users.slice'

const reducers = {
  users: userSlice,
}
export default function createRootReducer(injectedReducers = {}) {
  const rootReducer = {
    ...reducers,
    ...injectedReducers,
  }
  return rootReducer
}
