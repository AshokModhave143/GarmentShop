/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import './i18n'
import './utils/ignore-warnings'
import React, { useEffect, useRef } from 'react'
import { NavigationContainerRef } from '@react-navigation/native'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'
import { initFonts } from './theme/fonts'
import * as storage from './utils/storage'
import store from './reduxStore'
import { I18nextProvider } from 'react-i18next'
import i18nInstance from './i18n/i18n'

import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from './navigators'
import { ToggleStorybook } from '../storybook/toggle-storybook'
import RNBootSplash from 'react-native-bootsplash'

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
enableScreens()

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE'

/**
 * This is the root component of our app.
 */
function App() {
  const navigationRef = useRef<NavigationContainerRef>(null)

  setRootNavigation(navigationRef)
  useBackButtonHandler(navigationRef, canExit)
  const { initialNavigationState, onNavigationStateChange } = useNavigationPersistence(
    storage,
    NAVIGATION_PERSISTENCE_KEY,
  )

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true })
    }, 3000)
    ;(async () => {
      await initFonts()
    })()
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.
  // if (!rootStore) return null

  // otherwise, we're ready to render the app
  return (
    <Provider store={store}>
      <ToggleStorybook>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <I18nextProvider i18n={i18nInstance}>
            <RootNavigator
              ref={navigationRef}
              initialState={initialNavigationState}
              onStateChange={onNavigationStateChange}
            />
          </I18nextProvider>
        </SafeAreaProvider>
      </ToggleStorybook>
    </Provider>
  )
}

export default App
