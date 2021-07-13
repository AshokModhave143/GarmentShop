import { ViewStyle, TextStyle } from 'react-native'
import { color, typography } from '../../theme'

export const CONTAINER: ViewStyle = {
  justifyContent: 'center',
}

export const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}
