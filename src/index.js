import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Home from './Home'
import Bar from './Bar'
import App from './App'
import Foo from './Foo'
import * as reducers from './reducers'

// Add the reducer to your store on the `routing` key
/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="foo" component={Foo} />
        <Route path="bar" component={Bar} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
