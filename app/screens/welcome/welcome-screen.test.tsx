import React from 'react'
import { render, cleanup } from '../../../test/test-util'
import { WelcomeScreen } from './welcome-screen'

afterEach(cleanup)

describe('Welcome screen', () => {
  it('should render the component without crashing', () => {
    const { toJSON } = render(<WelcomeScreen />, {})
    expect(toJSON()).toMatchSnapshot()
  })
})
