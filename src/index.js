import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './stores/configureStore'
import { App, Home, Foo, Bar } from './components'
import './index.css'

const store = configureStore()
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
