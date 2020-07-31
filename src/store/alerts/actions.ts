import { action } from 'typesafe-actions'
import { AlertsActionTypes, IAlert } from './types'

export const addAlert = (alert: IAlert) =>
  action(AlertsActionTypes.ADD_ALERT, alert)
export const removeAlert = (index: number) =>
  action(AlertsActionTypes.REMOVE_ALERT, index)
