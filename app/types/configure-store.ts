export type Obj = { [key: string]: any }

export type ConfigureStoreReturnType = { store: any; persistor: any }
export type ConfigureStoreType = ({
  initialState: Obj,
  encryptionKey: EncryptionKeyType,
}) => ConfigureStoreReturnType
