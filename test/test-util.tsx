import React from 'react'
import { Provider } from 'react-redux'
import configureStore, { initialAppState, RootState } from '../app/store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { render as rtlRender, RenderOptions } from '@testing-library/react-native'
import { StoreType } from '../app/types'

interface ExtendedRenderOptions extends RenderOptions {
  initialState?: Partial<RootState>
  store?: StoreType
}

const AllProviders =
  ({ store, initialState }) =>
  // eslint-disable-next-line react/display-name
  ({ children }) =>
    (
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

const customRender = (
  component,
  {
    initialState,
    store = configureStore({
      initialState: initialAppState,
      encryptionKey: { isFresh: true, key: 'TEST_KEY' },
    }).store,
    ...renderOptions
  }: ExtendedRenderOptions = {
    initialState: initialAppState,
  },
) => {
  return rtlRender(component, { wrapper: AllProviders({ store, initialState }), ...renderOptions })
}

/** Library functions export */
export * from '@testing-library/react-native'
export { customRender as render }
