import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SettingsActionTypes, ISettings } from './types'
import {
  fetchSettingsError,
  fetchSettingsSuccess,
  setSettingError,
  setSettingSuccess,
} from './actions'
import { callApi } from '../../utils/api'

function* getSettings() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'get', '/settings')
    console.log(res)
    if (res.error) {
      yield put(fetchSettingsError(res.error))
    } else {
      yield put(fetchSettingsSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchSettingsError(err.stack))
    } else {
      yield put(fetchSettingsError('An unknown error occured.'))
    }
  }
}

function* setSettings({ type, payload }: { type: string; payload: ISettings }) {
  try {
    console.log(payload)
    const res = yield call(callApi, 'put', '/settings', payload)

    if (res.error) {
      yield put(setSettingError(res.error))
    } else {
      yield put(setSettingSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(setSettingError(err.stack))
    } else {
      yield put(setSettingError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(SettingsActionTypes.FETCH_SETTINGS, getSettings)
}

function* watchSetRequest() {
  yield takeLatest(SettingsActionTypes.SET_SETTING, setSettings)
}

function* saga() {
  yield all([fork(watchFetchRequest), fork(watchSetRequest)])
}

export { saga as settingsSaga }
