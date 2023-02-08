import { profileDataAPI } from '../api/api'

export const ADD_POST = 'ADD_POST'
export const addPost = (data) => ({ type: ADD_POST, data })
export const UPDATE_POST_BODY = 'UPDATE_POST_BODY'
export const updatePost = (text) => ({ type: UPDATE_POST_BODY, body: text })
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const SET_STATUS = 'SET_STATUS'
const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId) => (dispatch) => {
  profileDataAPI.getUserProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data))
    })
}

export const getStatus = (userId) => (dispatch) => {
  profileDataAPI.getUserStatus(userId)
    .then(data => {
      dispatch(setStatus(data))
    })
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileDataAPI.updateUserStatus(status)
      .then(data => {
        if (data.resultCode === 0)
          dispatch(setStatus(status))
      })
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
        ...state, profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state, status: action.status
      }
    }
    default:
      return state
  }
}

export default profileReducer
