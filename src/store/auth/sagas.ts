import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AuthActionTypes } from './types'
import { fetchUserSuccess, fetchUserError } from './actions'
import { callApi, checkEmployeeCode } from '../../utils/api'
import { fetchSuccess as fetchWaiversSuccess } from '../waivers'
import { fetchSettingsSuccess } from '../settings'
import { fetchFormsSuccess } from '../forms'
import {
  checkAuthorizationCode,
  checkAuthorizationCodeSuccess,
  checkAuthorizationCodeError,
} from '../auth'

function* getUser() {
  try {
    const res = yield call(callApi, 'get', '/user')
    if (res.status === 401) {
      // Unauthenticated
      return yield put(fetchUserSuccess({ isAuth: false }))
    }
    yield put(fetchSettingsSuccess(res.settings))
    yield put(fetchWaiversSuccess(res.waivers))
    yield put(fetchFormsSuccess(res.waivers))
    yield put(fetchUserSuccess({ isAuth: true }))
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchUserError(err.stack))
    } else {
      yield put(fetchUserError('An unknown error occured.'))
    }
  }
}

function* checkAuthorizationCodeSaga({
  payload,
}: ReturnType<typeof checkAuthorizationCode>) {
  try {
    const match = yield call(checkEmployeeCode, payload)

    if (match) {
      yield put(checkAuthorizationCodeSuccess())
    } else {
      yield put(checkAuthorizationCodeError('Incorrect Authorization Code!'))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(checkAuthorizationCodeError(err.stack))
    } else {
      yield put(checkAuthorizationCodeError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(AuthActionTypes.FETCH_USER, getUser)
  yield takeLatest(
    AuthActionTypes.CHECK_AUTHORIZATION_CODE,
    checkAuthorizationCodeSaga
  )
}

// function* watchPutRequest() {
//   yield takeLatest(
//     AuthActionTypes.CHECK_AUTHORIZATION_CODE,
//     checkAuthorizationCodeSaga
//   )
// }

function* saga() {
  yield all([fork(watchFetchRequest)])
}

export { saga as authSaga }
