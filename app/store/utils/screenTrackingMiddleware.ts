import { CommonActions } from '@react-navigation/native'

// Get current screen from navigation state
const getCurrentRouteName = (navigationState) => {
  if (!navigationState) return null

  const route = navigationState.routes[navigationState.index]

  // dive into nested navigators
  if (route.routes) return getCurrentRouteName(route)

  return route.routeName
}

const screenTracking =
  ({ getState }) =>
  (next) =>
  (action) => {
    if (action.type !== CommonActions.navigate && action.type !== CommonActions.goBack) {
      return next(action)
    }

    const currentScreen = getCurrentRouteName(getState().nav)
    const result = next(action)
    const nextScreen = getCurrentRouteName(getState().nav)
    if (nextScreen !== currentScreen) {
      try {
        __DEV__ && console.tron.log(`NAVIGATING ${currentScreen} to ${nextScreen}`)
        // Example: Analytics.trackEvent('user_navigation', {currentScreen, nextScreen})
      } catch (e) {
        __DEV__ && console.tron.log(e)
      }
    }
    return result
  }

export default screenTracking
