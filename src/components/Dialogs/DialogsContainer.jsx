import React from 'react'
import { addMessage, updateMessage } from '../../redux/messagesReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

const matStateToProps = (state) => {
  return {
    messages: state.messagesReducer.messages,
    dialogs: state.messagesReducer.dialogs,
    newMessage: state.messagesReducer.newOutputMessage
  }
}

const DialogsContainer = connect(matStateToProps, { updateMessage, addMessage })(Dialogs)

export default DialogsContainer
