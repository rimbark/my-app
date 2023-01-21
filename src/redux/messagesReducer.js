export const ADD_MESSAGE = 'ADD_MESSAGE'
export const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY'

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE_BODY, body: text })

let initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Vasya',
      avatar: 'https://avatars.mds.yandex.net/i?id=faaa09c15409d2c94db4338ac7ffdb2a016e6b77-8313736-images-thumbs&n=13'
    },
    {
      id: 2,
      name: 'Petya',
      avatar: 'https://avatars.mds.yandex.net/i?id=942c7ec326e1417319c99b4bbbf9aebca9c50e18-8191562-images-thumbs&n=13'
    },
    {
      id: 3,
      name: 'Kostya',
      avatar: 'https://avatars.mds.yandex.net/i?id=ec9ff20b7a27d8fcf5f70684b2c6b306474ff9b5-4615702-images-thumbs&n=13'
    },
    {
      id: 4,
      name: 'Dima',
      avatar: 'https://avatars.mds.yandex.net/i?id=6fa9f3496c6e70b51b8631e1ec1f08a8fa9bd27f-4290022-images-thumbs&n=13'
    },
    {
      id: 5,
      name: 'Leha',
      avatar: 'https://avatars.mds.yandex.net/i?id=0297873aba115dd8d397a97bafcaeca6f4949e07-8196573-images-thumbs&n=13'
    }
  ],
  messages: [
    { id: 1, message: 'Hi! Vasya' },
    { id: 2, message: 'Hello! Big Loh' },
    { id: 3, message: 'Yo! Los' },
    { id: 4, message: 'Nu darova' },
    { id: 5, message: 'Davay poka' }
  ],
  newOutputMessage: ''
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: state.newOutputMessage }],
        newOutputMessage: ''
      }
    }
    case UPDATE_MESSAGE_BODY: {
      return {
        ...state,
        newOutputMessage: action.body
      }
    }
    default:
      return state
  }
}

export default messagesReducer
