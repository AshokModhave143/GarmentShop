import confgureAppStore, { initialAppState } from '../'
import { login } from './auth.slice'

const setup = () => {
  const { store } = confgureAppStore({
    initialState: initialAppState,
    encryptionKey: { isFresh: true, key: 'TEST_KEY' },
  })
  return { store }
}

describe('Auth --> slice', () => {
  it('should login successful on request', () => {
    const { store } = setup()
    // Arrange
    const prevState = store.getState().users

    // Act
    store.dispatch(login({ username: 'test', password: '1111' }))

    // Assert
    const newState = store.getState().users

    expect(prevState).toEqual(newState)
  })
})
