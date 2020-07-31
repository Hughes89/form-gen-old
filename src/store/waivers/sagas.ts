import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { WaiversActionTypes } from './types'
import {
  fetchError,
  fetchSuccess,
  postWaiverSuccess,
  postWaiverError,
} from './actions'
import { callApi } from '../../utils/api'

function* handleFetch() {
  try {
    const res = yield call(callApi, 'get', '/waivers')

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res.waivers))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* postWaiver(data: any) {
  try {
    const res = yield call(callApi, 'post', '/waiver', data)

    if (res.error) {
      yield put(postWaiverError(res.error))
    } else {
      yield put(postWaiverSuccess(res.waivers))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(postWaiverError(err.stack))
    } else {
      yield put(postWaiverError('An unknown error occured.'))
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeLatest(WaiversActionTypes.FETCH_WAIVERS, handleFetch)
}

function* watchPostRequest() {
  yield takeLatest(WaiversActionTypes.POST_WAIVER, postWaiver)
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* saga() {
  yield all([fork(watchFetchRequest), fork(watchPostRequest)])
}

export { saga as waiversSaga }
