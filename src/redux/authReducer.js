import { authDataAPI } from '../api/api'

export const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'
const setUserAuthData = (id, email, login, isAuth) => ({ type: SET_USER_AUTH_DATA, payload: { id, email, login, isAuth } })

export const getAuthUserData = () => {
  return (dispatch) => {
    authDataAPI.getAuthData().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data
        dispatch(setUserAuthData(id, email, login, true))
      }
    })
  }
}

export const logIn = ({ email, password, rememberMe }) => {
  return (dispatch) => {
    authDataAPI.signIn(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData())
      }
    })
  }
}

export const logOut = () => {
  return (dispatch) => {
    authDataAPI.signOut().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false))
      }
    })
  }
}

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default authReducer