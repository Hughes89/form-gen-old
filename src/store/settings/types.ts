export enum SettingsActionTypes {
  FETCH_SETTINGS = '@@settings/FETCH_SETTINGS',
  FETCH_SETTINGS_SUCCESS = '@@settings/FETCH_SETTINGS_SUCCESS',
  FETCH_SETTINGS_ERROR = '@@settings/FETCH_SETTINGS_ERROR',
  SET_SETTING = '@@settings/SET_SETTINGS',
  SET_SETTING_SUCCESS = '@@settings/SET_SETTINGS_SUCCESS',
  SET_SETTING_ERROR = '@@settings/SET_SETTINGS_ERROR',
  CLOSE_ALERT = '@@settings/CLOSE_ALERT',
}

export interface IAlert {
  type: string
  message: string
}

export interface ISettings {
  id: string | null
  companyName: string
  companySubTitle?: string
  waiverDirName: string
}

export interface ISettingsState {
  readonly loading: boolean
  readonly data?: ISettings
  readonly errors?: string
  readonly alerts: IAlert[]
}
