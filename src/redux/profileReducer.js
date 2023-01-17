export const ADD_POST = 'ADD_POST'
export const UPDATE_POST_BODY = 'UPDATE_POST_BODY'

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostActionCreator = (text) => ({ type: UPDATE_POST_BODY, body: text })

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({ id: 7, post: state.newPost, likesCount: 0 })
      state.newPost = ''
      return state
    case UPDATE_POST_BODY:
      state.newPost = action.body
      return state
    default:
      return state
  }
}

export default profileReducer
