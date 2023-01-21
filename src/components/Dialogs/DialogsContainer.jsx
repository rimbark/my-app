import React from 'react'
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/messagesReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

const matStateToProps = (state) => {
  return {
    messages: state.messagesReducer.messages,
    dialogs: state.messagesReducer.dialogs,
    newMessage: state.messagesReducer.newOutputMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    messageTextChange: (body) => {
      dispatch(updateMessageActionCreator(body))
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(matStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
