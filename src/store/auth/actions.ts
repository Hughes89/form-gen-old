import { action } from 'typesafe-actions'
import { AuthActionTypes } from './types'

export const fetchUser = () => action(AuthActionTypes.FETCH_USER)
export const fetchUserSuccess = () => action(AuthActionTypes.FETCH_USER_SUCCESS)
export const fetchUserError = (message: string) =>
  action(AuthActionTypes.FETCH_USER_ERROR, message)