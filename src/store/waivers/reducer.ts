import { Reducer } from 'redux'
import dotProp from 'dot-prop-immutable'
import { IWaiversState, WaiversActionTypes } from './types'

export const initialState: IWaiversState = {
  loading: false,
  errors: undefined,
  data: [],
  posting: false,
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<IWaiversState> = (state = initialState, action) => {
  switch (action.type) {
    case WaiversActionTypes.FETCH_WAIVERS: {
      return dotProp.set(state, 'loading', true)
    }
    case WaiversActionTypes.FETCH_WAIVERS_SUCCESS: {
      state = dotProp.set(state, 'data', action.payload)
      return dotProp.set(state, 'loading', false)
    }
    case WaiversActionTypes.FETCH_WAIVERS_ERROR: {
      state = dotProp.set(state, 'errors', action.payload)
      return dotProp.set(state, 'loading', false)
    }
    case WaiversActionTypes.POST_WAIVER:
      return dotProp.set(state, 'posting', true)
    case WaiversActionTypes.POST_WAIVER_SUCCESS:
      return dotProp.set(state, 'posting', false)
    default: {
      return state
    }
  }
}

export { reducer as waiversReducer }
