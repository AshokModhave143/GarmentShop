import { all } from 'redux-saga/effects'

// Sagas
import { watchRequestGetUsersAsync } from './users/users.saga'
import { watchRequestLoginAsync } from './auth/auth.saga'

// Connect types to sagas
export default function* rootSaga() {
  yield all([watchRequestGetUsersAsync(), watchRequestLoginAsync()])
}
