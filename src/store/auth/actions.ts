import { action } from 'typesafe-actions'
import { AuthActionTypes } from './types'

export const fetchUser = () => action(AuthActionTypes.FETCH_USER)
export const fetchUserSuccess = ({ isAuth }: { isAuth: boolean }) =>
  action(AuthActionTypes.FETCH_USER_SUCCESS, { isAuth })
export const fetchUserError = (message: string) =>
  action(AuthActionTypes.FETCH_USER_ERROR, message)
