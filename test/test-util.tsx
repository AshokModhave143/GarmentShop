import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { render as rtlRender } from '@testing-library/react-native'
import { initialState } from '../app/reduxStore/initialState'
import createReducer from '../app/reduxStore/rootReducer'

const AllProviders = ({ children }) => {
  const store = configureStore({
    reducer: createReducer(),
    preloadedState: initialState,
  })
  return (
    <Provider store={store}>
      <SafeAreaProvider
        initialMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        {children}
      </SafeAreaProvider>
    </Provider>
  )
}
const customRender = (ui, options) => {
  return rtlRender(ui, { wrapper: AllProviders, ...options })
}

/** Library functions export */
export * from '@testing-library/react-native'
export { customRender as render }
