import { action } from 'typesafe-actions'
import { WaiversActionTypes, IWaiver } from './types'

export const fetchWaivers = () => action(WaiversActionTypes.FETCH_WAIVERS)
export const fetchSuccess = (data: IWaiver[]) =>
  action(WaiversActionTypes.FETCH_WAIVERS_SUCCESS, data)
export const fetchError = (message: string) =>
  action(WaiversActionTypes.FETCH_WAIVERS_ERROR, message)
export const postWaiver = (data: any) =>
  action(WaiversActionTypes.POST_WAIVER, data)
export const postWaiverSuccess = (data: any) =>
  action(WaiversActionTypes.POST_WAIVER_SUCCESS, data)
export const postWaiverError = (message: string) =>
  action(WaiversActionTypes.POST_WAIVER_ERROR, message)
