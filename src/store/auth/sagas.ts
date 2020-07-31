import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { AuthActionTypes } from './types'
import { fetchUserSuccess, fetchUserError } from './actions'
import { callApi } from '../../utils/api'
import { fetchSuccess as fetchWaiversSuccess } from '../waivers'
import { fetchSettingsSuccess } from '../settings'
import { fetchFormsSuccess } from '../forms'

function* getUser() {
  try {
    const res = yield call(callApi, 'get', '/user')
    if (res.status === 401) {
      window.location.replace('http://localhost:1337/api/auth/google')
    }
    yield put(fetchSettingsSuccess(res.settings))
    yield put(fetchWaiversSuccess(res.waivers))
    yield put(fetchFormsSuccess(res.waivers))
    yield put(fetchUserSuccess())
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchUserError(err.stack))
    } else {
      yield put(fetchUserError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(AuthActionTypes.FETCH_USER, getUser)
}

function* saga() {
  yield all([fork(watchFetchRequest)])
}

export { saga as authSaga }
