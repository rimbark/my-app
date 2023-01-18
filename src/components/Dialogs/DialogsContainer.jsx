import React from 'react'
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/messagesReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
  let messages = props.state.messagesReducer.messages
  let dialogs = props.state.messagesReducer.dialogs
  let newMessage = props.state.messagesReducer.newOutputMessage
  const sendMessage = () => {
    props.state.dispatch(addMessageActionCreator())
  }

  const messageTextChange = (text) => {
    props.state.dispatch(updateMessageActionCreator(text))
  }

  return <Dialogs sendMessage={sendMessage}
                  messageTextChange={messageTextChange}
                  messages={messages}
                  dialogs={dialogs}
                  newMessage={newMessage}/>
}

export default DialogsContainer
