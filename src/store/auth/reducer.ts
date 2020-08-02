import { Reducer } from 'redux'
import dotProp from 'dot-prop-immutable'
import { AuthActionTypes, IAuthState } from './types'

export const initialState: IAuthState = {
  hasChecked: false,
  isAuthenticated: false,
  isCheckingAuthorization: false,
  isAuthorized: false,
  authorizationErrors: undefined,
  errors: undefined,
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<IAuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.FETCH_USER: {
      return dotProp.set(state, 'loading', true)
    }
    case AuthActionTypes.FETCH_USER_SUCCESS: {
      state = dotProp.set(state, 'hasChecked', true)
      return dotProp.set(state, 'isAuthenticated', action.payload.isAuth)
    }
    case AuthActionTypes.FETCH_USER_ERROR: {
      state = dotProp.set(state, 'errors', action.payload)
      return dotProp.set(state, 'isAuthenticated', false)
    }
    case AuthActionTypes.CHECK_AUTHORIZATION_CODE: {
      return dotProp.set(state, 'isCheckingAuthorization', true)
    }
    case AuthActionTypes.CHECK_AUTHORIZATION_CODE_SUCCESS: {
      state = dotProp.set(state, 'isAuthorized', true)
      return dotProp.set(state, 'isCheckingAuthorization', false)
    }
    case AuthActionTypes.CHECK_AUTHORIZATION_CODE_ERROR: {
      state = dotProp.set(state, 'authorizationErrors', action.payload)
      return dotProp.set(state, 'isCheckingAuthorization', false)
    }
    case AuthActionTypes.CLEAR_AUTHORIZATION: {
      state = dotProp.set(state, 'isCheckingAuthorization', false)
      state = dotProp.set(state, 'authorizationErrors', undefined)
      return dotProp.set(state, 'isAuthorized', false)
    }

    default: {
      return state
    }
  }
}

export { reducer as authReducer }
