import { Reducer } from 'redux'
import dotProp from 'dot-prop-immutable'
import { FormActionTypes, IFormsState, Field } from './types'
import cloneDeep from 'lodash.clonedeep'

export const initialState: IFormsState = {
  loading: false,
  all: {},
  current: undefined,
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<IFormsState> = (state = initialState, action) => {
  switch (action.type) {
    case FormActionTypes.FETCH_FORMS: {
      return dotProp.set(state, 'loading', true)
    }
    case FormActionTypes.FETCH_FORMS_SUCCESS: {
      state = dotProp.set(state, 'all', action.payload)
      return dotProp.set(state, 'loading', false)
    }
    case FormActionTypes.FETCH_FORMS_ERROR: {
      state = dotProp.set(state, 'errors', action.payload)
      return dotProp.set(state, 'loading', false)
    }
    case FormActionTypes.SET_CURRENT_FORM: {
      const form = cloneDeep(state.all[action.payload])
      console.log(cloneDeep(state.all))
      form.fields = form.fields.map((field: Field) => {
        if (field.type.includes('input')) {
          // if (field.type.includes('date')) {
          //   field.value = field.isToday ? new Date() : null
          // } else {
          field.value = ''
          // }
        }
        return field
      })

      return dotProp.set(state, 'current', form)
    }
    default: {
      return state
    }
  }
}

export { reducer as formsReducer }
