import { AnyAction, EnhancedStore } from '@reduxjs/toolkit'
import { Persistor } from 'reduxjs-toolkit-persist/es/types'
import { EncryptionKeyType } from '.'
import { RootState } from '../store'

export type Obj = { [key: string]: any }
export type StoreType = EnhancedStore<any, AnyAction, any[]>

export type ConfigureStoreType = {
  initialState: RootState
  encryptionKey: EncryptionKeyType
}

export type ConfigureStoreReturnType = { store: StoreType; persistor: Persistor }
