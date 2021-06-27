import { all, fork } from 'redux-saga/effects'

import { watchRequestGetUsersAsync } from './users/users.saga'

// Types

// Sagas

// Api

// Connect types to sagas
export default function* rootSaga() {
  yield fork(watchRequestGetUsersAsync)
}
