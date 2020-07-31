import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { FormActionTypes } from './types'
import { fetchFormsError, fetchFormsSuccess } from './actions'
import { callApi } from '../../utils/api'

function* fetchForms() {
  try {
    const res = yield call(callApi, 'get', '/forms')

    if (res.error) {
      yield put(fetchFormsError(res.error))
    } else {
      yield put(fetchFormsSuccess(res.waivers))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchFormsError(err.stack))
    } else {
      yield put(fetchFormsError('An unknown error occured.'))
    }
  }
}

// function* postWaiver(data: any) {
//   try {
//     const res = yield call(callApi, 'post', '/waiver', data)

//     if (res.error) {
//       yield put(postWaiverError(res.error))
//     } else {
//       yield put(postWaiverSuccess(res.waivers))
//     }
//   } catch (err) {
//     if (err instanceof Error && err.stack) {
//       yield put(postWaiverError(err.stack))
//     } else {
//       yield put(postWaiverError('An unknown error occured.'))
//     }
//   }
// }

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeLatest(FormActionTypes.FETCH_FORMS, fetchForms)
}

// function* watchPostRequest() {
//   yield takeLatest(WaiversActionTypes.POST_WAIVER, postWaiver)
// }

// We can also use `fork()` here to split our saga into multiple watchers.
function* saga() {
  yield all([fork(watchFetchRequest)])
}

export { saga as formsSaga }
