import { TextStyle, ViewStyle } from 'react-native'
import { color, spacing } from '../../theme'

export const FULL: ViewStyle = { flex: 1 }
export const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
export const BOLD: TextStyle = { fontWeight: 'bold' }
export const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
export const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: 'center',
  letterSpacing: 1.5,
}
export const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: 'center',
  marginBottom: spacing[5],
}
export const SUB_TITILE: TextStyle = {
  fontWeight: 'normal',
  fontSize: 16,
  textAlign: 'center',
}
