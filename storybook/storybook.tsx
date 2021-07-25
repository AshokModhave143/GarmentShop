import React from 'react'
import { getStorybookUI, configure } from '@storybook/react-native'
import { registerStories } from './storybook-registry'
import './rn-addons'

configure(() => {
  registerStories()
}, module)

const StorybookUI = getStorybookUI({
  port: 9001,
  host: 'localhost',
  onDeviceUI: true,
  asyncStorage: require('@react-native-async-storage/async-storage').default || null,
})

export function StorybookUIRoot() {
  // useEffect(() => {
  //   ;(async () => {
  //     await initFonts()
  //     if (typeof __TEST__ === 'undefined' || !__TEST__) {
  //       const Reactotron = require('../app/services/reactotron')
  //       const reactotron = new Reactotron.Reactotron()
  //       reactotron.setup()
  //     }
  //   })()
  // }, [])

  return <StorybookUI />
}

export default StorybookUIRoot
