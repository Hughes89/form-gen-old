export enum AuthActionTypes {
  FETCH_USER = '@@auth/FETCH_USER',
  FETCH_USER_SUCCESS = '@@auth/FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = '@@auth/FETCH_USER_ERROR',
  CHECK_AUTHORIZATION_CODE = '@@auth/CHECK_AUTHORIZATION_CODE',
  CHECK_AUTHORIZATION_CODE_SUCCESS = '@@auth/CHECK_AUTHORIZATION_CODE_SUCCESS',
  CHECK_AUTHORIZATION_CODE_ERROR = '@@auth/CHECK_AUTHORIZATION_CODE_ERROR',
  CLEAR_AUTHORIZATION = '@@auth/CLEAR_AUTHORIZATION',
}

export interface IUser {
  companyTitle: string
  companySubTitle: string
}

export interface IAuthState {
  readonly isAuthenticated: boolean
  readonly errors?: string
  readonly hasChecked: boolean
  readonly isAuthorized: boolean
  readonly isCheckingAuthorization: boolean
  readonly authorizationErrors?: string
}
