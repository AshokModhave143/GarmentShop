import { UserState, initialState as users } from './users/users.slice'
import { ThemeState, initialState as theme } from './theme/theme.slice'
import { AuthState, initialState as auth } from './auth/auth.slice'

export type ApplicationState = {
  users: UserState
  theme: ThemeState
  auth: AuthState
}
export const initialState: ApplicationState = {
  users: users,
  theme,
  auth,
}
