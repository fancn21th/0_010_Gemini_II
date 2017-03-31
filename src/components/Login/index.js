import React from 'react'
import { mobileValidator } from '../../utilities/validator'
import { INVALID_MOBILE } from './constants'

class Login extends React.Component {
  static propTypes = {
    login: React.PropTypes.func.isRequired
  }

  state = {}

  login = () => {
    const mobile = this.mobileField.value
    const password = this.passwordField.value

    // if(!mobileValidator.validate(mobile)){
    //     this.setState({
    //         errorText: INVALID_MOBILE
    //     })
    // }else{
    //     this.setState({
    //         errorText: null
    //     })
    //
    //     this.props.login(mobile, password)
    // }
    this.props.login(mobile, password)
  }

  render() {
    const mobileErrorField = this.state.errorText ? (
        <div> {this.state.errorText} </div>
      ) : null

    return (
      <div class="container">
        <div class="form-signin">
          <h2 class="form-signin-heading">用户注册</h2>

          <label for="_inputMobile" class="sr-only">手机号</label>
          <input id="_inputMobile"
                 class="form-control"
                 placeholder="手机号"
                 required
                 ref={(f) => {
                   this.mobileField = f
                 }}
          />
          {mobileErrorField}
          <label for="_inputPassword" class="sr-only">密码</label>
          <input type="password"
                 id="_inputPassword"
                 class="form-control"
                 placeholder="密码"
                 required
                 ref={(f) => {
                   this.passwordField = f
                 }}
          />

          <div class="checkbox">
            <label>
              <input type="checkbox" value="remember-me"/> 自动登录
            </label>
            <a>忘记密码</a>
          </div>

          <button class="btn btn-lg btn-primary btn-block"
                  onClick={this.login}>登录
          </button>
        </div>
      </div>
    )
  }
}

export default Login

