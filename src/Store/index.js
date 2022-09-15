import { createStore, applyMiddleware } from 'redux'
import app from '../Store/reducer/index'

import createSagaMiddleware from 'redux-saga'
import dataSaga from '../Store/saga/index'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}