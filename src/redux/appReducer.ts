import { getAuthUserData } from './authReducer'

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getAuthUserData())
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess())
    })
}

export type InitialStateType = {
  initialized: boolean
}

const initialState: InitialStateType = {
  initialized: false
}
export const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}