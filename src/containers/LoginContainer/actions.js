import {
  LOGIN,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
} from './constants'

export const login = (mobile, password, captcha) => (
  {
    type: LOGIN,
    mobile,
    password,
    captcha,
  }
)

export const loginSucceed = (user) => (
  {
    type: LOGIN_SUCCEEDED,
    user,
  }
)

export const loginFailed = (message) => (
  {
    type: LOGIN_FAILED,
    message,
  }
)
