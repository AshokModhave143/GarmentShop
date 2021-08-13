import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import screenTracking from './screenTrackingMiddleware'
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors'
import { getComposeWithDevTools } from './devTools/getComposeWithDevTools'
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
import { createPersistanceConfig } from './persistance/create-persistance-config'
import { createEncryptionTransform } from './encryption/create-encryption-transform'
import { getEncryptionKey } from './encryption/get-encryption-key'

// create store
export default (createRootReducer, rootSaga, preloadedState) => {
  /* -------------- Redux configuration -------------------- */
  const middleware = []
  const enhancers = []

  /* ------------- Navigation middlewares ----------------- */

  /* ------------- Analytics middleware ------------------- */
  middleware.push(screenTracking)

  /* ------------- Saga Middleware ------------------------ */
  const sagaMonitor = {} // DebugConfig.useReactotron ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  const { run: runSaga } = sagaMiddleware
  middleware.push(sagaMiddleware)

  /* ------------- Assemble middlewares ------------------ */
  enhancers.push(
    createInjectorsEnhancer({
      createReducer: createRootReducer,
      runSaga,
    }),
  )
  enhancers.push(getComposeWithDevTools())

  // if Reactotron is enabled (default is __DEV__), we'll create store through Reactotron
  const createAppropriateStore = configureStore
  // if (DebugConfig.useReactotron) {
  //   enhancers.push(Tron.createEnhancer())
  // }

  const encryptionKey = getEncryptionKey()
  const encryptionTransform = createEncryptionTransform(encryptionKey.key)
  const persistanceConfig = createPersistanceConfig(encryptionTransform)
  const persistedReducers = persistReducer(persistanceConfig, createRootReducer())

  const store = createAppropriateStore({
    reducer: persistedReducers,
    preloadedState,
    middleware: [...getDefaultMiddleware({ thunk: false }), ...middleware],
    devTools: true,
    enhancers,
  })

  const persistor = persistStore(store)

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  // make reducers hot reloadable
  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      forceReducerReload(store)
    })
  }

  return {
    store,
    sagaMiddleware,
    persistor,
  }
}
