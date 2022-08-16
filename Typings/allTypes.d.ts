import React from 'react'
import { compose } from 'redux'
import { resources, defaultNS } from '../app/i18n/i18n'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources['en']
  }
}

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      //  myOwnColor: string
    }

    interface Theme {
      // myOwnProperty: boolean
    }
  }
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
