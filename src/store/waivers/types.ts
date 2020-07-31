export enum WaiversActionTypes {
  FETCH_WAIVERS = '@@waivers/FETCH_WAIVERS',
  FETCH_WAIVERS_SUCCESS = '@@waivers/FETCH_WAIVERS_SUCCESS',
  FETCH_WAIVERS_ERROR = '@@waivers/FETCH_WAIVERS_ERROR',
  POST_WAIVER = '@@waivers/POST_WAIVER',
  POST_WAIVER_SUCCESS = '@@waivers/POST_WAIVER_SUCCESS',
  POST_WAIVER_ERROR = '@@waivers/POST_WAIVER_ERROR',
}

export interface IQuestion {
  id: number
  key?: string
  type: string
  label: string
  required: boolean
  isValid: boolean
  col?: number
  value?: string | null
  setQuestionValue?: (id: number, value: string) => void
  inputLinks?: string[]
  order: number
}

export interface IStep {
  id: number
  title: string
  questions?: IQuestion[]
  status?: string
  details?: string
  isLocked?: boolean
  order: number
}

export interface IWaiver {
  id: string
  slug: string
  title: string
  steps: IStep[]
}

export interface IWaiversState {
  readonly loading: boolean
  readonly data: IWaiver[]
  readonly errors?: string
  readonly posting: boolean
}
