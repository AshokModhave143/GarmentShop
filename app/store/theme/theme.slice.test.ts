import store from '../'
import { getTheme } from './Theme.slice'

describe('Theme --> slice', () => {
  it('should get all Theme', () => {
    const ThemeListBefore = store.getState().Theme

    store.dispatch(getTheme())
    const ThemeListAfter = store.getState().Theme
    expect(ThemeListBefore).toBe(ThemeListAfter)
  })
})
