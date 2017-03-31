import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import * as reducers from '../reducers'
import saga from '../containers/LoginContainer/sagas'

const configureStore = (history) => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ]
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  )
  /* eslint-enable */
  sagaMiddleware.run(saga)
  return store
}

export default configureStore
