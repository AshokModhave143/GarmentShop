import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { LoginScreen } from './login-screen'

export const LoginScreenContainer: React.FC = () => {
  const navigation = useNavigation()

  const props = { navigation }
  return <LoginScreen {...props} />
}
