import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware, {END} from 'redux-saga'
import rootReducer from '../reducers'

export default function configureStore(initialState) {

  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      createLogger(),
      sagaMiddleware)
  )

  store.runSaga = sagaMiddleware.run
  return store
}