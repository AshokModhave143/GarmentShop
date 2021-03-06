import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

export type User = {
  name: string
  salary: number
}
export type UserState = {
  hasError: boolean
  users: User[]
}
export const initialState: UserState = {
  hasError: false,
  users: [],
}

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.unshift(action.payload)
    },
    getUsers: (state) => {
      state.hasError = false
    },
    getUsersSuccess: (state, action: PayloadAction<User[]>): any => {
      state.users = action.payload
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getUsersFailure: (state, action: PayloadAction<any>) => {
      state.hasError = true
    },
  },
})

// selectors
export const userSelector = (state: RootState) => state.users
// Actions
export const { addUser, getUsersSuccess, getUsersFailure, getUsers } = userSlice.actions

// reducer
export default userSlice.reducer
