import  {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducer from '../reducers'

const crateSToreWithMiddleware = applyMiddleware(
  logger()
)(createStore)

export default function configureStore(initialState) {
  return crateSToreWithMiddleware(reducer, initialState)
}