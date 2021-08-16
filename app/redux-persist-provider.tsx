import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { EncryptionGate, StoreGate } from './components/encryption-gate'
import { getEncryptionKey as getEncryptionKeyDefault } from './store/utils/encryption/get-encryption-key'
import { ConfigureStoreType, GetEncryptionKeyType, Obj } from './types'
import { configureStore as configureStoreDefault, initialAppState } from './store'

export type Props = {
  getEncryptionKey?: GetEncryptionKeyType
  configureStore?: ConfigureStoreType
  encryptionErrorCb?: () => void
  initialState: Obj
  children: any
}
export const ReduxPersistProvider = ({
  getEncryptionKey = getEncryptionKeyDefault,
  configureStore = configureStoreDefault,
  initialState = initialAppState,
  encryptionErrorCb,
  children,
}: Props) => {
  const handleEncryptionErrorCb = () => {
    console.log('Error in encryption key')
  }
  return (
    <EncryptionGate getEncryptionKey={getEncryptionKey}>
      {(encryptionKey) => (
        <StoreGate
          encryptionKey={encryptionKey}
          configureStore={configureStore}
          encryptionErrorCb={handleEncryptionErrorCb}
          initialState={initialState}
        >
          {({ store, persistor }) => (
            <Provider store={store}>
              <PersistGate persistor={persistor} loading={null}>
                {children}
              </PersistGate>
            </Provider>
          )}
        </StoreGate>
      )}
    </EncryptionGate>
  )
}
