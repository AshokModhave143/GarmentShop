import { StyleSheet } from 'react-native'
import { color, spacing, typography } from '../../theme'

export const styles = StyleSheet.create({
  CARD: {
    width: '80%',
    maxWidth: 350,
  },
  GRADIANT_CONTANER: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  ERROR_TEXT: {
    color: color.error,
    marginHorizontal: spacing[2],
  },
  TEXT_INPUT: {
    marginVertical: 10,
  },
  TEXT_INPUT_ERROR: {
    borderColor: color.error,
  },
})
