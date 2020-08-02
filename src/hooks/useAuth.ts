import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchUser } from '../store/auth'
import { ApplicationState } from '../store'

export const useAuth = () => {
  const hasChecked: boolean = useSelector(
    (state: ApplicationState): boolean => state.auth.hasChecked
  )
  const isAuthenticated: boolean = useSelector(
    (state: ApplicationState): boolean => state.auth.isAuthenticated
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isAuthenticated && !hasChecked) {
      dispatch(fetchUser())
    }
  }, [isAuthenticated, hasChecked, dispatch])

  return {
    hasChecked,
    isAuthenticated,
  }
}
