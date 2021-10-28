import React from 'react'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Screen, Text } from '../../components'
import * as styles from './welcome-screen.style'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store'
import { Button as RNPButton } from 'react-native-paper'
import { useTheme, color, ThemeContext, ThemeNames } from '../../theme'

import { getUsers } from '../../store/users/users.slice'
import { saveTheme } from '../../store/theme/theme.slice'
import { logout } from '../../store/auth/auth.slice'

export const WelcomeScreen: React.FC = function WelcomeScreen() {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const nextScreen = () => navigation.navigate('dashboard')
  const users = useSelector((state: RootState) => state.users.users)
  const theme = useTheme()

  const { toggleTheme, isThemeDark } = React.useContext(ThemeContext)

  const handleGetUsers = async () => await dispatch(getUsers())
  const handleSwitchTheme = () => {
    toggleTheme()
    dispatch(saveTheme({ themeName: isThemeDark ? ThemeNames.DARK : ThemeNames.LIGHT }))
  }

  return (
    <View testID="WelcomeScreen" style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text style={styles.TITLE_WRAPPER}>
          <Text style={styles.TITLE} text="Your new app, " />
          <Text style={styles.ALMOST} text="almost" />
          <Text style={styles.TITLE} text="!" />
        </Text>
        {users ? <Text>{JSON.stringify(users)}</Text> : <Text>Not available</Text>}

        <Text style={styles.CONTENT}>
          This probably isn't what your app is going to look like. Unless your designer handed you
          this screen and, in that case, congrats! You're ready to ship.
        </Text>
        <Button
          testID="next-screen-button"
          tx="welcomeScreen.fetchUsers"
          textStyle={styles.CONTINUE_TEXT}
          onPress={handleGetUsers}
        />
        <TouchableOpacity onPress={handleSwitchTheme}>
          <RNPButton
            theme={{
              roundness: 4,
              colors: {
                primary: theme?.colors.surface,
                background: theme.colors.background,
              },
            }}
            icon="camera"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: color.palette.orangeDarker,
              marginTop: 20,
            }}
          >
            Change Theme - RNP Button
          </RNPButton>
        </TouchableOpacity>
        <Button
          testID="logout-button"
          tx="welcomeScreen.logout"
          textStyle={styles.CONTINUE_TEXT}
          onPress={() => dispatch(logout())}
        />
      </Screen>
      <SafeAreaView style={styles.FOOTER}>
        <View style={styles.FOOTER_CONTENT}>
          <Button
            testID="next-screen-button"
            style={styles.CONTINUE}
            textStyle={styles.CONTINUE_TEXT}
            tx="welcomeScreen.continue"
            onPress={nextScreen}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}
