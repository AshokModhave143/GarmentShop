import { put, takeLatest, all } from 'redux-saga/effects'
import { login, loginFailure, loginSuccess, User } from './auth.slice'
import AuthJson from './auth.fixures.json'
import { PayloadAction } from '@reduxjs/toolkit'

export function* requestLogin(actions: PayloadAction<User>) {
  try {
    console.log(actions.payload)
    const data: User = actions.payload
    yield put(loginSuccess({ ...data }))
  } catch (e) {
    console.log('Error in processing...')
    yield put(loginFailure({ ...e }))
  }
}

export function* watchRequestLoginAsync() {
  yield all([takeLatest(login.type, requestLogin)])
}
