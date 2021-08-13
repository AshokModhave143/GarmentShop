import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonPersistConfig } from '../../../config'

export const createPersistanceConfig = (encryptionTransform?: any) => {
  const config = {
    ...CommonPersistConfig.storeConfig,
    storage: AsyncStorage,
    // tranforms: [encryptionTransform]
  }
  return config
}
