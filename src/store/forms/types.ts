export enum FormActionTypes {
  FETCH_FORMS = '@@forms/FETCH_FORMS',
  FETCH_FORMS_SUCCESS = '@@forms/FETCH_FORMS_SUCCESS',
  FETCH_FORMS_ERROR = '@@forms/FETCH_FORMS_ERROR',
  SET_CURRENT_FORM = '@@forms/SET_CURRENT_FORM',
  ANSWER_FORM_FIELD = '@@forms/ANSWER_FORM_FIELD',
}

export interface Header {
  id: number
  type: string
  text: string
  col?: any
  value?: string
}

export interface Banner {
  id: number
  type: string
  text: string
  color: string
  col?: any
  value?: string
}

export interface InlineText {
  id: number
  type: string
  name: string
  text: string
  value?: string
  isRequired: boolean
  col?: any
}

export interface Initials {
  id: number
  type: string
  name: string
  text: string
  value?: string
  isRequired: boolean
  col?: any
}

export interface InputText {
  id: number
  type: string
  label: string
  name: string
  col: number
  value?: string
  isRequired?: boolean
}

export interface InputDate {
  id: number
  type: string
  label: string
  name: string
  col: number
  value?: null | Date
  isToday?: boolean
  isRequired?: boolean
  canFuture?: boolean
  canPast?: boolean
}

export interface InputPhone {
  id: number
  type: string
  label: string
  name: string
  col: number
  value?: string
  isRequired?: boolean
}

export type Field =
  | Header
  | Banner
  | InlineText
  | Initials
  | InputText
  | InputDate
  | InputPhone

export interface Form {
  title: string
  slug: string
  fields: Field[]
}

export interface Forms {
  [key: string]: Form
}

export interface IFormsState {
  readonly loading: boolean
  readonly all: Forms
  readonly current?: Form
}
