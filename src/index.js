import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './stores/configureStore'
import { App, Home, Foo } from './components'
import LoginContainer from './containers/LoginContainer'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="foo" component={Foo} />
        <Route path="login" component={LoginContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
