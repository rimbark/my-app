import { authDataAPI, securityAPI } from '../api/api'

export const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'
const setUserAuthData = (id, email, login, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  payload: { id, email, login, isAuth }
})
export const GET_CAPTCHA_URL_SUCCES = 'GET_CAPTCHA_URL_SUCCES'
const setCaptchaUrl = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCES, captchaUrl })

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

export const logIn = ({ email, password, rememberMe, captcha }) => {
  return async (dispatch) => {
    const data = await authDataAPI.signIn(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }
      dispatch(setServersError(data.messages[0]))
    }
  }
}

export const getCaptchaUrl = () => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
  }
}

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  serversError: '',
  captchaUrl: null
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
    case GET_CAPTCHA_URL_SUCCES:
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }
    default:
      return state
  }
}

export default authReducer