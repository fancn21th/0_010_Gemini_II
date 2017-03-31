import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as reducers from '../reducers'

const configureStore = () => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  /* eslint-enable */
  return store
}

export default configureStore
