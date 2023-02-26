import { profileDataAPI } from '../api/api'
import { contactsErrorFinder } from '../helpers/contactsErrorFinder'

const ADD_POST = 'ADD_POST'  //  redux-ducks префиксы для неповторения
export const addPost = (data) => ({ type: ADD_POST, data })
const UPDATE_POST_BODY = 'UPDATE_POST_BODY'
export const updatePost = (text) => ({ type: UPDATE_POST_BODY, body: text })
const SET_STATUS = 'SET_STATUS'
const setStatus = (status) => ({ type: SET_STATUS, status })
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO'
const setProfilePhoto = (file) => ({ type: SET_USER_PROFILE, file })

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getProfile = (userId) => async (dispatch) => {
  const data = await profileDataAPI.getUserProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
  const data = await profileDataAPI.getUserStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatus = (status) => {
  return async (dispatch) => {
    const data = await profileDataAPI.updateUserStatus(status)
    if (data.resultCode === 0)
      dispatch(setStatus(status))
  }
}

export const updateProfileContacts = (profile) => {
  return async (dispatch) => {
    const data = await profileDataAPI.updateUserProfile(profile)
    if (data.resultCode === 0) {
      dispatch(setUserProfile(profile))
      return data.resultCode
    } else {
      return contactsErrorFinder(data.messages)
    }
  }
}

export const loadPhoto = (file) => {
  return async (dispatch) => {
    const data = await profileDataAPI.updateUserPhoto(file)
    if (data.resultCode === 0)
      dispatch(setProfilePhoto(data.data.photos))
  }
}

const initialState = {
  posts: [
    { id: 1, post: 'Hi! How are you?', likesCount: 15 },
    { id: 2, post: 'Hi! Im good', likesCount: 23 },
  ],
  newPost: '',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
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
        profile: action.profile,
        errorsFromAPI: ''
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
          ...state.profile, photos: action.file
        }
      }
    }
    default:
      return state
  }
}

export default profileReducer
