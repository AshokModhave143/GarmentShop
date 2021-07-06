import React from 'react'
import { DashboardScreen } from '..'
import { render } from '../../../test/test-util'

describe('Dashboard screen', () => {
  it('should render component without crashing', () => {
    const { toJSON } = render(<DashboardScreen />, {})
    expect(toJSON()).toMatchSnapshot()
  })
})
