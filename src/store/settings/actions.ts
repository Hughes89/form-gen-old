import { action } from 'typesafe-actions'
import { SettingsActionTypes, ISettings } from './types'

export const fetchSettings = () => action(SettingsActionTypes.FETCH_SETTINGS)
export const fetchSettingsSuccess = (data: ISettings) =>
  action(SettingsActionTypes.FETCH_SETTINGS_SUCCESS, data)
export const fetchSettingsError = (message: string) =>
  action(SettingsActionTypes.FETCH_SETTINGS_ERROR, message)
export const setSetting = (setting: { key: string; value: string }) =>
  action(SettingsActionTypes.SET_SETTING, setting)
export const setSettingSuccess = (setting: { key: string; value: string }) =>
  action(SettingsActionTypes.SET_SETTING_SUCCESS, setting)
export const setSettingError = (message: string) =>
  action(SettingsActionTypes.SET_SETTING_ERROR, message)
export const closeSettingAlert = (index: number) =>
  action(SettingsActionTypes.CLOSE_ALERT, index)
