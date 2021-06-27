import { configureStore, getDefaultMiddleware, applyMiddleware, compose } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import screenTracking from './screenTrackingMiddleware'
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors'

// create store
export default (rootReducer, rootSaga) => {
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
  enhancers.push(applyMiddleware(...middleware))
  enhancers.push(
    createInjectorsEnhancer({
      createReducer: rootReducer,
      runSaga,
    }),
  )

  // if Reactotron is enabled (default is __DEV__), we'll create store through Reactotron
  const createAppropriateStore = configureStore
  // if (DebugConfig.useReactotron) {
  //   enhancers.push(Tron.createEnhancer())
  // }

  const store = createAppropriateStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), compose(...middleware)],
    devTools: true,
    enhancers,
  })

  // kick off root saga
  const sagaManager = sagaMiddleware.run(rootSaga)

  // make reducers hot reloadable
  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      forceReducerReload(store)
    })
  }

  return {
    store,
    sagaManager,
    sagaMiddleware,
  }
}
