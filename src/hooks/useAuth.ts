import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  fetchUser,
  checkAuthorizationCode as checkAuthorizationCodeAction,
  clearAuthorization as clearAuthorizationAction,
} from '../store/auth'
import { ApplicationState } from '../store'

export const useAuth = () => {
  const dispatch = useDispatch()
  const hasChecked: boolean = useSelector(
    (state: ApplicationState): boolean => state.auth.hasChecked
  )
  const isAuthenticated: boolean = useSelector(
    (state: ApplicationState): boolean => state.auth.isAuthenticated
  )
  const isAuthorized: boolean = useSelector(
    (state: ApplicationState): boolean => state.auth.isAuthorized
  )
  const isCheckingAuthorization: boolean = useSelector(
    (state: ApplicationState): boolean => state.auth.isCheckingAuthorization
  )
  const authorizationErrors: string | undefined = useSelector(
    (state: ApplicationState): string | undefined =>
      state.auth.authorizationErrors
  )

  useEffect(() => {
    if (!isAuthenticated && !hasChecked) {
      dispatch(fetchUser())
    }
  }, [isAuthenticated, hasChecked, dispatch])

  const checkAuthorizationCode = useCallback(
    (code: string) => {
      dispatch(checkAuthorizationCodeAction(code))
    },
    [dispatch]
  )

  const clearAuthorization = useCallback(() => {
    dispatch(clearAuthorizationAction())
  }, [dispatch])

  return {
    hasChecked,
    isAuthenticated,
    isAuthorized,
    isCheckingAuthorization,
    authorizationErrors,
    checkAuthorizationCode,
    clearAuthorization,
  }
}
