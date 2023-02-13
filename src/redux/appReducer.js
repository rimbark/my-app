import { getAuthUserData } from './authReducer'

export const INITIALIZED_SACCES = 'INITIALIZED_SACCES'
const initializedSuccess = () => ({type: INITIALIZED_SACCES})

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess())
    })
}

const initialState = {
  initialized: false
}
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SACCES:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}