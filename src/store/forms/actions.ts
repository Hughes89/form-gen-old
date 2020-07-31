import { action } from 'typesafe-actions'
import { FormActionTypes, Forms } from './types'

// export const fetchForm = (slug: string) => action(FormActionTypes.FETCH_FORM)
// export const fetchFormSuccess = (form: Field[]) =>
//   action(FormActionTypes.FETCH_FORM_SUCCESS, form)
// export const fetchFormError = (message: string) =>
//   action(FormActionTypes.FETCH_FORM_ERROR, message)

export const fetchForms = (slug: string) => action(FormActionTypes.FETCH_FORMS)
export const fetchFormsSuccess = (forms: Forms) =>
  action(FormActionTypes.FETCH_FORMS_SUCCESS, forms)
export const fetchFormsError = (message: string) =>
  action(FormActionTypes.FETCH_FORMS_ERROR, message)
export const setCurrentForm = (slug: string) =>
  action(FormActionTypes.SET_CURRENT_FORM, slug)
export const answerFormField = (index: number) =>
  action(FormActionTypes.ANSWER_FORM_FIELD, index)
