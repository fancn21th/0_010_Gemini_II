import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCEEDED,
} from './constants'

const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
      }
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        user: action.user,
      }
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.message,
      }
    default:
      return state
  }
}

export default login
