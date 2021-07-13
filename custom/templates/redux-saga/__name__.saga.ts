import { put, takeLatest, all } from 'redux-saga/effects'
import { get__name__Success, get__name__Failure, __name__, get__name__ } from './__name__.slice'
import __name__Json from './__name__(camelCase).fixures.json'

export function* requestGet__name__() {
  try {
    const data: __name__[] = __name__Json
    yield put(get__name__Success({ ...data }))
  } catch (e) {
    console.log('Error in processing...')
    yield put(get__name__Failure({ ...e }))
  }
}

export function* watchRequestGet__name__Async() {
  yield all([takeLatest(get__name__.type, requestGet__name__)])
}
