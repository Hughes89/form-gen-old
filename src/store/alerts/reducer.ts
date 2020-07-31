import { Reducer } from 'redux'
import dotProp from 'dot-prop-immutable'
import { IAlertsState, IAlert, AlertsActionTypes } from './types'

export const initialState: IAlertsState = {
  alerts: [{ type: 'success', message: 'Save Successful' }],
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<IAlertsState> = (state = initialState, action) => {
  switch (action.type) {
    case AlertsActionTypes.ADD_ALERT: {
      return dotProp.set(state, 'alerts', state.alerts.concat(action.payload))
    }
    case AlertsActionTypes.REMOVE_ALERT: {
      const filteredAlerts = state.alerts.filter(
        (aler: IAlert, i: number) => i !== action.payload
      )
      return dotProp.set(state, 'alerts', filteredAlerts)
    }

    default: {
      return state
    }
  }
}

export { reducer as alertsReducer }
