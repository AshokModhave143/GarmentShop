import store from '../'
import { getUsers } from './users.slice'

describe('Users --> slice', () => {
  it('should get all users on action made', () => {
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
