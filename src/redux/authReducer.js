import { authDataAPI } from '../api/api'

export const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'
const usersAuth = (id, email, login) => ({ type: SET_USER_AUTH_DATA, data: { id, email, login } })

export const authorization = () => {
  return (dispatch) => {
    authDataAPI.getAuthData().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data
        dispatch(usersAuth(id, email, login))
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
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
}

export default authReducer