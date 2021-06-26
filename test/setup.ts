// we always make sure 'react-native' gets included first
import 'react-native'

// libraries to mock
import './__mocks__/mock-react-native-image'
import './__mocks__/mock-async-storage'
import './__mocks__/mock-i18n'
import './__mocks__/mock-reactotron'
import './__mocks__/mock-react-navigation'

jest.useFakeTimers()
declare global {
  let __TEST__
}
