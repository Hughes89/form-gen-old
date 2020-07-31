import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { ApplicationState, createRootReducer, rootSaga } from './store'

export default function configureStore(): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({ trace: false })
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    createRootReducer(),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)
  return store
}
