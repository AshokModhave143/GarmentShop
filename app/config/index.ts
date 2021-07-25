import DebugConfig from './DebugConfig'

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it it possible to turn
  // it off, but healthier approach is to fix the warnings
  console.disableYellowBox = !DebugConfig.yellowBox
}

// Export the config files as constants
export { default as DebugConfig } from './DebugConfig'
export { default as AppConfig } from './AppConfig'
export { EnvConfig } from './EnvConfig'
