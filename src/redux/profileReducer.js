export const ADD_POST = 'ADD_POST'
export const UPDATE_POST_BODY = 'UPDATE_POST_BODY'

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostActionCreator = (text) => ({ type: UPDATE_POST_BODY, body: text })

let initialState = {
  posts: [
    { id: 1, post: 'Hi! How are you?', likesCount: 15 },
    { id: 2, post: 'Hi! Im good', likesCount: 23 },
    { id: 3, post: 'sdfdsfsdf', likesCount: 1 },
    { id: 4, post: 'xcvcv', likesCount: 2 },
    { id: 5, post: 'qqeeefgggg', likesCount: 3 },
    { id: 6, post: 'hhhhaaaaaa', likesCount: 3 }
  ],
  newPost: ''
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
        ...state,
        newPost: action.body
      }
    }
    default:
      return state
  }
}

export default profileReducer
