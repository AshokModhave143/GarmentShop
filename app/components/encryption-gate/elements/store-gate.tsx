import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import {
  ConfigureStoreType,
  EncryptionKeyType,
  ConfigureStoreReturnType,
  Obj,
} from '../../../types'

export type StoreGateType = {
  configureStore: ConfigureStoreType
  encryptionKey: EncryptionKeyType
  encryptionErrorCb: () => void
  initialState: Obj
  children: (props: ConfigureStoreReturnType) => any
}

const storageKey = 'persist:root'

export const StoreGate = ({
  configureStore,
  encryptionErrorCb,
  encryptionKey,
  children,
  initialState,
}: StoreGateType) => {
  const [hasData, setHasData] = useState(false)

  useEffect(() => {
    ;(async () => {
      const data = await AsyncStorage.getItem(storageKey)
      setHasData(data !== null)
    })()
  }, [])

  if (hasData === false) return null

  if (encryptionKey.isFresh && hasData !== null) {
    AsyncStorage.clear()

    if (encryptionErrorCb) {
      encryptionErrorCb()
    }
  }

  const { store, persistor } = configureStore({ initialState, encryptionKey })

  return children({ store, persistor })
}
