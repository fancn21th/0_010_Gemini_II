import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCEEDED,
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
    type: LOGIN_FAILED,
    user,
  }
)

export const loginFailed = (message) => (
  {
    type: LOGIN_SUCCEEDED,
    message,
  }
)
