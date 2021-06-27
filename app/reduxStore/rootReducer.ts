import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './users/users.slice'

export default (injectedReducers = {}) => {
  // const rootReducer = combineReducers({
  //   users: userSlice,
  //   ...injectedReducers,
  // })
  const rootReducer = {
    users: userSlice,
    ...injectedReducers,
  }
  return rootReducer
}
