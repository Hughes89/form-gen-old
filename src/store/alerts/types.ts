export enum AlertsActionTypes {
  ADD_ALERT = '@@alerts/ADD_ALERT',
  REMOVE_ALERT = '@@alerts/REMOVE_ALERT',
}

export interface IAlert {
  type: 'success' | 'danger'
  message: string
}

export interface IAlertsState {
  readonly alerts: IAlert[]
}
