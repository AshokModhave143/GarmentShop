import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Screen, Text } from '../../components'
import { color } from '../../theme'
import * as styles from './welcome-screen.style'

export const WelcomeScreen: React.FC = function WelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate('dashboard')

  return (
    <View testID="WelcomeScreen" style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text style={styles.TITLE_WRAPPER}>
          <Text style={styles.TITLE} text="Your new app, " />
          <Text style={styles.ALMOST} text="almost" />
          <Text style={styles.TITLE} text="!" />
        </Text>

        <Text style={styles.CONTENT}>
          This probably isn't what your app is going to look like. Unless your designer handed you
          this screen and, in that case, congrats! You're ready to ship.
        </Text>
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
