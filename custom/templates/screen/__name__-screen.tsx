import React from 'react'
import { Screen, Text } from '../../components'
// import { useNavigation } from "@react-navigation/native"
import * as styles from './__name__-screen.style'

export interface I__name__Screen {}
export const __name__Screen: React.FC<I__name__Screen> = function __name__Screen(
  props: I__name__Screen,
) {
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={styles.FULL} preset="scroll">
      <Text style={styles.TEXT} preset="header" text="__name__" />
    </Screen>
  )
}
