import React, { useState } from 'react'
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider,
  useTheme,
  withTheme,
  configureFonts,
} from 'react-native-paper'
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import { fontConfig, typography } from './typography'
import * as R from 'ramda'

export const ThemeNames = {
  DARK: 'dark',
  LIGHT: 'light',
}
export const CombinedDefaultTheme = R.mergeDeepRight(PaperDefaultTheme, NavigationDefaultTheme)
export const CombinedDarkTheme = R.mergeDeepRight(PaperDarkTheme, NavigationDarkTheme)

export const theme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
  },
  fonts: configureFonts(fontConfig as any),
  typography: typography,
}

export const ThemeContext = React.createContext({
  toggleTheme: () => null,
  isThemeDark: false,
})

export const ThemeProvider = ({ themeName = ThemeNames.LIGHT, children }) => {
  const [isThemeDark, setIsThemeDark] = useState(themeName === ThemeNames.DARK)

  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark)
  }, [isThemeDark])

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  )

  return (
    <ThemeContext.Provider value={preferences}>
      <Provider theme={theme}>{children}</Provider>
    </ThemeContext.Provider>
  )
}

export { useTheme, withTheme }
