import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header, Text, Screen } from '../../components'
import { color } from '../../theme'
import * as styles from './dashboard-screen.style'

export const DashboardScreen: React.FC = function DashboardScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  return (
    <View testID="DashboardScreen" style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="dashboardScreen.howTo"
          leftIcon="back"
          onLeftPress={goBack}
          style={styles.HEADER}
          titleStyle={styles.HEADER_TITLE}
        />
        <Text style={styles.TITLE} preset="header" tx="dashboardScreen.title" />
        <Text style={styles.SUB_TITILE} preset="header" tx="dashboardScreen.tagLine" />
      </Screen>
    </View>
  )
}
