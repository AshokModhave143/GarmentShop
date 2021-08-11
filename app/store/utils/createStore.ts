import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import screenTracking from './screenTrackingMiddleware'
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors'
import { getComposeWithDevTools } from './devTools/getComposeWithDevTools'

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

  const store = createAppropriateStore({
    reducer: createRootReducer(),
    preloadedState,
    middleware: [...getDefaultMiddleware({ thunk: false }), ...middleware],
    devTools: true,
    enhancers,
  })

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
  }
}
