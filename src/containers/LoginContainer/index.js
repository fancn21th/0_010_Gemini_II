import React from 'react'
import { connect } from 'react-redux'
import Login from '../../components/Login'
import * as actions from './actions'

class LoginContainer extends React.Component {
  componentWillMount() {
  }
  render() {
    return (
      <Login {...this.props} />
    )
  }
}

LoginContainer.propTypes = {
  login: React.PropTypes.func.isRequired,
}

export default connect(
  () => ({}),
  actions
)(LoginContainer)

