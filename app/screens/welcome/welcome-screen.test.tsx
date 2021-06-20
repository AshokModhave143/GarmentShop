import React from 'react'
import { TestSafeAreaProvider } from '../../../test/test-util'
import { render, cleanup } from '@testing-library/react-native'
import { WelcomeScreen } from './welcome-screen'

afterEach(cleanup)

describe('Welcome screen', () => {
  it('should render the component without crashing', () => {
    const { toJSON } = render(
      <TestSafeAreaProvider>
        <WelcomeScreen />
      </TestSafeAreaProvider>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
