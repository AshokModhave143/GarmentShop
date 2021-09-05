import confgureAppStore, { initialAppState } from '../'
import { getTheme } from './Theme.slice'

const setup = () => {
  const { store } = confgureAppStore({
    initialState: initialAppState,
    encryptionKey: { isFresh: true, key: 'TEST_KEY' },
  })
  return { store }
}
describe('Theme --> slice', () => {
  it('should get all Theme', () => {
    const { store } = setup()
    const ThemeListBefore = store.getState().theme

    store.dispatch(getTheme())
    const ThemeListAfter = store.getState().theme
    expect(ThemeListBefore).toBe(ThemeListAfter)
  })
})
