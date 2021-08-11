import { UserState, initialState as users } from './users/users.slice'
import { ThemeState, initialState as theme } from './theme/theme.slice'
export type ApplicationState = {
  users: UserState
  theme: ThemeState
}
export const initialState: ApplicationState = {
  users: users,
  theme,
}
