import confgureAppStore, { initialAppState } from '../'
import { getUsers } from './users.slice'

const setup = () => {
  const { store } = confgureAppStore({
    initialState: initialAppState,
    encryptionKey: { isFresh: true, key: 'TEST_KEY' },
  })
  return { store }
}
describe('Users --> slice', () => {
  it('should get all users on action made', () => {
    const { store } = setup()
    // Arrange
    const prevState = store.getState().users
    console.log(JSON.stringify(prevState))

    // Act
    store.dispatch(getUsers())

    // Assert
    const newState = store.getState().users
    console.log('new state', newState)

    expect(prevState).not.toEqual(newState)
  })
})
