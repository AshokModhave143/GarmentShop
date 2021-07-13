import React from 'react'
import { render, cleanup } from '../../../test/test-util'
import { __name__Screen } from './__name__-screen'

afterEach(cleanup)

describe('__name__ screen', () => {
  it('should render the component without crashing', () => {
    const { toJSON } = render(<__name__Screen />, {})
    expect(toJSON()).toMatchSnapshot()
  })
})
