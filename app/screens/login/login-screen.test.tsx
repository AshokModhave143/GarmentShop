import React from 'react'
import { render, cleanup } from '../../../test/test-util'
import { LoginScreen } from './login-screen'

afterEach(cleanup)

describe('Login screen', () => {
  it('should render the component without crashing', () => {
    const props = { navigation: { navigate: jest.fn() } }
    const { toJSON } = render(<LoginScreen {...props} />, {})
    expect(toJSON()).toMatchSnapshot()
  })
})
