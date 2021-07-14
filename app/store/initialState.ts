import { userState, initialState as users } from './users/users.slice'
export type ApplicationState = {
  users: userState
}
export const initialState: ApplicationState = {
  users: users,
}
