export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY'

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE_BODY, body: text })

const messagesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.messages.push({ id: 7, message: state.newOutputMessage })
      state.newOutputMessage = ''
      return state
    case UPDATE_MESSAGE_BODY:
      state.newOutputMessage = action.body
      return state
    default:
      return state
  }
}

export default messagesReducer
