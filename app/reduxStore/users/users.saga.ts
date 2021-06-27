import { put, select, call, takeEvery } from 'redux-saga/effects'
import { getUsersSuccess, getUsersFailure, User, getUsers } from './users.slice'

export function* requestGetUsers() {
  try {
    console.log('calling getusers')
    const users: User[] = [
      {
        name: 'xyz',
        salary: 1000,
      },
      {
        name: 'pqr',
        salary: 1000,
      },
    ]
    yield put(getUsersSuccess({ ...users }))
  } catch (e) {
    console.log('Error in processing...')
    yield put(getUsersFailure({ ...e }))
  }
}

export function* watchRequestGetUsersAsync() {
  yield takeEvery(getUsers.type, requestGetUsers)
}
