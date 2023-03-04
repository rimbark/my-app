import {authDataAPI, securityAPI} from '../api/api'

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'
type SetUserAuthDataActionType = {
    type: typeof SET_USER_AUTH_DATA
    payload: SetUserAuthDataActionPayloadType
}
type SetUserAuthDataActionPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const setUserAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserAuthDataActionType => ({
    type: SET_USER_AUTH_DATA,
    payload: {id, email, login, isAuth}
})

const GET_CAPTCHA_URL_SUCCES = 'GET_CAPTCHA_URL_SUCCES'
type SetCaptchaUrlActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCES
    captchaUrl: string
}
const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlActionType => ({type: GET_CAPTCHA_URL_SUCCES, captchaUrl})

const SET_ERROR = 'SET_ERROR'
type SetServersErrorActionType = {
    type: typeof SET_ERROR
    message: string
}
export const setServersError = (message: string): SetServersErrorActionType => ({type: SET_ERROR, message})

export const getAuthUserData = () => {
    return async (dispatch: any) => {
        const data = await authDataAPI.getAuthData()
        if (data.resultCode === 0) {
            const {id, email, login} = data.data
            dispatch(setUserAuthData(id, email, login, true))
        }
    }
}

export const logOut = () => {
    return async (dispatch: any) => {
        const response = await authDataAPI.signOut()
        if (response.data.resultCode === 0) {
            dispatch(setUserAuthData(null, null, null, false))
        }
    }
}
type LogInType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}
export const logIn = (inputData: LogInType) => async (dispatch: any) => {
    const data = await authDataAPI.signIn(inputData.email, inputData.password, inputData.rememberMe, inputData.captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        dispatch(setServersError(data.messages[0]))
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: any) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(setCaptchaUrl(captchaUrl))
    }
}

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    serversError: string | null
    captchaUrl: string | null
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    serversError: null,
    captchaUrl: null
}
const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
                serversError: null
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