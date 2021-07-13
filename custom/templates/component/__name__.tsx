import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { Text } from '../'
import * as styles from './__name__(kebabCase).style'

export interface __name__Props {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const __name__ = function __name__(props: __name__Props) {
  const { style } = props

  return (
    <View style={[styles.CONTAINER, style]}>
      <Text style={styles.TEXT}>Hello</Text>
    </View>
  )
}
