import { useDispatch } from 'react-redux'
import createReducer from './rootReducer'
import configureAppStore from './utils/createStore'
import rootSaga from './rootSaga'

const { store } = configureAppStore(createReducer, rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store
