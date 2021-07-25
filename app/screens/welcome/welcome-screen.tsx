import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Screen, Text } from '../../components'
import { color } from '../../theme'
import * as styles from './welcome-screen.style'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store'

import { getUsers } from '../../store/users/users.slice'

export const WelcomeScreen: React.FC = function WelcomeScreen() {
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const nextScreen = () => navigation.navigate('dashboard')
  const users = useSelector((state: RootState) => state.users)

  const handleGetUsers = async () => await dispatch(getUsers())

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
          tx="welcomeScreen.continue"
          textStyle={styles.CONTINUE_TEXT}
          text="Get Users"
          onPress={handleGetUsers}
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
