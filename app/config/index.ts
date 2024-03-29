import { LogBox } from 'react-native'
import DebugConfig from './DebugConfig'

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it it possible to turn
  // it off, but healthier approach is to fix the warnings
  LogBox.ignoreAllLogs(!DebugConfig.yellowBox)
}

// Export the config files as constants
export { default as DebugConfig } from './DebugConfig'
export { default as AppConfig } from './AppConfig'
export { EnvConfig } from './EnvConfig'
export { CommonPersistConfig } from './CommonPersistConfig'
