import store from '../'
import { get__name__, add__name__ } from './__name__.slice'

describe('__name__ --> slice', () => {
  it('should get all __name__', () => {
    const __name__ListBefore = store.getState().__name__

    store.dispatch(get__name__())
    const __name__ListAfter = store.getState().__name__
    expect(__name__ListBefore).toBe(__name__ListAfter)
  })
})
