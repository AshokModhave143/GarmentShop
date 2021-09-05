import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { EncryptionGate } from './elements/encryption-gate'
import { StoreGate } from './elements/store-gate'
import { ConfigureStoreReturnType, ConfigureStoreType, GetEncryptionKeyType } from '../../types'
import { RootState } from '../../store'

export type ReduxPersistEncryptionGateProps = {
  getEncryptionKey: GetEncryptionKeyType
  configureStore: (props: ConfigureStoreType) => ConfigureStoreReturnType
  encryptionErrorCb?: (err: Error) => void
  initialState: RootState
  children: any
}
export const ReduxPersistEncryptionGate: React.FC<ReduxPersistEncryptionGateProps> = (
  props: ReduxPersistEncryptionGateProps,
) => {
  return (
    <EncryptionGate getEncryptionKey={props.getEncryptionKey}>
      {(encryptionKey) => (
        <StoreGate
          encryptionKey={encryptionKey}
          configureStore={props.configureStore}
          encryptionErrorCb={props.encryptionErrorCb}
          initialState={props.initialState}
        >
          {({ store, persistor }) => (
            <Provider store={store}>
              <PersistGate persistor={persistor} loading={null}>
                {props.children}
              </PersistGate>
            </Provider>
          )}
        </StoreGate>
      )}
    </EncryptionGate>
  )
}
