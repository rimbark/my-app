export const ADD_POST = 'ADD_POST'
export const UPDATE_POST_BODY = 'UPDATE_POST_BODY'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

export const addPost = () => ({ type: ADD_POST })
export const updatePost = (text) => ({ type: UPDATE_POST_BODY, body: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

let initialState = {
  posts: [
    { id: 1, post: 'Hi! How are you?', likesCount: 15 },
    { id: 2, post: 'Hi! Im good', likesCount: 23 },
  ],
  newPost: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {id: 7, post: state.newPost, likesCount: 0}],
        newPost: ''
      }
    }
    case UPDATE_POST_BODY: {
      return {
        ...state, newPost: action.body
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state, profile: action.profile
      }
    }
    default:
      return state
  }
}

export default profileReducer
