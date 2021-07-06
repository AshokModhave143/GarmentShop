import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import createReducer from './rootReducer'
import configureAppStore from './utils/createStore'
import rootSaga from './rootSaga'
import { initialState } from './initialState'

const { store } = configureAppStore(createReducer, rootSaga, initialState)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
