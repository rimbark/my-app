import { profileDataAPI } from '../api/api'
import { contactsErrorFinder } from '../helpers/contactsErrorFinder'
import {PhotoType, ProfileType} from "./Types";

const ADD_POST = 'ADD_POST'  //  redux-ducks префиксы для не повторения
type AddPostActionType = {
  type: typeof ADD_POST
  data: string
}
type PostType = {
  id: number
  post: string
  likesCount: number
}

export const addPost = (data: string): AddPostActionType => ({ type: ADD_POST, data })

const UPDATE_POST_BODY = 'UPDATE_POST_BODY'
type UpdatePostActionType = {
  type: typeof UPDATE_POST_BODY
  body: string
}
export const updatePost = (text: string): UpdatePostActionType => ({ type: UPDATE_POST_BODY, body: text })

const SET_STATUS = 'SET_STATUS'
type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })

const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO'
type SetProfilePhotoActionType = {
  type: typeof SET_PROFILE_PHOTO
  photos: PhotoType
}
const setProfilePhoto = (photos: PhotoType): SetProfilePhotoActionType => ({ type: SET_PROFILE_PHOTO, photos })

const SET_USER_PROFILE = 'SET_USER_PROFILE'
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

export const getProfile = (userId: number) => async (dispatch: any) => {
  const data = await profileDataAPI.getUserProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  const data = await profileDataAPI.getUserStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatus = (status: string) => {
  return async (dispatch: any) => {
    const data = await profileDataAPI.updateUserStatus(status)
    if (data.resultCode === 0)
      dispatch(setStatus(status))
  }
}

export const updateProfileContacts = (profile: ProfileType) => {
  return async (dispatch: any) => {
    const data = await profileDataAPI.updateUserProfile(profile)
    if (data.resultCode === 0) {
      dispatch(setUserProfile(profile))
      return data.resultCode
    } else {
      return contactsErrorFinder(data.messages)
    }
  }
}

export const loadPhoto = (file: any) => {
  return async (dispatch: any) => {
    const data = await profileDataAPI.updateUserPhoto(file)
    if (data.resultCode === 0)
      dispatch(setProfilePhoto(data.data.photos))
  }
}

const initialState = {
  posts: [
    { id: 1, post: 'Hi! How are you?', likesCount: 15 },
    { id: 2, post: 'Hi! Im good', likesCount: 23 },
  ] as Array<PostType>,
  newPost: '',
  profile: null as ProfileType | null,
  status: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: 7, post: action.data.newPostBody, likesCount: 0 }],
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state, status: action.status
      }
    }
    case SET_PROFILE_PHOTO: {
      return {
        ...state,
        profile: {
          ...state.profile, photos: action.photos
        } as ProfileType
      }
    }
    default:
      return state
  }
}

export default profileReducer
