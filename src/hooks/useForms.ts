import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Form, setCurrentForm as setCurrentFormAction } from '../store/forms'
import { ApplicationState } from '../store'

export interface INav {
  title: string
  slug: string
}

export const useForms = () => {
  const dispatch = useDispatch()
  const loading: boolean = useSelector(
    (state: ApplicationState): boolean => state.forms.loading
  )

  const navigation = useSelector((state: ApplicationState): INav[] => {
    const { all } = state.forms
    let navigation = []
    for (let key in all) {
      const { title, slug } = all[key]
      navigation.push({ title, slug })
    }
    return navigation
  })

  const currentForm = useSelector(
    (state: ApplicationState): Form | undefined => state.forms.current
  )

  const setCurrentForm = useCallback(
    (slug: string): void => {
      console.log(slug)
      dispatch(setCurrentFormAction(slug))
    },
    [dispatch]
  )

  return {
    loading,
    navigation,
    setCurrentForm,
    currentForm,
  }
}
