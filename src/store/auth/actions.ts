import { action } from 'typesafe-actions'
import { AuthActionTypes } from './types'

export const fetchUser = () => action(AuthActionTypes.FETCH_USER)
export const fetchUserSuccess = ({ isAuth }: { isAuth: boolean }) =>
  action(AuthActionTypes.FETCH_USER_SUCCESS, { isAuth })
export const fetchUserError = (message: string) =>
  action(AuthActionTypes.FETCH_USER_ERROR, message)

export const clearAuthorization = () =>
  action(AuthActionTypes.CLEAR_AUTHORIZATION)
export const checkAuthorizationCode = (code: string) =>
  action(AuthActionTypes.CHECK_AUTHORIZATION_CODE, code)
export const checkAuthorizationCodeSuccess = () =>
  action(AuthActionTypes.CHECK_AUTHORIZATION_CODE_SUCCESS)
export const checkAuthorizationCodeError = (message: string) =>
  action(AuthActionTypes.CHECK_AUTHORIZATION_CODE_ERROR, message)
