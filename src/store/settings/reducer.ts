import { Reducer } from 'redux'
import dotProp from 'dot-prop-immutable'
import { ISettingsState, IAlert, SettingsActionTypes } from './types'

export const initialState: ISettingsState = {
  loading: false,
  errors: undefined,
  data: undefined,
  alerts: [],
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<ISettingsState> = (state = initialState, action) => {
  switch (action.type) {
    case SettingsActionTypes.FETCH_SETTINGS: {
      return dotProp.set(state, 'loading', true)
    }
    case SettingsActionTypes.FETCH_SETTINGS_SUCCESS: {
      state = dotProp.set(state, 'data', action.payload)
      return dotProp.set(state, 'loading', false)
    }
    case SettingsActionTypes.FETCH_SETTINGS_ERROR: {
      state = dotProp.set(state, 'errors', action.payload)
      return dotProp.set(state, 'loading', false)
    }
    case SettingsActionTypes.SET_SETTING: {
      return dotProp.set(state, 'loading', true)
    }
    case SettingsActionTypes.SET_SETTING_SUCCESS: {
      const { payload } = action
      state = dotProp.set(state, `data.${payload.key}`, payload.value)
      state = dotProp.set(
        state,
        'alers',
        state?.alerts.concat({ type: 'success', message: 'Save Successful' })
      )
      return dotProp.set(state, 'loading', false)
    }
    case SettingsActionTypes.SET_SETTING_ERROR: {
      state = dotProp.set(state, 'errors', action.payload)
      return dotProp.set(state, 'loading', false)
    }
    case SettingsActionTypes.CLOSE_ALERT: {
      const filteredAlerts = state.alerts.filter(
        (alert: IAlert, i: number) => i !== action.payload
      )
      state = dotProp.set(state, 'alerts', filteredAlerts)
      return dotProp.set(state, 'loading', false)
    }
    default: {
      return state
    }
  }
}

export { reducer as settingsReducer }
