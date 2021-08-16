import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import configureAppStore from './utils/createStore'

import { initialState as initialAppState } from './initialState'
import { persistStore } from 'reduxjs-toolkit-persist'
import { Action, Dispatch } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

export const configureStore = ({ initialState = initialAppState, encryptionKey }) => {
  const store = configureAppStore({ initialState, encryptionKey })
  const persistor = persistStore(store)

  return { store, persistor }
}

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = Dispatch<Action>
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector
export { initialAppState }
export default configureStore
