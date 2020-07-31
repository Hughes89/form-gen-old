export enum AuthActionTypes {
  FETCH_USER = '@@auth/FETCH_USER',
  FETCH_USER_SUCCESS = '@@auth/FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = '@@auth/FETCH_USER_ERROR',
}

export interface IUser {
  companyTitle: string
  companySubTitle: string
}

export interface IAuthState {
  readonly isAuthenticated: boolean
  readonly errors?: string
}
