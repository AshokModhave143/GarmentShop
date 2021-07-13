import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

export type __name__ = {
  name: string
  salary: number
}
export type __name__State = {
  hasError: boolean
  __name__: __name__[]
}
export const initialState: __name__State = {
  hasError: false,
  __name__: [],
}

const __name__Slice = createSlice({
  name: '__name__',
  initialState: initialState,
  reducers: {
    add__name__: (state, action: PayloadAction<__name__>) => {
      state.__name__.unshift(action.payload)
    },
    get__name__: (state) => {
      state.hasError = false
    },
    get__name__Success: (state, action: PayloadAction<__name__[]>): any => {
      state.__name__ = action.payload
    },
    get__name__Failure: (state, action: PayloadAction<any>) => {
      state.hasError = true
    },
  },
})

// selectors
export const __name__Selector = (state: RootState) => state.__name__
// Actions
export const { add__name__, get__name__Success, get__name__Failure, get__name__ } =
  __name__Slice.actions

// reducer
export default __name__Slice.reducer
