import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'

import { waiversSaga, waiversReducer, IWaiversState } from './waivers'
import { authSaga, authReducer, IAuthState } from './auth'
import { settingsSaga, settingsReducer, ISettingsState } from './settings'
import { formsSaga, formsReducer, IFormsState } from './forms'

import { alertsReducer, IAlertsState } from './alerts'

// The top-level state object
export interface ApplicationState {
  auth: IAuthState
  waivers: IWaiversState
  settings: ISettingsState
  forms: IFormsState
  alerts: IAlertsState
}

export const createRootReducer = () =>
  combineReducers({
    auth: authReducer,
    waivers: waiversReducer,
    settings: settingsReducer,
    forms: formsReducer,
    alerts: alertsReducer,
  })

export function* rootSaga() {
  yield all([
    fork(waiversSaga),
    fork(settingsSaga),
    fork(authSaga),
    fork(formsSaga),
  ])
}
