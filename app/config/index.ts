import DebugConfig from './DebugConfig'
import AppConfig from './AppConfig'

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it it possible to turn
  // it off, but healthier approach is to fix the warnings
  console.disableYellowBox = !DebugConfig.yellowBox
}
