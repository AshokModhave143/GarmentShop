import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from '../../theme'
import { LoginScreenContainer } from '../../screens'
import { Screens } from '../screen-list'

export type AuthParamList = {
  login: undefined
}
const Stack = createStackNavigator<AuthParamList>()

export function AuthNavigator() {
  const { colors } = useTheme()

  return (
    <Stack.Navigator
      initialRouteName={Screens.login}
      screenOptions={{
        cardStyle: { backgroundColor: colors.background },
        headerShown: false,
      }}
    >
      <Stack.Screen name={Screens.login} component={LoginScreenContainer} />
    </Stack.Navigator>
  )
}
