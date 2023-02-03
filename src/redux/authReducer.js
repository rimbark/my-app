export const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'
export const usersAuth = (id, email, login) => ({type: SET_USER_AUTH_DATA, data: {id, email, login}})

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