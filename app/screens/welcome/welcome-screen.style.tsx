import { TextStyle, ViewStyle } from 'react-native'
import { color, spacing, typography } from '../../theme'

export const FULL: ViewStyle = { flex: 1 }
export const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
export const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
export const BOLD: TextStyle = { fontWeight: 'bold' }
export const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: 'center',
}
export const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: 'center',
}
export const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: 'italic',
}
export const CONTENT: TextStyle = {
  ...TEXT,
  color: '#BAB6C8',
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}
export const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.deepPurple,
}
export const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
export const FOOTER: ViewStyle = { backgroundColor: '#20162D' }
export const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}
