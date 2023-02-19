import { authDataAPI } from '../api/api'

export const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'
const setUserAuthData = (id, email, login, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  payload: { id, email, login, isAuth }
})
export const SET_ERROR = 'SET_ERROR'
export const setServersError = (message) => ({ type: SET_ERROR, message })

export const getAuthUserData = () => {
  return async (dispatch) => {
    const data = await authDataAPI.getAuthData()
    if (data.resultCode === 0) {
      const { id, email, login } = data.data
      dispatch(setUserAuthData(id, email, login, true))
    }
  }
}

export const logOut = () => {
  return async (dispatch) => {
    const response = await authDataAPI.signOut()
    if (response.data.resultCode === 0) {
      dispatch(setUserAuthData(null, null, null, false))
    }
  }
}

export const logIn = ({ email, password, rememberMe }) => {
  return async (dispatch) => {
    const data = await authDataAPI.signIn(email, password, rememberMe)
    if (data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      dispatch(setServersError(data.messages[0]))
    }
  }
}
const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  serversError: ''
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
        serversError: ''
      }
    case SET_ERROR:
      return {
        ...state,
        serversError: action.message
      }
    default:
      return state
  }
}

export default authReducer