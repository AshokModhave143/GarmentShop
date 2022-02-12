import React, { useState, useEffect } from 'react'
import * as R from 'ramda'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RootState } from '../../../store'
import { ConfigureStoreType, EncryptionKeyType, ConfigureStoreReturnType } from '../../../types'

export type StoreGateType = {
  configureStore: (props: ConfigureStoreType) => ConfigureStoreReturnType
  encryptionKey: EncryptionKeyType
  encryptionErrorCb: (err: Error) => void
  initialState: RootState
  children: (props: ConfigureStoreReturnType) => any
}

const storageKey = 'persist:root'

export const StoreGate: React.FC<StoreGateType> = ({
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
      setHasData(R.not(R.isEmpty(data)))
    })()
  }, [])

  if (hasData === false) return null

  if (encryptionKey.isFresh) {
    AsyncStorage.clear().catch((err) => {
      if (encryptionErrorCb) {
        encryptionErrorCb(err)
      }
    })
  }

  return children(configureStore({ initialState, encryptionKey }))
}
