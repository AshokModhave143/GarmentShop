import { StyleSheet } from 'react-native'
import { color, spacing, typography } from '../../theme'

export const styles = StyleSheet.create({
  FULL: {
    flex: 1,
  },
  OUTPUT: {
    color: color.primary,
  },
  TEXT: {
    color: color.palette.black,
    fontFamily: typography.primary,
    marginHorizontal: spacing[2],
  },
  TEXT_INPUT: {
    height: 40,
  },
})
