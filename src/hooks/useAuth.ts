import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchUser } from '../store/auth'
import { ApplicationState } from '../store'

export const useAuth = () => {
  const isAuthenticated: boolean = useSelector(
    (state: ApplicationState): boolean => state.auth.isAuthenticated
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(fetchUser())
    }
  }, [isAuthenticated, dispatch])

  return {
    isAuthenticated,
  }
}