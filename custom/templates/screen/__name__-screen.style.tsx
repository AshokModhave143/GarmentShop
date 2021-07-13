import { ViewStyle, TextStyle } from 'react-native'
import { color, spacing, typography } from '../../theme'

export const FULL: ViewStyle = {
  flex: 1,
}
export const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
  marginHorizontal: spacing[2],
}
